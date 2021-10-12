const btnDetails = document.querySelector('.btnDetails')
btnDetails.addEventListener('click', showDetails);
const details = document.querySelector('.purchaseDetails');
let isClicked = false;
function showDetails(){
    if (!isClicked){
        isClicked = true;
        details.removeAttribute('hidden')
        details.classList.remove('mt-4');
        details.classList.add('mt-1');
        btnDetails.innerHTML = "Close"
    } else {
        isClicked = false;
        details.setAttribute('hidden', 'hidden')
        details.classList.remove('mt-4');
        details.classList.remove('mt-1');
        btnDetails.innerHTML = "See details"
    }
    // details.style.transform = 'translateY(10px)';
}