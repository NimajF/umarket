
// const cardbtn = document.querySelector('#about')
// cardbtn.addEventListener('mouseover', hover);
// cardbtn.addEventListener('mouseout', out);

const { func } = require("joi");

// function hover(){
//     document.querySelector('.cardAnim').style.backgroundColor = "violet";
// }

// function out(){
//     document.querySelector('.cardAnim').style.backgroundColor = "#fff";
// }

const btnReg = document.querySelector('.btn').addEventListener('mouseover', hover);
const tags = document.querySelector('bi').addEventListener('mouseover', tags);
const btnRegOut = document.querySelector('.btn').addEventListener('mouseout', out);
const secReg = document.querySelector(".regSec");
function hover(){
    document.querySelector(".regSec").style.borderRadius = "25px";
    secReg.style.backgroundColor = '#EEFFFF';
    event.preventDefault();
   
    
}
function out(){
    document.querySelector(".regSec").style.borderRadius = "5px";
    secReg.style.backgroundColor = 'azure';
    event.preventDefault();
   
    
}

// function tags(){
//     tags.className.replace
// }