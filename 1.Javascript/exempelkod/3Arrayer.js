let Fotbollslag=["DIF","MALMÖ FF","Kungsörs BK"]
console.log(Fotbollslag)
let Taut= Fotbollslag.pop()
console.log(Fotbollslag)
console.log(Taut)
Fotbollslag.push("Rönnby FC")
console.log(Fotbollslag)
console.log(Fotbollslag.shift())
Fotbollslag.unshift("AIK","Hammarby")
console.log(Fotbollslag)
// console.log(Fotbollslag.reverse())
Fotbollslag=Fotbollslag.sort()
console.log(Fotbollslag.reverse())

let Önskelista=["Matta","Gunghäst","Tandborste"]
console.log(Önskelista.findIndex(sak => sak=="Tandborste" ))
if(Önskelista.findIndex(sak => sak=="Tandborste" ) != -1)
{
    console.log("det är en tandborste här. En vuxen har gjort listan.")
}
else{
    console.log("Godkänd lista!")
}

Önskelista=[{Ägare:"Joakim", Ålder:26,VillHaSaker:["Matta","Tandborste","Gunghäst"]},{Ägare:"Ada", Ålder:1,VillHaSaker:["Boll","Kanin","Racerbil"]}]
let Vuxen = Önskelista.find(sak => sak.VillHaSaker.includes("Tandborste"))
if(Vuxen != null)
{
    console.log("Det finns en tandborste i listan, den som äger listan heter "+ Vuxen.Ägare+" och han är "+Vuxen.Ålder+" gammal")
}

let Saker=["Boll","Kanin","Racerbil","Matta","Tandborste"]
let Priser=[100,280,120000,1200,20]
console.log("Priser "+ Priser)
Priser= Priser.map(Pris => Pris*0.74)
console.log("Mappad "+ Priser)
Priser= Priser.filter(Pris => Pris<900)
console.log("Filtrerad "+ Priser)

let TomtensSaker=[{Sak:"Boll",Pris: 100},{Sak:"Kanin",Pris: 280},{Sak:"Racerbil",Pris: 120000},{Sak:"Matta",Pris: 1200},{Sak:"Tandborste",Pris: 20},{Sak:"Gunghäst",Pris: 454}]
console.log(TomtensSaker)

TomtensSaker = TomtensSaker.filter(Pryl =>{
    if(Pryl.Pris<500)
    return Pryl
})
TomtensSaker = TomtensSaker.sort(function(a,b){
    return b.Pris-a.Pris
})

console.log("Tomtens önskelista "+ TomtensSaker.map(function(elem){
    return elem.Sak;
}).join("|"))

SayHello("pocke");
SayHello("Jocke");
function SayHello(name){
    console.log("ello "+ name+"!")
   
}
 Addera(1,2)

function Addera(nummer1,nummer2)
{
    console.log(nummer1+nummer2)
    return nummer1+nummer2;
}
// Efterskatt(RäknautLön("joakim",25000))
let MinLön= RäknautLön("joakim",25000)
Efterskatt(MinLön)
function RäknautLön(namn,lön)
{
    let Årslön= 12*lön;
    console.log("Ärslönen är "+ Årslön+" för "+namn)
    return Årslön
}

function Efterskatt(Årslön){
    let Lönefteskatt= Årslön* 0.70
    
    console.log("och efterskatt är den "+ Lönefteskatt+" kronor")
}