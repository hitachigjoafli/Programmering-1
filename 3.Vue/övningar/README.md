# Övningar

Ni som upplever att uppgifterna är för lätta och vill ha lite mer utmanande mindre projekt så kolla på den här länken:
<https://rojas.io/vue-js-practice-project-ideas/>

### Testkod
Lägg testkoden i en fil och gör uppgifterna med den som utgångspunkt.

```
<!DOCTYPE html>
<html>

<head>
    <!-- Hämtar vue.js bibilioteket -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>

</head>

<body>
    <!-- Anger div som vue ska appliceras på -->
    <div id="app">
        <h1>{{namn}}</h1>
    </div>

</body>

<script>
    // Skapar en vue instans som kopplas till div-taggen med id="app"
    var app = new Vue({
        el: '#app',
        data: {
            namn: 'Kalle Kula!',
        }
    })

</script>

</html>
```

Eller skapa ett nytt projekt med Vue CLI.

### Övning 1 - Hello From GroupX
0. Skapa en mapp på valfri plats och öppna den med Visual Studio Code.
1. Skapa en `index.html` fil i mappen.
2. Lägg till html-kod för ett standard html dokument med `<head>` och `<body>` osv.
3. Inkludera Vue.js i filen och skriv ut rubriken "Hello From GroupX" tillsammans med en lista på namnen av alla grupp medlemmar.
"Hello From GroupX" och listan ska deklareras som vue data variabler.

### Övning 1.1 - Formulär
0. Skapa en mapp på valfri plats och öppna den med Visual Studio Code.
1. Skapa en `index.html` fil i mappen.
2. Lägg till html-kod för ett standard html dokument med `<head>` och `<body>` osv.
3. Inkludera Vue.js i filen.
4. Skapa 4 input-fält för address, postnummer, stad och land.
5. Skapa 4 variabler i data-sektionen för att spara det som matas in.
6. Skapa en knapp som skriver det som matats in i ***alert()***

### Övning 1.2 - Computed
1. Skapa två data-variabler för firstName och lastName.
2. Skapa en input-fält som har två-vägbindning med lastName dvs **v-model**.
3. Skapa computed variabel som skriver ut fullName.

### Övning 2 - Skapa en data-bunden komponent
Lägg till en ny komponent för att visa ett lektions-event med hjälp av html och datat nedan.<br>
Det du behöver göra:

1. Skapa komponenten **EventDetailsComponent** eller lägg koden direkt i **App** komponenten.
Du kan antigen skapa ett CLI Vue projekt eller göra det genom att länka in Vue som i övning 1. 
HTML koden (utan data-bindningar) finns **_nedan_**.

2. Skapa en variabel i data-sektionen för att hålla datat. 
Datat för komponenten finns **_nedan_**.

3. Lägg till de nödvändiga data-bindningarna (med interpolation) till komponentens template del.
  
4. Importera komponenten till App-komponenten och lägg till den i template delen för att visas.

### Resultatet
---
### Event: Smarta System 2020
**Date:** 24/8/2020 <br>
**Time:** 13:00 <br>
**Address:** Robotvägen 4, 721 36 Västerås, Sverige <br>


####_Här är start html för template:_####

```

<div>
  <h1>
    Event:
  </h1>
  
  <div>
    Date:
  </div>
  
  <div>
    Time:
  </div>
  
  <div>
    Address:
  </div>
</div>

```

  

####_Här är datat:_####

```
{
  name:'Smarta System 2020', 
  date: '24/8/2020', 
  time: '13:00', 
  location: { 
    address: 'Robotvägen 4', 
    zipcode: '721 36', 
    city: 'Västerås', 
    country: 'Sverige'
  }
}

```
### Övning 2.2 - Hämta data valfri data från API och presentera det
Använd tjänsten JSON-Placeholder för att göra api-anrop och hämta valfri data och presentera den.
<br>
<https://jsonplaceholder.typicode.com/>
<br>
<br>
### Övning 3 - Kommunikation mellan komponenter Parent -> Child
**_Instruktioner_**: **EventDetailsComponent**:en visar information om ett lektions-event, där adress är inkluderad.
Skapa en ny child komponent som ska hantera att adressen visas och skicka eventets adress in till den nya komponenten från EventDetailsComponenten.<br>
Det du behöver göra:

_HINT:_ Namnge inte din komponent `<address>`. `<address>` är redan ett HTML5 element.

1. Skapa en ny adress komponent som tar in adress data som **prop** 

2. Updatera event-details komponenten att inkludera adress komponenten och skicka in adress-delen av event-datat.

### Resultatet
---
Samma som i övning 2.

### Övning 4 - Kommunikation mellan komponenter Child -> Parent
**_Instruktioner_**: 

1. Skapa 4 **input**-element och 4 **button**-element i adress-komponenten.  

2. Fixa så att genom **Child -> Parent** kommunikation så att när man fyllt i ett fält och klickar på motsvarande knapp ska adressen uppdateras för den delen i EventDetailsComponenten.

### Resultatet
---
![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/3.Vue/%C3%B6vningar/SmartaSystemExercise4.PNG)

### Övning 5 - Styles Bindning
**_Instruktioner_**: 

1. Skapa en **input**-element brevid titeln på sidan.  

2. Använd two-way-binding med **v-model** för att koppla värdet från fältet till en data-variabel kanske **titleColor**.

3. Använd sedan **style-binding** så att titelns färg ändras till den färgen man matat in.

### Resultatet
---
![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/3.Vue/%C3%B6vningar/style-binding.PNG)


### Övning 6 - Watcher
**_Instruktioner_**: 

1. Skapa en **watcher** på **titleColor** data-variabeln som skriver ut "Jippy min favoritfärg!"

### Resultatet
---
![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/3.Vue/%C3%B6vningar/watcher.PNG)

### Övning 7 - v-if direktivet
**_Instruktioner_**: 

1. Applicera **v-if**-direktivet så att titeln inte syns ifall färgen är **brown**.  

### Resultatet
---
![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/3.Vue/%C3%B6vningar/v-if-brown.PNG)

### Övning 8 - Class Bindning & Computed Property
**_Instruktioner_**: 

1. Använd en **computed property** för att hålla koll på ifall färgen är **brown** tex **isBrown**.

2. Applicera **Class**-bindning med hjälp av **isBrown** så att all text blir brun. Hint: måste skapa en css class i styles.

### Resultatet
---
![överblick](https://github.com/abbjoafli/Programmering-1/blob/master/3.Vue/%C3%B6vningar/isBrown.PNG)
