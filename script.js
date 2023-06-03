var x = document.getElementById("result");

function display(num)
{
    var x = document.getElementById("result");
    x.value +=num; 
}

function Clear(){
    var x = document.getElementById("result");
    x.value =" ";
}

function power(){
    var x = document.getElementById("result");
    x.value = x.value**2;
}

function Derivative()
{
 var x = document.getElementById("result");
var y = "1";
x.value = "1/"+ x.value;
}

 function Root()
 {
    let num1 = document.getElementById("result");
    num1.value= Math.sqrt(num1.value);
}

function btnπ(){
    var x = document.getElementById("result");
    const y =  3.1415926536;
x.value = x.value * y;
}

var numb = 55;
console.log(numb *= Math.PI);

function sin(){
   
let y = document.getElementById("result");
    y.value =  Math.sin(y.value);
}



function cos(){
    let y = document.getElementById("result");
    y.value =  Math.cos(y.value);
}
function tan(){
    let y = document.getElementById("result");
    y.value =  Math.tan(y.value);
}
function log(){
    var x = document.getElementById("result");
    x.value = Math.log(x.value);
}



function pesent()
{
    var x = document.getElementById("result");
    const y = 0.01;
    x.value = x.value * y;
   
}
function negative()
{
    var x = document.getElementById("result");
    x.value = -1 * x.value;


}


function Delete()
{
    var x = document.getElementById("result");
    x.value = x.value.slice(0,-1);
}



function Equal()
{
    var x = document.getElementById("result");

    try{
        x.value = eval(x.value)
    }
    catch(err){
        x.value = "Error Formula";
    }
}


