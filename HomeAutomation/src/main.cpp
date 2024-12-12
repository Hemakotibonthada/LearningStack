#include <DHT.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <EEPROM.h>
#include "esp_task_wdt.h"

// DHT Sensor configuration
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// Relay GPIO pins
#define RELAY1 2
#define RELAY2 15
#define RELAY3 16
#define RELAY4 17
#define RELAY5 18
#define RELAY6 19
#define RELAY7 21
#define RELAY8 22

const char* ssid = "Hemakoti's Hotspot";
const char* password = "Hotspot@Password";


AsyncWebServer server(80);
#define EEPROM_SIZE 8 // Storing states for 8 switches

// HTML Webpage Template
const char* htmlPage = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
  <title>Hemakoti's Home Controller</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          text-align: center;
          margin: 0;
          padding: 0;
          transition: background-color 0.3s, color 0.3s;
      }
      body.black-theme {
          background-color: #121212;
          color: #ffffff;
      }
      h1 {
          background-color: #0056D2;
          color: white;
          padding: 20px 0;
          margin: 0;
          font-size: 24px;
          transition: background-color 0.3s, color 0.3s;
      }
      body.black-theme h1 {
          background-color: #1e1e1e;
          color: #ffffff;
      }
      .sensor {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 20px auto;
      }
      .circular-bar {
          position: relative;
          width: 100px;
          height: 100px;
      }
      svg {
          transform: rotate(-90deg);
      }
      circle {
          fill: none;
          stroke-width: 5px;
      }
      .background-circle {
          stroke: #ccc;
      }
      body.black-theme .background-circle {
          stroke: #555;
      }
      .progress-circle {
          stroke-linecap: round;
          transition: stroke-dasharray 0.5s ease, stroke 0.5s ease;
      }
      .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
      }
      .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px auto;
          max-width: 900px;
      }
      .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 15px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s, color 0.3s;
      }
      body.black-theme .card {
          background: #1e1e1e;
          color: #ffffff;
          box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
      }
      .card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 8px 12px rgba(218, 165, 32, 0.644); /* Default (Light theme) */
      }
      body.black-theme .card:hover {
          box-shadow: 0 8px 12px rgba(255, 255, 255, 0.7); /* White shadow for black theme */
      }
      .control {
          margin-top: 10px;
      }
      .switch {
          display: inline-block;
          position: relative;
          width: 60px;
          height: 34px;
      }
      .switch input {
          opacity: 0;
          width: 0;
          height: 0;
      }
      .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
      }
      .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
      }
      input:checked + .slider {
          background-color: #28a745;
      }
      input:checked + .slider:before {
          transform: translateX(26px);
      }
      .status-indicator {
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-top: 10px;
          border-radius: 50%;
          background-color: #ccc;
          transition: background-color 0.4s ease;
      }
      .status-indicator.on {
          background-color: #28a745;
      }
      .status-indicator.off {
          background-color: #ccc;
      }
      .name-label {
          margin-top: 5px;
          font-size: 16px;
          font-weight: bold;
          outline: none;
          border: none;
          background: transparent;
          color: #333;
          width: 90%;
          text-align: center;
          transition: color 0.3s, border-bottom 0.3s;
      }
      body.black-theme .name-label {
          color: #ffffff;
      }
      .name-label:focus {
          border-bottom: 2px solid #0056D2;
      }
  </style>
</head>
<body>
  <h1>Hemakoti's Home Controller</h1>
  <button id="theme-toggle">Switch to Black Theme</button>
  <div class="sensor">
      <div class="circular-bar">
          <svg width="100" height="100">
              <circle class="background-circle" cx="50" cy="50" r="45"></circle>
              <circle class="progress-circle" cx="50" cy="50" r="45" id="temp-circle" stroke-dasharray="0 282.6"></circle>
          </svg>
          <div class="center">
              <span id="temperature">--</span><br>°C
          </div>
      </div>
      <div class="circular-bar">
          <svg width="100" height="100">
              <circle class="background-circle" cx="50" cy="50" r="45"></circle>
              <circle class="progress-circle" cx="50" cy="50" r="45" id="humid-circle" stroke-dasharray="0 282.6"></circle>
          </svg>
          <div class="center">
              <span id="humidity">--</span><br>%
          </div>
      </div>
  </div>
  <div class="container">
      %CONTROLS%
  </div>
  <script>
      const themeToggle = document.getElementById("theme-toggle");
      themeToggle.addEventListener("click", () => {
          document.body.classList.toggle("black-theme");
          themeToggle.textContent = document.body.classList.contains("black-theme")
              ? "Switch to Light Theme"
              : "Switch to Black Theme";
      });

      async function toggleSwitch(id, state) {
          await fetch(`/toggle?relay=${id}&state=${state}`);
          updateStatusIndicator(id, state);
      }

      function updateStatusIndicator(id, state) {
          const indicator = document.getElementById(`indicator${id}`);
          if (state) {
              indicator.classList.add("on");
              indicator.classList.remove("off");
          } else {
              indicator.classList.add("off");
              indicator.classList.remove("on");
          }
      }

      async function updateSensorData() {
          const response = await fetch('/sensor');
          const data = await response.json();
          updateTemperature(data.temperature);
          updateHumidity(data.humidity);
      }

      function updateTemperature(temperature) {
          const tempCircle = document.getElementById("temp-circle");
          const tempText = document.getElementById("temperature");
          const maxTemp = 50;
          const percentage = Math.min((temperature / maxTemp) * 100, 100);
          const circumference = 2 * Math.PI * 45;
          const offset = circumference - (percentage / 100) * circumference;

          tempCircle.style.strokeDasharray = `${circumference - offset} ${offset}`;
          tempText.textContent = `${temperature.toFixed(1)}`;

          // Set color based on temperature range
          if (temperature < 20) {
              tempCircle.style.stroke = "#1e90ff"; // Blue for cool
              tempText.style.color = "#1e90ff";
          } else if (temperature < 35) {
              tempCircle.style.stroke = "#28a745"; // Green for moderate
              tempText.style.color = "#28a745";
          } else {
              tempCircle.style.stroke = "#ff4500"; // Red for hot
              tempText.style.color = "#ff4500";
          }
      }

      function updateHumidity(humidity) {
          const humidCircle = document.getElementById("humid-circle");
          const humidText = document.getElementById("humidity");
          const maxHumid = 100;
          const percentage = Math.min((humidity / maxHumid) * 100, 100);
          const circumference = 2 * Math.PI * 45;
          const offset = circumference - (percentage / 100) * circumference;

          humidCircle.style.strokeDasharray = `${circumference - offset} ${offset}`;
          humidText.textContent = `${humidity.toFixed(1)}`;

          // Set color based on humidity range
          if (humidity < 40) {
              humidCircle.style.stroke = "#1e90ff"; // Blue for low humidity
              humidText.style.color = "#1e90ff";
          } else if (humidity < 70) {
              humidCircle.style.stroke = "#28a745"; // Green for moderate humidity
              humidText.style.color = "#28a745";
          } else {
              humidCircle.style.stroke = "#ff4500"; // Red for high humidity
              humidText.style.color = "#ff4500";
          }
      }

      window.onload = updateSensorData;
      setInterval(updateSensorData, 5000); // Update every 5 seconds
  </script>
</body>
</html>

)rawliteral";

// Generate HTML controls for 8 switches
String generateControls() {
    String controls = "";
    for (int i = 1; i <= 8; i++) {
        controls += "<div class='card'>";
        controls += "<label class='switch'>";
        controls += "<input type='checkbox' id='switch" + String(i) + "' onchange='toggleSwitch(" + String(i) + ", this.checked)'>";
        controls += "<span class='slider'></span>";
        controls += "</label>";
        controls += "<div class='status-indicator off' id='indicator" + String(i) + "'></div>";
        controls += "<input class='name-label' id='name" + String(i) + "' value='Switch " + String(i) + "' onblur='saveSwitchName(" + String(i) + ")'>";
        controls += "</div>";
    }
    return controls;
}

void toggleRelay(int relay, bool state);

void setup() {
    Serial.begin(115200);

    // Initialize EEPROM and GPIOs
    EEPROM.begin(EEPROM_SIZE);
    int relays[] = {RELAY1, RELAY2, RELAY3, RELAY4, RELAY5, RELAY6, RELAY7, RELAY8};
    for (int i = 0; i < 8; i++) {
        pinMode(relays[i], OUTPUT);
        bool lastState = EEPROM.read(i);
        digitalWrite(relays[i], lastState ? LOW : HIGH);
        Serial.printf("Relay %d initialized to %s\n", i + 1, lastState ? "ON" : "OFF");
    }

    // Connect to Wi-Fi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("\nWi-Fi Connected!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    // Setup web server
    server.on("/", HTTP_GET, [](AsyncWebServerRequest* request) {
        String page = htmlPage;
        page.replace("%CONTROLS%", generateControls());
        request->send(200, "text/html", page);
        Serial.println("Served homepage.");
    });

    server.on("/toggle", HTTP_GET, [](AsyncWebServerRequest* request) {
        if (request->hasParam("relay") && request->hasParam("state")) {
            int relay = request->getParam("relay")->value().toInt();
            bool state = request->getParam("state")->value().equalsIgnoreCase("true");
            toggleRelay(relay, state);
            Serial.printf("Relay %d set to %s\n", relay, state ? "ON" : "OFF");
        }
        request->send(200, "text/plain", "OK");
    });

    server.on("/sensor", HTTP_GET, [](AsyncWebServerRequest* request) {
        float temperature = dht.readTemperature();
        float humidity = dht.readHumidity();

        if (isnan(temperature) || isnan(humidity)) {
            request->send(500, "application/json", "{\"error\":\"Failed to read sensor data\"}");
            return;
        }

        String json = "{\"temperature\":" + String(temperature, 1) + ",\"humidity\":" + String(humidity, 1) + "}";
        request->send(200, "application/json", json);
    });

    server.begin();
    Serial.println("Web server started.");
}


void toggleRelay(int relay, bool state) {
    int pins[] = {RELAY1, RELAY2, RELAY3, RELAY4, RELAY5, RELAY6, RELAY7, RELAY8};
    if (relay >= 1 && relay <= 8) {
        digitalWrite(pins[relay - 1], state ? LOW : HIGH);
        EEPROM.write(relay - 1, state);
        EEPROM.commit();
        Serial.printf("Relay %d turned %s\n", relay, state ? "ON" : "OFF");
    } else {
        Serial.println("Invalid relay number!");
    }
}
void loop() {
    esp_task_wdt_reset(); // Reset the watchdog timer
}