let i=10
 while (0<i) {
     console.log(i)
     i-=1
 }

 while (i<10) {
    console.log(i)
     i+=1
 }
 i=0;
 while (i<10) {
     let output=""
     let p=0;
     while (p<10) {
         output+="X"
         p+=1;
     }
    console.log(output)
     i+=1
 }


 for (let i2 = 0; i2 < 120; i2+=10) {
     console.log(i2)   
 }

let man= true
let age=450

 if(age<30)
 {
if (man==true) {
    console.log("You like to bake")
} else {
    console.log("You like to play video games")
}
 }
 else if(age>30 && age<50)
 {
    if (man==true) {
        console.log("You like to walk in the park")
    } else {
        console.log("You like to make wooden sculptures")
    }
 }
 else{
    if (man==true || man==false) {
        console.log("You like to watch livestreams on youtube")
    }
 }
 
 age=0
 money=0
 
 while (age<65) {
     if(age<15)
     money+=1050
     else if(age<18)
     money+=1350
     else if(age<23)
     money+=3350
     else if(age<65)
     money+=(age*1000)*0.70
    //  else
    //  money+=
 }