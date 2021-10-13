const price = document.querySelector('.productPrice #price');
const qty = document.querySelector('.selectQty');
const encodedPriceForm = document.querySelector('.encodedPriceForm');
const encodedQty = document.querySelector('.encodedQty');

const stock = document.querySelector('#stock');
const stockMessage = document.querySelector('.stock-message');
const btnBuy = document.querySelector('.btnBuy');
const cart = document.querySelector('.btnCart')

if (stock.value < 1){
    btnBuy.setAttribute('hidden', 'hidden');
    cart.setAttribute('hidden', 'hidden');
}

let intPrice = parseInt(price.innerHTML);
qty.addEventListener('change', getQty)
//By default quantity is 1 (1 product).
function getQty(){
    encodedQty.setAttribute('value', `${1}`) 
    let selectedQty = qty.value;
    console.log(selectedQty)
    if (selectedQty <= stock.value && selectedQty != 10){ // If the selected quantity is less or equal to stock, show available stock and BUY button
        let result = intPrice * selectedQty; // Price equals to the Price times quantity
        price.innerHTML = `${result}`;  // Updates the HTML
        encodedPriceForm.setAttribute('value', `${result}`) // Updates the value with total
        encodedQty.setAttribute('value', `${qty.value}`) // Updates the value with the quantity number.
        btnBuy.classList.remove('disabled')
        stockMessage.innerHTML = "In Stock."
        stockMessage.classList.remove('noStock');
    } else {
        stockMessage.innerHTML = "Out of stock."
        stockMessage.classList.add('noStock')
        btnBuy.classList.add('disabled') // disable button by Bootstrap class
    }

    
}

if (stock.value < 1){
    btnBuy.classList.add('disabled')
}