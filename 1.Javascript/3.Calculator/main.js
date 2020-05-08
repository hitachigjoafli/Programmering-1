let Answer = "";
let Operator= "";
let Parameter1 = "";
let Parameter2 = "";


function addNumber(number) {
    console.log("Nummer: "+Parameter1)

    if (Operator=="") {
        Parameter1+=number;
    }
    else
    {
            Parameter2+=number;
    }

    let textboard=document.getElementById("textBoard")
    textboard.value +=number;
}

function Summit() {
    let number1= Number(Parameter1)
    let number2= Number(Parameter2)
    if(Operator=="+")
   Answer=number1+number2
    else if(Operator=="*")
   Answer=number1*number2
    else if(Operator=="-")
   Answer=number1-number2
    else if(Operator=="/")
   Answer=number1/number2
    let textboard=document.getElementById("textBoard")
    textboard.value +="="+Answer;
}

function addOperator(Oper) {
    Operator =Oper
    let textboard=document.getElementById("textBoard")
    textboard.value +=Oper;
}
function reset() {
    Anwser=""
    Operator= "";
    Parameter1 = "";
    Parameter2 = "";
    let textboard=document.getElementById("textBoard")
    textboard.value ="";
}