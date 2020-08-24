# Övningar

### Övning1 - Hello From GroupX
0. Skapa en mapp på valfri plats och öppna den med Visual Studio Code.
1. Skapa en `index.html` fil i mappen.
2. Lägg till html-kod för ett standard html dokument med `<head>` och `<body>` osv.
3. Inkludera Vue.js i filen och skriv ut rubriken "Hello From GroupX" tillsammans med en lista på namnen av alla grupp medlemmar.
"Hello From GroupX" och listan ska deklareras som vue data variabler.

### Övning2 - Skapa en data-bunden komponent
Lägg till en ny komponent för att visa ett lektions-event med hjälp av html och datat nedan.
Det du behöver göra:

1. Skapa komponenten EventComponent eller gör det direkt i App komponenten.
Du kan antigen skapa ett CLI Vue projekt eller göra det genom att länka Vue som i övning 1. 
HTML koden (utan data-bindningar) finns **_nedan_**.

2. Skapa en variabel i data-sektionen för att hålla datat. 
Datat för komponenten finns **_nedan_**.

3. Lägg till de nödvändiga data-bindningarna (med interpolation) till komponentens template del.
  

4. Add the component to the app module (app/app.module.ts)

  

1. Load the component from the app component's template (app/app.component.ts)



####_Here is the starting html for the template:_####

```

<div>

<div style="margin-top:30px">

Event:

</div>

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

  

####_Here is the data:_####

```

{name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}

```

