# Övningar
## 1.1 Variabler
### Övningsuppgifter
**Övning 1 - Jobba med variabler**
   1. Deklarera två variabler: `admin` och `name`.
   2. Tilldela värdet `John` till `name`.
   3. Kopiera värdet från `name` till `admin`.
   4. Skriv ut värdet på `admin` med `alert()` (borde visa "John").

**Övning 2 - Rätt namngivning på variabler**
   1. Skapa en variabel med namnet på vår planet. Hur skulle du namnge en sådan variabel?
   2. Skapa en variabel för att lagra namnet på en aktuell besökare på en webbplats. Hur skulle du namnge den variabeln?

**Övning 3 - Jobba med konstanter**
   1. Skapa en konstant `pi` med pi-värdet och 3 decimaler.
   2. Tilldela `pi` ett annat värde.
   3. Skriv ut `pi` med `alert()`, vad händer och varför?
   
## 1.2 Datatyper
### Övningsuppgifter
**Övning 1 - Skriv ut datatyperna** <br>
Fundera över vad du tror följande har för datatyper, skriv det på ett papper 

1. `undefined`  
2. `0`
3. `3.14`
4. `"3.14"`
5. `true`
6. `"foo"`
7. `Math`
8. `null`
9. `5 > 4`

Skriv sedan ut med `alert()` typerna med `typeof()` konstruktionen.
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

Bekräfta det sedan genom att skriva ut `c` och `d` med `alert()`.

**Övning 2 - tilldelningsresultat**<br>
Vilka är värdena för a och x efter koden nedan?
```
let a = 2;

let x = 1 + (a *= 2);
```

Bekräfta det sedan genom att skriva ut `a` och `x` med `alert()`.

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
Bekfräfta det med `alert()`.

## 1.4 Jämförelser
### Övningsuppgifter
**Övning 1. Vad blir resultatet för dessa uttryck?**
``` 
1. 5 > 4
2. "apple" > "pineapple"
3. "2" > "12"
4. undefined == null
5. undefined === null
6. null == "\n0\n"
7. null === +"\n0\n"
```
Bekfräfta det med `alert()`.

## 1.5 If-satser
### Övningsuppgifter
**Övning 1. If (en sträng med noll)**<br>
Kommer `Hejsan!` att visas?
```
if ("0") {
  alert( 'Hejsan!' );
}
```
Testa koden genom att bekfräfta.

**Övning 2. Namnet Javascript**<br>
Med `if..else`-konstruktionen, skriv koden som frågar: "Vad är det officiella namnet på JavaScript?"

Använd `prompt()` för att läsa in ett värde från användaren.

Om besökaren skriver in "ECMAScript", skriver du ut "Korrekt!", Annars skriver du ut: "Du vet inte? ECMAScript!”
![Första Javascript programmet!](https://github.com/abbjoafli/Programmering-1/blob/master/img/if_exercise_3.png?raw=true)
<br>

**Övning 3. Visa tecknet**<br>
Använd `if..else` och skriv koden som tar in ett nummer med `prompt()` och visar sedan med `alert()` beroende på värdet:

- `1`, om värdet är större än noll,
- `-1`, om mindre än noll,
- `0`, om det är lika med noll.

I denna uppgift antar vi att vi alltid får in ett nummer.

**Övning 4. Skriv om 'if' med '?'**<br>
Skriv om `if` så att vi istället använder `?` operatorn:
```
let result;
let a = 1;
let b = 2;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

## 1.6 Loopar: while och for
### Övningsuppgifter
**Övning 1. Sista loop värdet**<br>
Vad är det sista värdet som skrivs till konsolen med den här koden? Varför?
```
let i = 3;

while (i) {
  alert( i-- );
}
```

**Övning 2. Vilka värden visas av while-loopen?**<br>
För varje loop-iteration, skriv ner vilket värde det matar ut och jämför sedan det med lösningen.

Båda looparna skriver ut samma värden eller inte?
1. prefix formen `++i`:
```
let i = 0;
while (++i < 5) alert( i );
```
2. postfix formen `i++`:
```
let i = 0;
while (i++ < 5) alert( i );
```

**Övning 3. Vilka värden visas av for-loopen?**<br>
För varje loop ska du skriva ner vilka värden den ska visa. Jämför sedan med svaret.

Båda looparna skriver ut samma värden eller inte?
1. postfix formen:
```
for (let i = 0; i < 5; i++) alert( i );
```
2. prefix formen:
```
for (let i = 0; i < 5; ++i) alert( i );
```

**Övning 4. Skriv ut jämna siffror i loopen**<br>
Använd `for`-loopen för att skriva ut jämna siffror från `2` till `10`.

**Övning 5. Ersätt "for"-loopen med "while"-loopen**<br>
Skriv om koden som ändrar `for`-loopen till `while`-loopen utan att ändra dess beteende (utgången ska förbli densamma).
```
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```

## 1.7 Switch-satsen
### Övningsuppgifter
**Övning 1. Skriv om "switch"-satsen till "if"-satser**<br>
Skriv koden med `if..else` som motsvarar följande switch:
```
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

**Övning 2. Skriv om "if"-satserna till "switch"-satsen**<br>
Skriv im koden nedan med hjälp av ett enda `switch`-sats:
```
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```

## 1.7 Funktioner
### Övningsuppgifter
**Övning 1. Skriv om "switch"-satsen till "if"-satser**<br>
Följande funktion returnerar sant om parametern `age` är högre än 18.
Annars skriver den ut "Du är för ung tyvärr!":
```
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    alert('Du är för ung tyvärr!');
  }
}
```
Fungerar funktionen annorlunda om `else` delen tas bort?
```
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  alert('Du är för ung tyvärr!');
}
```


**Övning 2. Skriv om funktionen med '?' eller '||'**<br>
Följande funktion returnerar sant om parametern `age` är högre än 18.
Annars skriver den ut "Du är för ung tyvärr!":
```
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    alert('Du är för ung tyvärr!');
  }
}
```

**Övning 3. Funktionen min(a, b)**<br>
Skriv en funktion `min(a, b)` som returnerar det minsta av två siffror `a` och `b`.
Till exempel:
```
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```


**Övning 4. Fuktionen pow(x, n)**<br>
Skriv en funktion `pow(x, n)` som returnerar `x` i potens `n`. Eller med andra ord multiplicerar `x` med sig `n` gånger och returnerar resultatet. Funktionen behöver bara stödja positiva värden 1, 2, 3...
```
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

## 1.8 Arrow functions (pil-funktioner)
### Övningsuppgifter
**Övning 1. Funktionen max(a, b)**<br>
Skriv en funktion `max(a, b)` med arrow-function som returnerar det största av två siffror `a` och `b`.
Till exempel:
```
max(2, 5) == 2
max(3, -1) == -1
max(1, 1) == 1
```

## 1.9 Objekt
### Övningsuppgifter
**Övning 1. Hello Objekt**<br>
Skriv koden, en rad för varje åtgärd:

1. Skapa en tom objekt `user`.
2. Lägg till egenskapen `name` med värdet `John`.
3. Lägg till egenskapen `surname` med värdet `Smith`.
4. Ändra på värdet av `name` till `Pete`.
5. Ta bort egenskapens `namn` från objektet.

**Övning 2. Kolla efter tomhet**<br>
Skriv funktionen `isEmpty(obj)` som returnerar `true` om objektet inte har några egenskaper, `false` annars.
Bör fungera så här:
```
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

**Övning 3.Summera objekt egenskaper**<br>
Vi har ett objekt som lagrar löner för vårt team:
```
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
Skriv koden för att summera alla löner och lagra den variabelb `sum`. Bör vara `390` i exemplet ovan.

Om `salaries` är tomma, måste resultatet vara `0`.

**Övning 4. Multiplicera numeriska egenskaper med 2**<br>
Skapa en funktion `multiplyNumeric(obj)` som multiplicerar alla numeriska egenskaper för `obj` med `2`.

Till exempel:
```
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
Observera att `multiplyNumeric` inte behöver returnera någonting. Det bör ändra objektet på plats.

P.S. Använd `typeof()` för att kontrollera ifall det är ett nummer.

## 1.10 Listor (Array)
### Övningsuppgifter
**Övning 1. Blir listan (arrray) kopierad**<br>

Vad kommer den här koden att visa?

```
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?
```

**Övning 2. Array operationer**<br>

Låt oss prova 5 arrayoperationer.

1. Skapa en array `styles` med "Jazz" och "Blues".
2. Lägg till "Rock-n-Roll" till slutet av listan.
3. Byt ut värdet i mitten med "Classics". Din kod för att hitta mittvärdet bör fungera för alla listor med udda längd.
4. Ta bort det första värdet i listan och visa det.
5. Lägg till `Rap` och `Reggae` längst fram i listan.

Så här ser resultatet ut i varje steg:

```
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
```
