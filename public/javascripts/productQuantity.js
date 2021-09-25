const price = document.querySelector('.productPrice #price');
const qty = document.querySelector('.selectQty');
const encodedPriceForm = document.querySelector('.encodedPriceForm')
const encodedQty = document.querySelector('.encodedQty')

let intPrice = parseInt(price.innerHTML);
qty.addEventListener('change', getQty)
encodedQty.setAttribute('value', `${1}`) //By default quantity is 1 (1 product).
function getQty(){
    let selectedQty = qty.value;
    let result = intPrice * selectedQty; // Price equals to the Price times quantity
    price.innerHTML = `${result}`;  // Updates the HTML
    encodedPriceForm.setAttribute('value', `${result}`) // Updates the value with total
    encodedQty.setAttribute('value', `${qty.value}`) // Updates the value with the quantity number.
    console.log(qty.value)
}