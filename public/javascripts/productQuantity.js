const price = document.querySelector('.productPrice #price');
const qty = document.querySelector('.selectQty');
const encodedPriceForm = document.querySelector('.encodedPriceForm')
const encodedQty = document.querySelector('.encodedQty')

let intPrice = parseInt(price.innerHTML);
qty.addEventListener('change', getQty)
function getQty(){
    let selectedQty = qty.value;
    let result = intPrice * selectedQty;
    price.innerHTML = `${result}`;
    encodedPriceForm.setAttribute('value', `${result}`)
    encodedQty.setAttribute('value', `${qty.value}`)
}