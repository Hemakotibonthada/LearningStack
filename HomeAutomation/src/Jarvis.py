import pyttsx3
import speech_recognition as sr
import datetime
import os
import requests
import json
from dateutil import parser

# Initialize the speech engine
engine = pyttsx3.init()
voices = engine.getProperty("voices")
engine.setProperty('voice', voices[14].id)  # Use the default macOS voice
engine.setProperty("rate", 200)
engine.setProperty("volume", 1)

# ESP32 IP address
ESP32_IP = "http://192.168.152.218"
SCHEDULE_FILE = "schedule.json"

# Function to speak
def speak(audio):
    engine.say(audio)
    print(f"Speaking: {audio}")
    engine.runAndWait()


# Capture voice command and convert it to text
def takecommand(timeout=300):  # Set timeout to 300 seconds (5 minutes)
    recognizer = sr.Recognizer()

    try:
        with sr.Microphone() as source:
            print("Listening...")
            recognizer.adjust_for_ambient_noise(source, duration=1)
            audio = recognizer.listen(source, timeout=timeout, phrase_time_limit=10)
            query = recognizer.recognize_google(audio)
            print(f"User said: {query}")
    except sr.WaitTimeoutError:
        print("Listening timed out.")
        return "none"
    except sr.UnknownValueError:
        print("Could not understand audio.")
        return "none"
    except sr.RequestError as e:
        print(f"Could not request results; {e}")
        return "none"

    return query.lower()


# Function to save schedules
def save_schedule(schedules):
    with open(SCHEDULE_FILE, "w") as file:
        json.dump(schedules, file)

# Function to load schedules
def load_schedule():
    try:
        with open(SCHEDULE_FILE, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return {}

# Parse natural language date and time
def parse_datetime(input_text):
    try:
        return parser.parse(input_text, fuzzy=True)
    except ValueError:
        return None

# Function to get sensor data from ESP32
def get_esp32_data():
    try:
        response = requests.get(f"{ESP32_IP}/sensor")
        if response.status_code == 200:
            data = response.json()
            temperature = data.get("temperature", "unknown")
            humidity = data.get("humidity", "unknown")
            return temperature, humidity
        else:
            speak("Failed to fetch data from ESP32. Please check the device.")
            return None, None
    except Exception as e:
        speak("Couldn't connect to the ESP32. Please check the connection.")
        print(f"Error: {e}")
        return None, None

# Function to control ESP32 relays
def control_switch(relay_number, action):
    try:
        state = "true" if action.lower() == "on" else "false"
        url = f"{ESP32_IP}/toggle?relay={relay_number}&state={state}"
        response = requests.get(url)

        if response.status_code == 200:
            speak(f"Switch {relay_number} is now {action.upper()}.")
        else:
            speak(f"Failed to {action} switch {relay_number}. Please check the device.")
    except Exception as e:
        speak(f"Couldn't connect to the ESP32. Please check the connection.")
        print(f"Error: {e}")

# Convert word to number for switches
def word_to_number(word):
    numbers = {"one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8"}
    return numbers.get(word.lower(), None)

# Respond to user commands
def respond(query):
    schedules = load_schedule()

    if "time" in query:
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        speak(f"The time is {current_time}")
    elif "date" in query:
        current_date = datetime.datetime.now().strftime("%A, %B %d, %Y")
        speak(f"Today's date is {current_date}")
    elif "temperature" in query or "humidity" in query:
        temperature, humidity = get_esp32_data()
        if temperature is not None and humidity is not None:
            if "temperature" in query:
                speak(f"The current temperature is {temperature} degrees Celsius.")
            elif "humidity" in query:
                speak(f"The current humidity level is {humidity} percent.")
    elif "turn on light" in query or "turn off light" in query:
        try:
            action = "on" if "turn on" in query else "off"
            light_number = query.split("light")[1].strip()
            light_number = word_to_number(light_number) or light_number
            control_switch(light_number, action)
        except Exception as e:
            speak("Sorry, I couldn't understand which light to turn on or off.")
            print(f"Error: {e}")
            
    elif "schedule a meeting" in query or "make a schedule" in query or "set a meeting" in query:
        speak("Please tell me the event name.")
        event_name = takecommand()
        if event_name == "none":
            speak("I didn't catch that.")
            return
        speak("Please tell me the date and time for the event. You can say something like 'tomorrow at 3 PM'.")
        event_time_input = takecommand()
        if event_time_input == "none":
            speak("I didn't catch that.")
            return

        event_time = parse_datetime(event_time_input)
        if event_time:
            schedules[event_name] = event_time.strftime("%Y-%m-%d %H:%M")
            save_schedule(schedules)
            speak(f"Event '{event_name}' scheduled for {event_time.strftime('%A, %B %d, %Y at %H:%M')}.")
        else:
            speak("Invalid date or time format. Please try again.")
    elif "what's on my schedule" in query or "tell me my schedule" in query:
        if schedules:
            speak("Here are your scheduled events:")
            for event, time in schedules.items():
                event_time = datetime.datetime.strptime(time, "%Y-%m-%d %H:%M")
                speak(f"{event} at {event_time.strftime('%A, %B %d, %Y at %H:%M')}")
        else:
            speak("You have no events scheduled.")
    elif "goodbye" in query or "bye" in query:
        speak("Goodbye Chief, I am going to sleep now.")
        exit()
    else:
        speak("Sorry, I didn't understand that command. You can try asking for the time, temperature, or scheduling a meeting.")

# Continuously listen for the trigger word
def listen_for_trigger():
    recognizer = sr.Recognizer()
    trigger_word = "jarvis"

    while True:
        try:
            with sr.Microphone() as source:
                print("Waiting for the trigger word...")
                recognizer.adjust_for_ambient_noise(source, duration=1)
                audio = recognizer.listen(source, timeout=300, phrase_time_limit=10)
                query = recognizer.recognize_google(audio).lower()

                if trigger_word in query:
                    speak("Yes Chief, how can I assist you?")
                    while True:
                        command = takecommand(timeout=300)
                        if command == "none":
                            continue
                        if "goodbye" in command or "exit" in command:
                            speak("Goodbye Chief, I am going to sleep now.")
                            exit()
                        respond(command)
        except sr.UnknownValueError:
            continue
        except sr.RequestError as e:
            print(f"Could not request results; {e}")

# Main function
def main():
    greet_user()
    listen_for_trigger()

# Greet the user
def greet_user():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning Chief!")
    elif hour >= 12 and hour < 18:
        speak("Good Afternoon Chief!")
    else:
        speak("Good Evening Chief!")

    speak("I am Jarvis, your personal assistant. How can I assist you today?")

if __name__ == "__main__":
    main()