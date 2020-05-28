
//Numbers
let number=431;
let number2=45;
let answer= number+number2; //First and second number added together
console.log(answer) //Print out the answer
console.log(answer-number2) //Answer minus the second number
let anotheranswer= answer*2/number2; //A more complicated answer
console.log(anotheranswer) 


let fname= "Joakim" //First name
let lname= "Flink" //Last name

let name= fname+ lname; //First and lastname

name= fname+" "+ lname; //Changed the the name variable

console.log(name) 


//Boolean true or false
let LivesAtHome= false
console.log("Lives at home "+LivesAtHome) // text + Boolean variable


//Array of cats
let Cats= ["Arvid","Andy","Vince"]

console.log("The cats "+Cats)
//Foreach object in Cat array
Cats.forEach(Cat => {
    if(Cat.length>4)
console.log("The cat's name is "+Cat)

});

//Object
let CatArvid={name:"Arvid", weight:10, likes:["Eating", "Sleeping","Chasing flies"], lazy:true }

console.log(CatArvid)
console.log(CatArvid.weight)

console.log(typeof(CatArvid.weight))
console.log(CatArvid.name+" the cat weight is "+CatArvid.weight+" kg")
if(CatArvid.lazy==true)
console.log(CatArvid.name+" är lat!")
else if(CatArvid.weight<=10)
console.log(CatArvid.name+"  kan behöva tappa lite vikt!")
else
console.log(CatArvid.name+" är en liten katt som behöver äta lite!")
