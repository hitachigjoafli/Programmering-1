# Javascript

![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/img/planjs.png?raw=true)
## Intro

I det här första kapitlet på våran resa i kursen programmering 1 så ska vi lära oss grunderna i Javascript/HTML/CSS. Javascript är programmeringsspråket som körs i webbapplikationer och används för att kontrollera webbläsaren vilket resulterar i mer interaktiva webbsidor. På senare tid använder man även Javascript utanför webbläsaren som t.ex. mobilappar och serverapplikationer. Instagram och Facebook är exempel på mobilappar som är utvecklade i Javascript.

Det här är Wikipedias defintion på Javascript:

>Javascript, i marknadsföringssyfte skrivet JavaScript och förkortat JS, är ett prototyp-baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första-klass-objekt. Javascript används främst på klientsidan i webbtillämpningar, det vill säga exekveras i en webbläsares Javascriptmotor. Då Javascript används i webbläsare arbetar det mot ett gränssnitt som kallas Document Object Model (DOM). 
>
>Vanligtvis inbäddas Javascript i, eller inkluderas från, HTML-sidor. Exempel på användningsområden är kontroll av ifyllda fält innan formulär skickas till en server, funktioner för att visa eller dölja delar av en sida och växling av annonsbilder med visst intervall. Javascript kan även användas för mer avancerade funktioner i en webbläsare såsom spel och bildbehandling.
>
>Skriptspråket kan implementeras i andra program än webbläsare. Ett numera vanligt exempel av implementation utanför webbläsaren är Node.js, som tillåter utvecklaren att använda Javascript på serversidan för att kunna arbeta med anslutningar till databaser, skicka e-post-meddelanden och så vidare.

Detta är en mer teknisk beskrivning som vi kommer förstå bättre när vi är klara med javascript delen.

Vi lär oss alla på olika sätt och i den här kursen kommer det finnas material som förhoppningsvis också passar alla. Kursmaterialet finns som text, Youtube-videor och interaktiva videor i Scrimba.
Scrimba är interaktiva videor där du som elev när som helst under videons gång kan pausa och börja programmera rätt i videon. Exempelkod för dessa videor ligger även här i undermappen exempelkod.

Våga testa och fråga kompisar och lärare för att få bästa möjligheter till att utvecklas.

Till varje del så kommer det finnas lite övningsuppgifter.

## Övergripande resurser för denna modul:

- [Modern Javascript](https://javascript.info/)
- [Scrimba länk - variabler, if-satser, loopar och object](https://scrimba.com/p/pDyxbfd/cNDGqRTr)
- [Scrimba länk - If-satser och loopar fördjupning](https://scrimba.com/c/caZNqwcL)
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)
- [HTML/CSS av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
- [W3School Javascript](https://www.w3schools.com/js/default.asp)
- [Modern Javascript av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)

# 0. Testmiljö

När vi testar våran JavaScript kod så kommer vi börja med att göra det i Plunker som är en online miljö för att testa webbtekniker.

Här är en länk till en plunk som ni kan använda: <https://plnkr.co/edit/9OnAVyIK7Tk1cP6d>


<!--
När vi skriver programmeringskod i oavsett vilket språk så behöver vi en kod-editor för att skriva koden i, på samma sätt som vi använder Microsoft Word när vi vill skriva dokument.
-->
<!--
1. Vi kommer använda oss av en kod-editor som heter Visual Studio Code. Så börja med att ladda ner och installera den på den här länken:
<https://code.visualstudio.com/download>
-->
<!--
2. För att kunna köra Javascript utanför webbläsaren så behöver vi något som förstår och kan köra (exekvera) javascript koden. För det kommer vi använda körningsprogrammet Node.js.
<br>Ladda ner och installera Node.js på den här länken:
<https://nodejs.org/en/download>
-->
<!--
3. När det är gjort så kan ni skapa en mapp under C: disken som heter Programmering1 och en ytterligare mapp under den som heter Test -> *C:\Programmering1\Test*
Öppna sedan mappen i Visual Studio Code.
Inne i Visual Studio Code skapa en javascript fil som heter *test.js*, i test.js filen skriv in följande kod:
`console.log("Mitt första javascript program!")`
Öppna sedan terminal fönstret i Visual Studio Code finns under View -> Terminal och skriv in `node test`, då ska ni se följande utskrift:
-->
<!--
![Första Javascript programmet!](https://github.com/abbjoafli/Programmering-1/blob/master/img/first_javascript_program.PNG?raw=true)
-->
<!--
Grattis du har skapat och kört ditt första javascript program! 
-->

# 1. Variabler, datatyper, jämförelser, if-satser, loopar, objekt och listor

<!-- [Stega igenom koden](http://pythontutor.com/live.html#code=%0A//Numbers%0Alet%20number%3D431%3B%0Alet%20number2%3D45%3B%0Alet%20answer%3D%20number%2Bnumber2%3B%20//First%20and%20second%20number%20added%20together%0Aconsole.log%28answer%29%20//Print%20out%20the%20answer%0Aconsole.log%28answer-number2%29%20//Answer%20minus%20the%20second%20number%0Alet%20anotheranswer%3D%20answer*2/number2%3B%20//A%20more%20complicated%20answer%0Aconsole.log%28anotheranswer%29%20%0A%0A%0Alet%20fname%3D%20%22Joakim%22%20//First%20name%0Alet%20lname%3D%20%22Flink%22%20//Last%20name%0A%0Alet%20name%3D%20fname%2B%20lname%3B%20//First%20and%20lastname%0A%0Aname%3D%20fname%2B%22%20%22%2B%20lname%3B%20//Changed%20the%20the%20name%20variable%0A%0Aconsole.log%28name%29%20%0A%0A%0A//Boolean%20true%20or%20false%0Alet%20LivesAtHome%3D%20false%0Aconsole.log%28%22Lives%20at%20home%20%22%2BLivesAtHome%29%20//%20text%20%2B%20Boolean%20variable%0A%0A%0A//Array%20of%20cats%0Alet%20Cats%3D%20%5B%22Arvid%22,%22Andy%22,%22Vince%22%5D%0A%0Aconsole.log%28%22The%20cats%20%22%2BCats%29%0A//Foreach%20object%20in%20Cat%20array%0ACats.forEach%28Cat%20%3D%3E%20%7B%0A%20%20%20%20if%28Cat.length%3E4%29%0Aconsole.log%28%22The%20cat's%20name%20is%20%22%2BCat%29%0A%0A%7D%29%3B%0A%0A//Object%0Alet%20CatArvid%3D%7Bname%3A%22Arvid%22,%20weight%3A10,%20likes%3A%5B%22Eating%22,%20%22Sleeping%22,%22Chasing%20flies%22%5D,%20lazy%3Atrue%20%7D%0A%0Aconsole.log%28CatArvid%29%0Aconsole.log%28CatArvid.weight%29%0A%0Aconsole.log%28typeof%28CatArvid.weight%29%29%0Aconsole.log%28CatArvid.name%2B%22%20the%20cat%20weight%20is%20%22%2BCatArvid.weight%2B%22%20kg%22%29%0Aif%28CatArvid.lazy%3D%3Dtrue%29%0Aconsole.log%28CatArvid.name%2B%22%20%C3%A4r%20lat!%22%29%0Aelse%20if%28CatArvid.weight%3C%3D10%29%0Aconsole.log%28CatArvid.name%2B%22%20%20kan%20beh%C3%B6va%20tappa%20lite%20vikt!%22%29%0Aelse%0Aconsole.log%28CatArvid.name%2B%22%20%C3%A4r%20en%20liten%20katt%20som%20beh%C3%B6ver%20%C3%A4ta%20lite!%22%29%0A&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) -->

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

# 4. HTML - CSS
## Resurser
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)
- [Scrimba länk](https://scrimba.com/c/cp37vkC9)

# 5. Webbläsaren - DOM (Document Object Model) - BOM (Browser Object Model) - Events
## Resurser
* [JavaScript.Info UI](https://javascript.info/ui)
* [W3Schools JS-HTML-DOM](https://www.w3schools.com/js/js_htmldom.asp)
* [W3Schools JS-Browser-BOM](https://www.w3schools.com/js/js_window.asp)

## 5.1 - DOM
* [Webbläsarens miljö](https://javascript.info/browser-environment)
* [DOM Noder](https://javascript.info/dom-nodes)
* [DOM Navigering](https://javascript.info/dom-navigation)
* [DOM Nod-Egenskaper](https://javascript.info/basic-dom-node-properties)
* [Modifiera Dokumentet DOMen](https://javascript.info/modifying-document)

# 6. Miniprojekt
Ni har två projekt att välja mellan beroende på era programmeringskunskaper och hur bekväma ni känner er med teknikerna vi har gått igenom.
Tycker man att det varit medel eller svårt så rekommenderas att man gör projektet **Miniräknare**. Tycker man att det vi gått igenom har varit alldeles för enkelt och vill ha lite mer utmaning så rekommenderas att man gör ett valfritt spel och projektet **Spel**. Man får vara två och två om man väljer att göra ett spel, men det är inte ett måste. 

## Miniräknare - Deadline 2020-09-29
Uppgiften är klassisk och i teorin simpel, skapa en miniräknare som kan räkna addition, subtraction, division och multiplikation.

Det är alltid bra att ha en plan innan man börjar därför skriver jag mitt tillvägagångsätt när jag gör ett sånt här projekt.
### Plan
1. Skapa en plan i pseudokod
2. Rita en snabb wireframe
3. Skapa sidan
   1. HTML - det man ser
   2. Javascript - det som händer
   3. CSS - så det ser fint ut
4. Utvärderar och reflekterar, vad hade jag kunna gjort annorlunda nu i efterhand och vad har jag lärt mig.
5. *Lägger ut mitt fina projekt på github med en tydlig readme så andra kan nyttja eller återskapa det jag skapat.

Självklart så **kommenterar** jag alltid koden under projektets gång för att göra det enkelt för mig och andra att förstå vad allt gör.

<!--[Här](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/exempelkod/5.Calculator) finns mitt projekt om man vill ladda ner det för att testa eller kika på för inspiration!-->

### Krav
* Miniräknaren ska kunna **addera**, **subtrahera**, **multiplicera** och **dividera** mellan två tal.
* Den behöver inte kunna jobba med fler än två tal samtidigt dvs **3+5**, **7-9**, **12*4**, **12/4**.

### Resurser
- [Learn CSS Layout](https://learnlayout.com)

- [Livedemo](https://abbjoafli.github.io/Programmering-1/show/Calculator/index.html)

## Spel
Jag föreslår att man använder en spel-motor när man utvecklar sitt spel och en populär JavaScript spel-motor är <https://phaser.io/>.
För att komma igång med det kan man börja med gå igenom deras tutorial och bygga ett exempel spel med Phaser: <https://phaser.io/tutorials/making-your-first-phaser-3-game/part1>
Kom ihåg att det kräver att nu sätter er in i hur Phaser fungerar osv.

1. Bestäm dig/er för vilket spel du/ni vill bygga och meddela det till mig (Jeton) för godkännande.
Exempel på spel kan vara Snake, Minesweeper, Tetris, Pacman, Space Invaders, Ping Pong, Flappy Bird osv.
2. Man kan följa liknande plan som för miniräknaren och börja utveckla spelet.

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

