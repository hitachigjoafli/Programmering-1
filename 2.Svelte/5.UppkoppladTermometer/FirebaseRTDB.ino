
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>

#define FIREBASE_HOST "firstprojcomments.firebaseio.com"
#define FIREBASE_AUTH "d2HXTTO3VFQQoTpP4UpjqelP41OUSjAHRLrFaiZJ"
#define WIFI_SSID "ABB_Indgym_Guest"
#define WIFI_PASSWORD "Welcome2abb"
//https://github.com/mobizt/Firebase-ESP8266
//Define Firebase Data objects
FirebaseData firebaseData1;
FirebaseData firebaseData2;

int heatUp=2;
int temp = 17;
String path = "/Temp";
String subpath = "Current";      //This is this node ID to receive control

void setup()
{

    Serial.begin(115200);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.reconnectWiFi(true);

}

void loop()
{
 
   
        temp = temp+heatUp;
        if (Firebase.setInt(firebaseData2, path + "/" + subpath, temp))
        {
                Serial.println("Set " + subpath + " to "+String(temp));
        }
        else
        {
            Serial.println("Could not set " + subpath);
        }
      if (Firebase.pushInt(firebaseData1, path + "/Log"  , temp))
        {
            Serial.println("Temp logged");
        }
        else
        {
            Serial.println("Could not add temp to logger");
        }
              if (Firebase.pushTimestamp(firebaseData2, path + "/Updated" ))
        {
            Serial.println("Time updated");
        }
        else
        {
            Serial.println("Could not set time");
        }
        delay(30000);
        
    
}
