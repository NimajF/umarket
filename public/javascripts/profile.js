//profile

const popupBtn = document.querySelector('.popup-button').addEventListener('click', openPopup)
const popupBtnClose = document.querySelector('.popup-close').addEventListener('click', closePopup)

const popup = document.querySelector('.popup')
const overlay = document.getElementById('overlay')
overlay.addEventListener('click', overlayClicked) // if the user clicks the overlay (the screen itself)

function openPopup(){
    popup.removeAttribute('hidden');
    overlay.classList.add('active');
}

function closePopup(){
    popup.setAttribute('hidden', 'hidden');
    overlay.classList.remove('active')
}

function overlayClicked(){
    popup.setAttribute('hidden', 'hidden');
    overlay.classList.remove('active')
}