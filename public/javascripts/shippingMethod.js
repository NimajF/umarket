

const shipping = document.getElementsByName('shipping[method]')
const Price = document.querySelector('.totalPrice #spanPrice');
const encodedPrice = document.querySelector('.priceEncoded')
let totalPrice = parseInt(Price.innerHTML)
Price.style.color = "rgb(38, 202, 147)"
let shippingElements = Array.from(shipping);
let method = 0;
for (let i of shippingElements){
    i.addEventListener('click', validateShippingMethod)
 }




function validateShippingMethod(){
    if (shippingElements[0].checked){
        Price.innerHTML = `${totalPrice}`
        encodedPrice.setAttribute('value', `${totalPrice}`);
    } else if (shippingElements[1].checked) {
        method = 5
        Price.innerHTML = `${totalPrice + method}`
        encodedPrice.setAttribute('value', `${totalPrice + method}`)
    } else if (shippingElements[2].checked) {
        method = 20;
        Price.innerHTML = `${totalPrice + method}`
        encodedPrice.setAttribute('value', `${totalPrice + method}`)
       
    }

}