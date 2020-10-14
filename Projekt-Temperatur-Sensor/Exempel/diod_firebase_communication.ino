#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>

#define FIREBASE_HOST ""
#define FIREBASE_AUTH ""
#define WIFI_SSID "ABB_Indgym_Guest"
#define WIFI_PASSWORD "Welcome2abb"

//Define Firebase Data objects
FirebaseData firebaseData;

String path = "/led";
String nodeID = "ledNode";

void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
    
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  if (!Firebase.beginStream(firebaseData, path))
  {
      Serial.println("Could not begin stream");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println();
  }
}

void loop() {
  // put your main code here, to run repeatedly:

  if (!Firebase.readStream(firebaseData))
  {
      Serial.println();
      Serial.println("Can't read stream data");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println();
  }

  if (firebaseData.streamTimeout())
  {
      Serial.println();
      Serial.println("Stream timeout, resume streaming...");
      Serial.println();
  }


  if (firebaseData.streamAvailable())
  {
      if (firebaseData.dataType() == "boolean")
      {
          if (firebaseData.boolData())
              Serial.println("Set " + nodeID + " to High");
          else
              Serial.println("Set " + nodeID + " to Low");
          digitalWrite(LED_BUILTIN, firebaseData.boolData());
      }

      if (firebaseData.dataType() == "json")
      {
        FirebaseJson &json = firebaseData.jsonObject();
        FirebaseJsonData result;
        json.get(result, "/led");
        if (result.success)
        {
          if (result.boolValue)
            Serial.println("Set " + nodeID + " to High");
          else
            Serial.println("Set " + nodeID + " to Low");

          digitalWrite(LED_BUILTIN, result.boolValue);
        }
        
      }
  }
}
