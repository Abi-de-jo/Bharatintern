
let cel = document.querySelector('.celsius > input');



let  Fah = document.querySelector('.Fahrenheit > input');



let  kel = document.querySelector('.kelvin > input');




let btn = document.querySelector('.butto button');


function roundNumber(number){
return Math.round(number*100)/100
}


cel.addEventListener('input',function(){

let  cTemp = parseFloat(cel.value);
let fTemp = (cTemp*(9/5)) + 32;
let kTemp = cTemp+273.15;  


Fah.value = roundNumber(fTemp);
kel.value = roundNumber(kTemp);


})

 

Fah.addEventListener('input',function(){


let fTemp =   parseFloat(Fah.value);
let cTemp = (fTemp - 32) *(5/9);
let kTemp = (fTemp-32) * (5/9) + 273.17;


cel.value = roundNumber(cTemp);
kel.value = roundNumber(kTemp);


})

kel.addEventListener('input',function(){

    let kTemp =  parseFloat(kel.value)
let  cTemp =  kTemp-273.15;

let fTemp =   (kTemp - 273.15) *(5/9) +32;



Fah.value = roundNumber(fTemp);
cel.value = roundNumber(cTemp);


})


btn .addEventListener('click',()=>{


cel.value =  "";
kel.value = "";
Fah.value =  "";



})