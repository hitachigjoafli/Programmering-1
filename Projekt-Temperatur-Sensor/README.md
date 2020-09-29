# Projekt Temperatur Sensor
![Image](https://miro.medium.com/max/620/1*7Bant1MC0RQDQMVf4XQR8g.jpeg)
<br>
I projektet temperatur-sensor så ska vi använda teknikerna vi har lärt oss i flera av kurserna och kombinera dem till att bygga ett litet IoT (Internet Of Things) projekt.
Som micro-controller ska vi använda **ESP8266**, den ska läsa av temperaturer från en temperatur-sensor och sedan skicka data/värden till en databas/backend där vi kommer använda något som heter **Firebase Realtime Database** från Google. Ni ska sedan bygga en hemsida eller en mobilapp som som visualiserar temperaturvärdena från Firebase.

## ESP8266 -> Firebase kommunikation
Första länken nedan visar biblioteket som används för att kommunicera mellan eran micro-kontroller och Firebase.<br>
Där finns beskrivning på vilken funktionalitet som det stöder och hur man använder det, viktigt att man spenderar lite tid och studerar informationen.<br>
<https://github.com/mobizt/Firebase-ESP8266>
<br>
<br>
Länken nedan visar hur man sätter upp ett Firebase projekt.<br>
<https://medium.com/@vibrologic/serverless-iots-with-firebase-realtime-database-and-esp8266-9937d98d1ae0>
<br>
<br>
Länken nedan visar hur man kopplar upp sitt Firebase projekt med ESP8266, alternativt kan man kolla på mitt exempel där jag tänder och släcker lysdioden.<br>
<https://medium.com/@vibrologic/serverless-iots-with-firebase-realtime-database-and-esp8266-e624304c3197>
<br>
<br>
## Firebase Realtime Database

<https://firebase.google.com/docs/database>
<br>
<https://www.tutorialspoint.com/firebase/index.htm>
