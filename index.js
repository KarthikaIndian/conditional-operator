function and(){
    let x=document.getElementById("number1").value;
   
    let y=document.getElementById("number2").value;
    let z=document.getElementById("number3").value;
 
let flag=false;


if(x<= y && y <= z && x<=z)
{
    flag=true;
    
    document.getElementById("output").innerHTML =flag ;
return;
}else{
    document.getElementById("output").innerHTML = flag;
    return;
}

}
function or(){
    let x=document.getElementById("number1").value;
   
    let y=document.getElementById("number2").value;
    let z=document.getElementById("number3").value;
 
let flag=false;
if(x<= y || y <= z || x<=z)
{
    flag=true;
    
    document.getElementById("output").innerHTML =flag ;
return;
}else{
    document.getElementById("output").innerHTML = flag;
    return;

}
}

