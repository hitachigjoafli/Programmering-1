# Övningar

### Övning1 - Hello From GroupX
0. Skapa en mapp på valfri plats och öppna den med Visual Studio Code.
1. Skapa en `index.html` fil i mappen.
2. Lägg till html-kod för ett standard html dokument med `<head>` och `<body>` osv.
3. Inkludera Vue.js i filen och skriv ut rubriken "Hello From GroupX" tillsammans med en lista på namnen av alla grupp medlemmar.
"Hello From GroupX" och listan ska deklareras som vue data variabler.

### Övning2 - Skapa en data-bunden komponent
Lägg till en ny komponent för att visa ett lektions-event med hjälp av html och datat nedan.<br>
Det du behöver göra:

1. Skapa komponenten **EventComponent** eller lägg koden direkt i **App** komponenten.
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
---

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

