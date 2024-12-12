import requests
import csv
import time
import matplotlib.pyplot as plt

# ESP32 Server URL
ESP32_URL = "http://192.168.152.218/sensor"  # Replace with your ESP32 IP address

# File to store data
DATA_FILE = "temperature_humidity_esp32.csv"

# Initialize the CSV file
def initialize_csv():
    try:
        with open(DATA_FILE, mode='x', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["Timestamp", "Temperature (C)", "Humidity (%)"])
    except FileExistsError:
        print("Data file already exists. New data will be appended.")

# Log data to CSV
def log_data_to_csv(timestamp, temperature, humidity):
    with open(DATA_FILE, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, temperature, humidity])

# Fetch data from ESP32
def fetch_sensor_data():
    try:
        response = requests.get(ESP32_URL, timeout=5)
        if response.status_code == 200:
            data = response.json()
            temperature = data.get("temperature", None)
            humidity = data.get("humidity", None)
            if temperature is not None and humidity is not None:
                return temperature, humidity
            else:
                print("Invalid sensor data received.")
        else:
            print(f"Failed to fetch data: HTTP {response.status_code}")
    except Exception as e:
        print(f"Error fetching sensor data: {e}")
    return None, None

# Plot the graph
def plot_graph():
    timestamps, temperatures, humidities = [], [], []
    try:
        with open(DATA_FILE, mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                timestamps.append(row["Timestamp"])
                temperatures.append(float(row["Temperature (C)"]))
                humidities.append(float(row["Humidity (%)"]))
        
        plt.figure()

        # Plot temperature
        plt.subplot(2, 1, 1)
        plt.plot(timestamps, temperatures, marker='o', label="Temperature (C)")
        plt.title("Temperature and Humidity Readings")
        plt.xlabel("Timestamp")
        plt.ylabel("Temperature (C)")
        plt.xticks(rotation=45)
        plt.legend()
        plt.grid()

        # Plot humidity
        plt.subplot(2, 1, 2)
        plt.plot(timestamps, humidities, marker='x', label="Humidity (%)", color='orange')
        plt.xlabel("Timestamp")
        plt.ylabel("Humidity (%)")
        plt.xticks(rotation=45)
        plt.legend()
        plt.grid()

        plt.tight_layout()
        plt.show()
    except FileNotFoundError:
        print("Data file not found. Please collect some data first.")

# Main function
def main():
    print("1. Start Data Collection")
    print("2. Plot Graph")
    choice = input("Enter your choice (1/2): ").strip()
    if choice == '1':
        initialize_csv()
        while True:
            timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
            temperature, humidity = fetch_sensor_data()
            if temperature is not None and humidity is not None:
                print(f"Timestamp: {timestamp}, Temp: {temperature:.3f}°C, Humidity: {humidity:.3f}%")
                log_data_to_csv(timestamp, temperature, humidity)
            time.sleep(5)  # Collect data every 60 seconds
    elif choice == '2':
        plot_graph()
    else:
        print("Invalid choice.")

if __name__ == "__main__":
    main()
