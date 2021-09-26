
// document.querySelectorAll('.cardAnim').forEach(element => {
//     element.addEventListener('mouseover', hover => {
        
//         element.style.height = '21rem'
//         event.stopPropagation();
//     })
//     element.addEventListener('mouseout', out => {
//         element.style.height = '20rem'
//     })
    
//   })







    // const btnReg = document.querySelector('.btn').addEventListener('mouseover', hover);
// const tags = document.querySelector('bi').addEventListener('mouseover', tags);
// const btnRegOut = document.querySelector('.btn').addEventListener('mouseout', out);
// const secReg = document.querySelector(".regSec");
// function hover(){
//     document.querySelector(".regSec").style.borderRadius = "25px";
//     secReg.style.backgroundColor = '#EEFFFF';
//     event.preventDefault();
   
    
// }
// function out(){
//     document.querySelector(".regSec").style.borderRadius = "5px";
//     secReg.style.backgroundColor = 'azure';
//     event.preventDefault();
   
    
// }

// function tags(){
//     tags.className.replace
// }


const btnDetails = document.querySelector('.btnDetails').addEventListener('click', showDetails);
const details = document.querySelector('.purchaseDetails');

function showDetails(){
    details.removeAttribute('hidden')
    details.classList.add('transition');
    details.classList.remove('mt-4');
    details.classList.add('mt-1');
    // details.style.transform = 'translateY(10px)';
}

//NAVBAR

