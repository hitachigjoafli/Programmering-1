# VUE

![överblick](https://miro.medium.com/max/3824/1*apBcw3f1BE8vJWAWG-k6gw.jpeg)
## Intro

Vi lär oss alla på olika sätt och i den här kursen kommer det finnas material som förhoppningsvis också passar alla. Kursmaterialet finns som text, Youtube-videor och interaktiva videor i Scrimba.
Scrimba är interaktiva videor där du som elev när som helst under videons gång kan pausa och börja programmera rätt i videon. Exempelkod för dessa videor ligger även här i undermappen exempelkod.

Våga testa och fråga kompisar och lärare för att få bästa möjligheter till att utvecklas.

Till varje del så kommer det finnas lite övningsuppgifter.

## Övergripande resurser för denna modul:

- [Vue](https://vuejs.org/v2/guide/)
- [Youtube - Net Ninja Vue](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa)

# 1. Variabler, datatyper, jämförelser, if-satser, loopar, objekt och listor

## 1.1 Variabler

### Resurser
<!-- - [W3School Variabels](https://www.w3schools.com/js/js_variables.asp) -->
<!-- - [W3School Objects](https://www.w3schools.com/js/js_objects.asp) -->
[JavaScript.Info Variabels](https://javascript.info/variables)

### Övningsuppgifter
[Övningar Variabler](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#11-variabler)

## 1.2 Datatyper
### Resurser
[JavaScript.Info Datatypes](https://javascript.info/types)

### Övningsuppgifter
[Övningar Datatyper](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#12-datatyper)
  
## 1.3 Operatorer
### Resurser
[JavaScript.Info Operators](https://javascript.info/operators)

### Övningsuppgifter
[Övningar Operatorer](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#13-operatorer)

## 1.4 Jämförelser
### Resurser
[JavaScript.Info Comparison](https://javascript.info/comparison)

### Övningsuppgifter
[Övningar Jämförelser](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#14-j%C3%A4mf%C3%B6relser)

## 1.5 If-satser
### Resurser
[JavaScript.Info Comparison](https://javascript.info/ifelse)

### Övningsuppgifter
[Övningar If-satser](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#15-if-satser)

<!-- # 2. Ifsatser och loopar fördjupning -->

<!-- [Stega igenom koden](http://pythontutor.com/live.html#code=let%20i%3D10%0A%20while%20%280%3Ci%29%20%7B%0A%20%20%20%20%20console.log%28i%29%0A%20%20%20%20%20i-%3D1%0A%20%7D%0A%0A%20while%20%28i%3C10%29%20%7B%0A%20%20%20%20console.log%28i%29%0A%20%20%20%20%20i%2B%3D1%0A%20%7D%0A%20i%3D0%3B%0A%20while%20%28i%3C10%29%20%7B%0A%20%20%20%20%20let%20output%3D%22%22%0A%20%20%20%20%20let%20p%3D0%3B%0A%20%20%20%20%20while%20%28p%3C10%29%20%7B%0A%20%20%20%20%20%20%20%20%20output%2B%3D%22X%22%0A%20%20%20%20%20%20%20%20%20p%2B%3D1%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20console.log%28output%29%0A%20%20%20%20%20i%2B%3D1%0A%20%7D%0A%0A%0A%20for%20%28let%20i2%20%3D%200%3B%20i2%20%3C%20120%3B%20i2%2B%3D10%29%20%7B%0A%20%20%20%20%20console.log%28i2%29%20%20%20%0A%20%7D%0A%0Alet%20man%3D%20true%0Alet%20age%3D450%0A%0A%20if%28age%3C30%29%0A%20%7B%0Aif%20%28man%3D%3Dtrue%29%20%7B%0A%20%20%20%20console.log%28%22You%20like%20to%20bake%22%29%0A%7D%20else%20%7B%0A%20%20%20%20console.log%28%22You%20like%20to%20play%20video%20games%22%29%0A%7D%0A%20%7D%0A%20else%20if%28age%3E30%20%26%26%20age%3C50%29%0A%20%7B%0A%20%20%20%20if%20%28man%3D%3Dtrue%29%20%7B%0A%20%20%20%20%20%20%20%20console.log%28%22You%20like%20to%20walk%20in%20the%20park%22%29%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20console.log%28%22You%20like%20to%20make%20wooden%20sculptures%22%29%0A%20%20%20%20%7D%0A%20%7D%0A%20else%7B%0A%20%20%20%20if%20%28man%3D%3Dtrue%20%7C%7C%20man%3D%3Dfalse%29%20%7B%0A%20%20%20%20%20%20%20%20console.log%28%22You%20like%20to%20watch%20livestreams%20on%20youtube%22%29%0A%20%20%20%20%7D%0A%20%7D%0A%20%0A%20age%3D0%0A%20money%3D0%0A%20%0A%20while%20%28age%3C65%29%20%7B%0A%20%20%20%20%20if%28age%3C15%29%0A%20%20%20%20%20money%2B%3D1050%0A%20%20%20%20%20else%20if%28age%3C18%29%0A%20%20%20%20%20money%2B%3D1350%0A%20%20%20%20%20else%20if%28age%3C23%29%0A%20%20%20%20%20money%2B%3D3350%0A%20%20%20%20%20else%20if%28age%3C65%29%0A%20%20%20%20%20money%2B%3D%28age*1000%29*0.70%0A%20%20%20%20//%20%20else%0A%20%20%20%20//%20%20money%2B%3D%0A%20%7D&cumulative=false&curInstr=470&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) -->

<!-- ## Resurser
- [Mozilla Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Mozilla IF statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement)
- [W3School Comparisions (IF || && <> != ..)](https://www.w3schools.com/js/js_comparisons.asp) -->

## 1.6 Loopar: while och for
### Resurser
[JavaScript.Info Loops: while and for](https://javascript.info/while-for)

### Övningsuppgifter
[Övningar Loopar: while och for](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#16-loopar-while-och-for)

## 1.7 Switch-satsen

### Resurser
[JavaScript.Info The "Switch" statement](https://javascript.info/switch)

### Övningsuppgifter
[Övningar Switch-satsen](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#17-switch-satsen)

<!-- # 3. Arrayer och Funktioner
[Scrimba länk](https://scrimba.com/c/crG7vRSK) -->

<!-- [Stega igenom koden](http://pythontutor.com/live.html#code=let%20Fotbollslag%3D%5B%22DIF%22,%22MALM%C3%96%20FF%22,%22Kungs%C3%B6rs%20BK%22%5D%0Aconsole.log%28Fotbollslag%29%0Alet%20Taut%3D%20Fotbollslag.pop%28%29%0Aconsole.log%28Fotbollslag%29%0Aconsole.log%28Taut%29%0AFotbollslag.push%28%22R%C3%B6nnby%20FC%22%29%0Aconsole.log%28Fotbollslag%29%0Aconsole.log%28Fotbollslag.shift%28%29%29%0AFotbollslag.unshift%28%22AIK%22,%22Hammarby%22%29%0Aconsole.log%28Fotbollslag%29%0A//%20console.log%28Fotbollslag.reverse%28%29%29%0AFotbollslag%3DFotbollslag.sort%28%29%0Aconsole.log%28Fotbollslag.reverse%28%29%29%0A%0Alet%20%C3%96nskelista%3D%5B%22Matta%22,%22Gungh%C3%A4st%22,%22Tandborste%22%5D%0Aconsole.log%28%C3%96nskelista.findIndex%28sak%20%3D%3E%20sak%3D%3D%22Tandborste%22%20%29%29%0Aif%28%C3%96nskelista.findIndex%28sak%20%3D%3E%20sak%3D%3D%22Tandborste%22%20%29%20!%3D%20-1%29%0A%7B%0A%20%20%20%20console.log%28%22det%20%C3%A4r%20en%20tandborste%20h%C3%A4r.%20En%20vuxen%20har%20gjort%20listan.%22%29%0A%7D%0Aelse%7B%0A%20%20%20%20console.log%28%22Godk%C3%A4nd%20lista!%22%29%0A%7D%0A%0A%C3%96nskelista%3D%5B%7B%C3%84gare%3A%22Joakim%22,%20%C3%85lder%3A26,VillHaSaker%3A%5B%22Matta%22,%22Tandborste%22,%22Gungh%C3%A4st%22%5D%7D,%7B%C3%84gare%3A%22Ada%22,%20%C3%85lder%3A1,VillHaSaker%3A%5B%22Boll%22,%22Kanin%22,%22Racerbil%22%5D%7D%5D%0Alet%20Vuxen%20%3D%20%C3%96nskelista.find%28sak%20%3D%3E%20sak.VillHaSaker.includes%28%22Tandborste%22%29%29%0Aif%28Vuxen%20!%3D%20null%29%0A%7B%0A%20%20%20%20console.log%28%22Det%20finns%20en%20tandborste%20i%20listan,%20den%20som%20%C3%A4ger%20listan%20heter%20%22%2B%20Vuxen.%C3%84gare%2B%22%20och%20han%20%C3%A4r%20%22%2BVuxen.%C3%85lder%2B%22%20gammal%22%29%0A%7D%0A%0Alet%20Saker%3D%5B%22Boll%22,%22Kanin%22,%22Racerbil%22,%22Matta%22,%22Tandborste%22%5D%0Alet%20Priser%3D%5B100,280,120000,1200,20%5D%0Aconsole.log%28%22Priser%20%22%2B%20Priser%29%0APriser%3D%20Priser.map%28Pris%20%3D%3E%20Pris*0.74%29%0Aconsole.log%28%22Mappad%20%22%2B%20Priser%29%0APriser%3D%20Priser.filter%28Pris%20%3D%3E%20Pris%3C900%29%0Aconsole.log%28%22Filtrerad%20%22%2B%20Priser%29%0A%0Alet%20TomtensSaker%3D%5B%7BSak%3A%22Boll%22,Pris%3A%20100%7D,%7BSak%3A%22Kanin%22,Pris%3A%20280%7D,%7BSak%3A%22Racerbil%22,Pris%3A%20120000%7D,%7BSak%3A%22Matta%22,Pris%3A%201200%7D,%7BSak%3A%22Tandborste%22,Pris%3A%2020%7D,%7BSak%3A%22Gungh%C3%A4st%22,Pris%3A%20454%7D%5D%0Aconsole.log%28TomtensSaker%29%0A%0ATomtensSaker%20%3D%20TomtensSaker.filter%28Pryl%20%3D%3E%7B%0A%20%20%20%20if%28Pryl.Pris%3C500%29%0A%20%20%20%20return%20Pryl%0A%7D%29%0ATomtensSaker%20%3D%20TomtensSaker.sort%28function%28a,b%29%7B%0A%20%20%20%20return%20b.Pris-a.Pris%0A%7D%29%0A%0Aconsole.log%28%22Tomtens%20%C3%B6nskelista%20%22%2B%20TomtensSaker.map%28function%28elem%29%7B%0A%20%20%20%20return%20elem.Sak%3B%0A%7D%29.join%28%22%7C%22%29%29%0A%0ASayHello%28%22pocke%22%29%3B%0ASayHello%28%22Jocke%22%29%3B%0Afunction%20SayHello%28name%29%7B%0A%20%20%20%20console.log%28%22ello%20%22%2B%20name%2B%22!%22%29%0A%20%20%20%0A%7D%0A%20Addera%281,2%29%0A%0Afunction%20Addera%28nummer1,nummer2%29%0A%7B%0A%20%20%20%20console.log%28nummer1%2Bnummer2%29%0A%20%20%20%20return%20nummer1%2Bnummer2%3B%0A%7D%0A//%20Efterskatt%28R%C3%A4knautL%C3%B6n%28%22joakim%22,25000%29%29%0Alet%20MinL%C3%B6n%3D%20R%C3%A4knautL%C3%B6n%28%22joakim%22,25000%29%0AEfterskatt%28MinL%C3%B6n%29%0Afunction%20R%C3%A4knautL%C3%B6n%28namn,l%C3%B6n%29%0A%7B%0A%20%20%20%20let%20%C3%85rsl%C3%B6n%3D%2012*l%C3%B6n%3B%0A%20%20%20%20console.log%28%22%C3%84rsl%C3%B6nen%20%C3%A4r%20%22%2B%20%C3%85rsl%C3%B6n%2B%22%20f%C3%B6r%20%22%2Bnamn%29%0A%20%20%20%20return%20%C3%85rsl%C3%B6n%0A%7D%0A%0Afunction%20Efterskatt%28%C3%85rsl%C3%B6n%29%7B%0A%20%20%20%20let%20L%C3%B6nefteskatt%3D%20%C3%85rsl%C3%B6n*%200.70%0A%20%20%20%20%0A%20%20%20%20console.log%28%22och%20efterskatt%20%C3%A4r%20den%20%22%2B%20L%C3%B6nefteskatt%2B%22%20kronor%22%29%0A%7D&cumulative=false&curInstr=1&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) -->

## 1.7 Funktioner
### Resurser
<!-- - [Mozilla Funktioner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Mozilla Arrayer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3School Javascript Funktioner](https://www.w3schools.com/js/js_functions.asp)
- [W3School Javascript Arrayer](https://www.w3schools.com/js/js_arrays.asp) -->
[JavaScript.Info Functions](https://javascript.info/function-basics)

### Övningsuppgifter
[Övningar Fuktioner](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#17-funktioner)

## 1.8 Arrow functions (pil-funktioner)
### Resurser
[JavaScript.Info Arrow-functions](https://javascript.info/arrow-functions-basics)

### Övningsuppgifter
[Övningar Arrow functions](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#18-arrow-functions-pil-funktioner)


## 1.9 Objekt
### Resurser
[JavaScript.Info Objects](https://javascript.info/object)

### Övningsuppgifter
[Övningar Objekt](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#19-objekt)

## 1.10 Listor (Arrays)
### Resurser
[JavaScript.Info Arrays](https://javascript.info/array)

### Övningsuppgifter
[Övningar Arrays](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/%C3%B6vningar/README.md#110-listor-array)

# 4. HTML CSS
[Scrimba länk](https://scrimba.com/c/cp37vkC9)

## Resurser
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)
- [W3School Javascript](https://www.w3schools.com/js/default.asp)

# 5. Miniprojekt - Miniräknare
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

## Resurser
- [Learn CSS Layout](https://learnlayout.com)



[Livedemo](https://abbjoafli.github.io/Programmering-1/show/Calculator/index.html)

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

