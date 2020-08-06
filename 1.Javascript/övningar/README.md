# Övningar
## 1.1 Variabler
### Övningsuppgifter
**Övning 1 - Jobba med variabler**
   1. Deklarera två variabler: `admin` och `name`.
   2. Tilldela värdet `John` till `name`.
   3. Kopiera värdet från `name` till `admin`.
   4. Skriv ut värdet på `admin` i konsolen med `console.log()` (borde visa "John").

**Övning 2 - Rätt namngivning på variabler**
   1. Skapa en variabel med namnet på vår planet. Hur skulle du namnge en sådan variabel?
   2. Skapa en variabel för att lagra namnet på en aktuell besökare på en webbplats. Hur skulle du namnge den variabeln?

**Övning 3 - Jobba med konstanter**
   1. Skapa en konstant `pi` med pi-värdet och 3 decimaler.
   2. Tilldela `pi` ett annat värde.
   3. Skriv ut `pi` till konsolen, vad händer och varför?
   
## 1.2 Datatyper
### Övningsuppgifter
**Övning 1 - Skriv ut datatyperna** <br>
  Skriv ut till konsolen typerna på följande datatyper med `typeof` konstruktionen
  1. `undefined`  
  2. `0`
  3. `3.14`
  4. `"3.14"`
  5. `true`
  6. `"foo"`
  7. `Math`
  8. `null`
  9. `5 > 4`
  
  Blev utskrifterna det du förväntade dig?
  
## 1.3 Operatorer
### Övningsuppgifter
**Övning 1 - Postfix och prefix formerna**

Vilka är de slutliga värdena för alla variabler a, b, c och d efter koden nedan?
```
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
```

**Övning 2 - tilldelningsresultat**<br>
Vilka är värdena för a och x efter koden nedan?
```
let a = 2;

let x = 1 + (a *= 2);
```

**Övning 3 - typkonverteringar**<br>
Vad är resultatet av dessa uttryck?
```
1. "" + 1 + 0
2. "" - 1 + 0
3. true + false
4. 6 / "3"
5. "2" * "3"
6. 4 + 5 + "px"
7. "$" + 4 + 5
8. "4" - 2
9. "4px" - 2
10. 7 / 0
11. "  -9  " + 5
12. "  -9  " - 5
13. null + 1
14. undefined + 1
15. " \t \n" - 2
```

## 1.4 Jämförelser
### Övningsuppgifter
**Övning 1. Vad blir resultatet för dessa uttryck?**
``` 
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

## 1.5 If-satser
### Övningsuppgifter
**Övning 1. If (en sträng med noll)**<br>
Kommer `Hejsan!` att visas?
```
if ("0") {
  console.log( 'Hejsan!' );
}
```

**Övning 2. Namnet Javascript**<br>
Med `if..else`-konstruktionen, skriv koden som frågar: "Vad är det officiella namnet på JavaScript?"

Om besökaren skriver in "ECMAScript", skriver du ut "Korrekt!", Annars skriver du ut: "Du vet inte? ECMAScript!”
![Första Javascript programmet!](https://github.com/abbjoafli/Programmering-1/blob/master/img/if_exercise_3.png?raw=true)
<br>

**Övning 3. Visa tecknet**<br>
Använd `if..else` och skriv koden som tar in ett nummer via konsolen och visar sedan i konsolen beroende på värdet:

- `1`, om värdet är större än noll,
- `-1`, om mindre än noll,
- `0`, om det är lika med noll.

I denna uppgift antar vi att vi alltid får ett nummer.

**Övning 4. Skriv om 'if' med '?'**<br>
Skriv om `if` så att vi istället använder `?` operatorn:
```
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```
