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



# 1-2.Grunder i Svelte och QUIZ
I dennna avsnitt får ni själv välja vilken resurs ni vill kika på och vilken som fungerar bäst för er. Kika på resursbanken ovan eller hitta en egen. Våga vinn.
Med stor frihet kommer också stort ansvar och därmed så får **du** själv bestämma hur du ska fördela 4 lektionstimmar på denna del och QUIZet i del två. Quizet är en video där jag skapar ett Quiz i Svelte och för att få ut det mesta av det så är min rekomendation att man återskapar Quizet genom att följa med i videon. Videon är 40 minuter och mitt tips är att du ger möjlighet till att iaf använda den dubbla tiden för att i lugn och ro ha tid att återskapa den.
## 1. Välj Valfri resurs
Välj valfri resurs, arbeta efter den och lär känna Svelte och dett sättet att arbeta.
## 2. Följ videon och skapa ett Quiz
[Videolänk](https://web.microsoftstream.com/video/2df723a1-f00a-41a1-9ff6-0a9f9c0ef8a7)



# 3.APier
Här kommer Jeton Posta ett fint uppgift.

# 4. Miniprojekt Filmdatabas

![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/img/tmdb.PNG?raw=true)
I detta miniprojekt ska ni skapa en filmdatabas. Filmerna kommer ni få från ett Javascript objekt men de är i sin tur hämtade från ett api som man kan aktivera när projektet börja närma sig färdigställt. Vi kommer även ha någon funktion som har en koppling till en [Firestore databas](https://console.firebase.google.com/u/0/). Har man ett google konto så kan man gratis skapa ett antal projekt på Googles Firebase annars skapar man ett konto som heter något i stil med sina 3 först bokstäver i förnamn och samma i efternamn. Jag har gjort en exempelvideo nedan där jag redovisar mitt projekt och dess tillvägagångsätt, det jag gjorde i Firestore var att jag gjorde en kommentarsfunktion i sidan men ni kan göra annat som tex tummen upp knapp eller favoritlistor. Kika på min video, ta lärdom och gör sedan er egen plan enligt samma principer. Kom ihåg, exakt som i miniräknaren så är planering A-O!
[Redovisning exempelprojekt](https://web.microsoftstream.com/video/ddec6312-ee1a-492a-9587-b9a3f5d1eb5b)

Uppgiftens krav:
- Planering med diagram eller psuedokod
- Wireframe
- Komponentkarta
- FireStore-databas (kommentarer,like, filmlistor eller annat)
- Webbsida där man kan visa filminfo.
- Redovisning i en liten video liknande min, försök hålla det kort och konsist till runt 5 minuter.
- Kommenterad kod
- Github med beskrivande readme



# 5. Uppkopplad Termometer
[Redovisning exempelprojekt](https://web.microsoftstream.com/video/0db5e655-500e-45b8-80bb-f7f900d4e134)
Nu är det dags för vårat första miniprojekt, pirrigt va? Uppgiften är klassisk och i teorin simpel, skapa en miniräknare som kan räkna addition, subtraction division och multiplikation.

Det är alltid bra att ha en plan innan man börjar därför skriver jag mitt tillvägagångsätt när jag gör ett sånt här projekt.
## Plan
1. Skapa en plan i pseudokod
2. Rita en snabb wireframe
3. Skapa sidan
   1. HTML - det man ser
   2. Javascript - det som händer
   3. CSS - så det ser fint ut
4. Utvärderar och reflekterar, vad hade jag kunna gjort annorlunda nu i efterhand och vad har jag lärt mig.
5. *Lägger ut mitt fina projekt på github med en tydlig readme så andra kan nyttja eller återskapa det jag skapat.

Självklart så **kommenterar** jag alltid koden under projektets gång för att göra det enkelt för mig och andra att förstå vad allt gör.

[Här](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/exempelkod/5.Calculator) finns mitt projekt om man vill ladda ner det för att testa eller kika på för inspiration!

## Frågor och svar
### Vad är Pseudokod?
Pseudokod är det som behöver göras för att skapa ett program fast det är skrivet utan kod. Jag kan skriva på ren svenska eller engelska för att enkelt få en överblick på vilka steg och i vilken ordning jag behöver göra delarna i projektet. [Här](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/exempelkod/5.Calculator/Psuedokod.txt) finns exempel på pseudokoden jag skrev till miniräknaren om man vill jämnföra sin pseudokod med min.
### Vad är en Wireframe?
En Wireframe är en snabb skiss över hur man vill att sin hemsida, app eller produkt ska se ut. Den ska inte ta lång tid och behöver inte ha texter eller färger, då blir den en skiss och är nästa steg om man ska skapa ett lite större projekt. Ett tips på hur man kan göra wireframe är via [wireframe.cc](https://wireframe.cc) och sedan använda snipping tool för att spara ner den. För att se min Wireframe klicka [här](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/exempelkod/5.Calculator/wireframe.PNG)
### Vad är github?
Github är en projekthanterings sida där man kan spara sina projekt, arbeta tillsammans med andra på dem och dela dem med världen. Har man tid över så är det alltid bra att lägga upp sina projekt där samt en liten readme som berättar vad projektet handlar om. Har man gjort det så svider det lite mindre om datorn skulle gå sönder.

### Varför reflekterar man?
"Jag tänker därför finns jag." sa filosofen René Descartes. Samma gäller med våran kod, om vi tar tid att tänka igenom den och komma fram till vad vi kan ha gjort annorlunda för samma eller bättre resultat så blir vi bättre programmerare och det är det som skiljer oss från djuren, våran förmåga att se på vad vi gjort och göra det bättre. För det ju det som är definitionen på galenskap enligt Einstein och han var ju ganska smart.
Skriv ner dina reflektioner i readmen på din github så kommer du lättare ihåg dem till nästa projekt!
![fun](https://inspiredbydotcom.files.wordpress.com/2010/12/citat.jpg?w=584)


