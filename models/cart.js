let cart = null;

module.exports = class Cart {

    static addtoCart(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 }; //By default there is no cart, so no products or total price
        }

        const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // check product is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.products[existingProductIndex];
            exsitingProduct.qty += 1;
        } else { //not exist
            product.qty = 1;
            cart.products.push(product);
        }

        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }

    static delete(productId) {
        const isExisting = cart.products.findIndex(p => p.id == productId);
        if (isExisting >= 0) {
            cart.products.splice(isExisting, 1);
        }
    }

}