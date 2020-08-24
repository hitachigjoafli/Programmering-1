# Övningar

### Övning1 - Hello From GroupX
0. Skapa en mapp på valfri plats och öppna den med Visual Studio Code.
1. Skapa en `index.html` fil i mappen.
2. Lägg till html-kod för ett standard html dokument med `<head>` och `<body>` osv.
3. Inkludera Vue.js i filen och skriv ut rubriken "Hello From GroupX" tillsammans med en lista på namnen av alla grupp medlemmar.
"Hello From GroupX" och listan ska deklareras som vue data variabler.

### Övning2 - Creating a Data-Bound Component
Add a new
component to display a list of upcoming events using the html and data below. Then load that
component from the inline template in the app component (app/app.component.ts). To do this,
you will need to:

1. Create the component

  

You can use either an inline template or a separate template file. The html (without

data-bindings) for the template is **_below_**.

1. Add a property on the component to hold the data.

  

The data for the component is also **_below_**.

  

1. Add the necessary data-bindings (using interpolation) to your component's template

  

1. Add the component to the app module (app/app.module.ts)

  

1. Load the component from the app component's template (app/app.component.ts)

  

**_When you're done, be sure to run the Plunk and you should see a congratulations message._**

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

