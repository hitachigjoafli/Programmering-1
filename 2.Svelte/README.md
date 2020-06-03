# Svelte

![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/img/planjssvelte.PNG?raw=true)
## Intro
Nu fortsätter resan vidare till språket Svelte. Svelte är egentligen samma som Javascript fast de har lagt in förenklingar för att använda kod ihop med de grafiska delarna, detta till exempel genom att göra. 
```Javascript
<script>//Javascript
let Mittnamn="Jocke"
let personer=[{namn:"Ante",ämne:["Konstruktion","Teknik"]},{namn:"Jocke",ämne:["Progammering","AI"]},{namn:"Lille-pelle",ämne:["Matematik","Fysik"]}]
</script>
//HTML
{#each personer as person, index}
   {#if person.namn === Mittnamn}
  <h2>{index+1}.Mitt namn är {person.namn}</h2>
   {:else}
  <h4>{index+1}.Annans namn är {person.namn}</h4>
   {/if}
{/each}
<style>//CSS
	h2{color:red;}
	h4{color:blue;}
</style>
```
[Här](https://svelte.dev/repl/b44457b5c70641c1a40efd932f40fe1c?version=3) är en länk till ett online exempel som visar resultatet från koden ovan samt en egengjord komponentknapp. Det är just det som är den andra nya saken att vi skapar komponenter som kan användas flera gånger och dela upp vår kod bättre.

I denna modul kommer vi arbeta lite mer fritt, du kommer få mer möjlighet att leta och hitta din favoritform av informationsinhämtning, om det är via videor, artiklar, interaktiva exempel eller böcker.

## Övergripande resurser för denna modul:
- [Svelte Offical Tutorial](https://svelte.dev/tutorial/basics)
- [Svelte Offical Examples](https://www.freecodecamp.org/news/the-svelte-handbook/)
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/)
- [Lighter and Faster - A Guide to the Svelte Framework](https://www.toptal.com/front-end/svelte-framework-guide)
- [Svelte tutorial for begginers [Video]](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)
- [Svelte Crash Course [Video, medium]](https://www.youtube.com/watch?v=uK2RnIzrQ0M)
- [Svelte Tutorial - Is it better than React? [Video,lite mer avancerad]](https://www.youtube.com/watch?v=vhGiGqZ78Rs)
- [Made with Svelte](https://madewithsvelte.com/boilerplate)
- [Svelte resources](https://github.com/ryanatkn/awesome-svelte-resources)



# 1-2.Grunder i Svelte och QUIZ
I dennna avsnitt får ni själv välja vilken resurs ni vill kika på och vilken som fungerar bäst för er. Kika på resursbanken ovan eller hitta en egen. Våga vinn.
Med stor frihet kommer också stort ansvar och därmed så får **du** själv bestämma hur du ska fördela 4 lektionstimmar på denna del och QUIZet i del två. Quizet är en video där jag skapar ett Quiz i Svelte och för att få ut det mesta av det så är min rekomendation att man återskapar Quizet genom att följa med i videon. Videon är 40 minuter och mitt tips är att du ger möjlighet till att iaf använda den dubbla tiden för att i lugn och ro ha tid att återskapa den.
## 1. Välj Valfri resurs
Välj valfri resurs, arbeta efter den och lär känna Svelte och dett sättet att arbeta.
## 2. Följ videon och skapa ett Quiz
[Videolänk](https://web.microsoftstream.com/video/2df723a1-f00a-41a1-9ff6-0a9f9c0ef8a7)
[Livedemo](https://abbjoafli.github.io/Programmering-1/show/Quiz/index.html)
[Här](https://github.com/abbjoafli/Programmering-1/tree/master/2.Svelte/2.QuizParty) finns mitt projekt om man vill ladda ner det för att testa eller kika på för inspiration!


# 3.APier
Här kommer Jeton Posta ett fint uppgift.

## Resurser
- [Consuming REST APIs in Svelte](https://blog.logrocket.com/consuming-rest-apis-in-svelte/)
- [PokeAPi](https://pokeapi.co)
- [superhero-api](https://akabab.github.io/superhero-api/)


# 4. Miniprojekt Filmdatabas

![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/img/tmdb.PNG?raw=true)
I detta miniprojekt ska ni skapa en filmdatabas. Filmerna kommer ni få från ett Javascript objekt men de är i sin tur hämtade från ett api som man kan aktivera när projektet börja närma sig färdigställt. Vi kommer även ha någon funktion som har en koppling till en [Firestore databas](https://console.firebase.google.com/u/0/). Har man ett google konto så kan man gratis skapa ett antal projekt på Googles Firebase annars skapar man ett konto som heter något i stil med sina tre första bokstäver i förnamn och samma i efternamn. Jag har gjort en exempelvideo nedan där jag redovisar mitt projekt och dess tillvägagångsätt, det jag gjorde i Firestore var att jag gjorde en kommentarsfunktion i sidan men ni kan göra annat som tex tummen upp knapp eller favoritlistor. Kika på min video, ta lärdom och gör sedan er egen plan enligt samma principer. Kom ihåg, exakt som i miniräknaren så är planering A-O!
[Redovisning exempelprojekt](https://web.microsoftstream.com/video/ddec6312-ee1a-492a-9587-b9a3f5d1eb5b)
I början rekomenderar jag att ni använder min [MoviePoster](https://raw.githubusercontent.com/abbjoafli/Programmering-1/master/2.Svelte/2.MoviesDB/src/store.js) js objekt men när det närmar sig färdigprodukt kan man använda ett riktigt api [api.themoviedb.org](https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb).

## Uppgiftens krav:
- Planering med diagram eller psuedokod
- Wireframe
- Komponentkarta
- Databasöverblick
- FireStore-databas (kommentarer,like, filmlistor eller annat)
- Webbsida där man kan visa filminfo.
- Redovisning i en liten video liknande min, försök hålla det kort och konsist till runt 5 minuter.
- Kommenterad kod.
- Github med beskrivande readme.
- Hosta Websidan på valfri plats.

[Redovisning exempelprojekt](https://web.microsoftstream.com/video/0db5e655-500e-45b8-80bb-f7f900d4e134)

[Livedemo](https://abbjoafli.github.io/Programmering-1/show/MovieDB/index.html)
[Här](https://github.com/abbjoafli/Programmering-1/tree/master/2.Svelte/4.MoviesDB) finns mitt projekt om man vill ladda ner det för att testa eller kika på för inspiration!


## Plan
Nu har du blivit så berest i programmeringens värld att du och din partner får ansvara över planeringen själv. Be din lärare starta upp en Planner i Teams och lägg planeringen som ett team! Ta med dig hur du gjort tidigare, vilka delar som är viktiga att ha med och i vilken ordning de ska göras.


## Resurser
- [Svelte Realtime Todo with firebase](https://fireship.io/lessons/svelte-v3-overview-firebase/) (Exempel hur du skapar databas och lite intro, mitt tips är att inte använda rxfire utan istället använda Sveltefire nedan.)
- [Sveltefire](https://github.com/codediodeio/sveltefire) (Bibliotek för att underlätta användning av firebase i Svelte)
- CSS
  - [Learn Box Aligment](https://ishadeed.com/article/learn-box-alignment/)
  - [Everything About Auto in CSS](https://ishadeed.com/article/auto-css/)
- [Smelte komponent Bibliotek](https://smeltejs.com)



# 5. Uppkopplad Termometer
![uppkopplad](https://github.com/abbjoafli/Programmering-1/blob/master/img/uppkopplad.PNG?raw=true)
Nu är det dags för vårt första sammarbetsprojekt. Vi ska gemensamt med de andra teknikämnena skapa en uppkopplad termometer som ska skicka data från en mikrokontrol (Esp 8266) till en databas (Firebase RTDB) och sedan visa det på en hemsida med hjälp av Svelte. Du ska samarbeta med en grupp på två andra elever och alla era värden ska loggas på samma databas och kunna visas ihop både nuvarande värde samt tidigare värden i någon form av grafiskt diagram.

## Uppgiftens krav:
- Planering med diagram eller psuedokod
- Wireframe
- Komponentkarta
- Databasöverblick
- FireBase-RealTime Database (logga temperaturvärden för tre enheter, inloggning om man vill.)
- Webbsida där värdena visas upp, både nuvarande och historiskt.
- Använd något biblotek för att visa värden som diagram.
- *Redovisning i en liten video liknande min, försök hålla det kort och konsist till runt 5 minuter.
- Mikrokontroll som loggar värden från temperaturmätare och skickar upp dessa till databasen.
- Kommenterad kod.
- Github med beskrivande readme.
- Hosta Websidan på valfri plats.


(  * dessa delar ska varje elev göra individuellt, man får sammarbeta men alla ska göra sin egen.)
Nu är det dags för vårat första miniprojekt, pirrigt va? Uppgiften är klassisk och i teorin simpel, skapa en miniräknare som kan räkna addition, subtraction division och multiplikation.

[Redovisning exempelprojekt](https://web.microsoftstream.com/video/0db5e655-500e-45b8-80bb-f7f900d4e134)
[Livedemo](https://abbjoafli.github.io/Programmering-1/show/Termometer/index.html)
[Här](https://github.com/abbjoafli/Programmering-1/tree/master/2.Svelte/4.MoviesDB) finns mitt projekt om man vill ladda ner det för att testa eller kika på för inspiration!


## Plan
Nu har du blivit så berest i programmeringens värld att du och din grupp får ansvara över planeringen själv. Be din lärare starta upp en Planner i Teams och lägg planeringen som ett lag! Ta med dig hur du gjort tidigare, vilka delar som är viktiga att ha med och i vilken ordning de ska göras.

## Resurser
- [Serverless IoTs with Firebase Realtime Database and ESP8266](https://medium.com/@vibrologic/serverless-iots-with-firebase-realtime-database-and-esp8266-9937d98d1ae0)[( del 2)](https://medium.com/@vibrologic/serverless-iots-with-firebase-realtime-database-and-esp8266-e624304c3197) (Exempel hur man skickar till Firebase RTDB from ESP)
- [ESP8266 Sent Sensor Data to Firebase Realtime Database](http://microcontrollerkits.blogspot.com/2016/12/esp8266-firebase.html) (Exempel hur man skickar till Firebase RTDB from ESP)
- [Github rep för Firebase ESP8266](https://github.com/mobizt/Firebase-ESP8266) (Repo för Firebase-ESP8266, mycket fin dokumentation om hur man kan göra.)





## Frågor och svar
### Vad är komponentkarta?
En komponentkarta är en karta över de olika komponenterna i ditt projekt och i vilka komponenter de används, detta för att kunna skapa en tydligare överblick över helheten och underlätta uppdelningen av arbetet om man arbetar i grupp.
[Exempelbild](https://github.com/abbjoafli/Programmering-1/blob/master/img/Komponentkarta.PNG?raw=true)

### Vad är Databasöverblick?
En databasöverblick är en överblick över din databas, vilka olika kategorier finns det samt vilka värden som sparas på dem. När man går igenom databasöverblicken ska man gärna förtydliga vilka delar som kopplar ihop olika kategorier om det så görs. Ett exempel att resturangers id kan vara blåfärgad och då är kopplad för att länka ihop en maträtter med deras resturang om man har två kategorier, maträtter och resturanger.Då har man resturangens id i maträttens kategori.
[Exempelbild](https://github.com/abbjoafli/Programmering-1/blob/master/img/databasblick.PNG?raw=true)

### Vart kan jag hosta mina webbsidor?
Här nedan kommer några enkla hemsidor att gratis hosta din websida på:
- [Github Pages](https://pages.github.com)
- [Vercel(föredetta NOW/Zeit)](https://vercel.com)
- [Google Firebase](https://console.firebase.google.com/u/0/)
- [Netlify](https://www.netlify.com)
- [Surge](http://surge.sh)
- AWS S3 Bucket (Detta alternativ spar vi dock tills vi börjar använda AWS)

