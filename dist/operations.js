"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.showTotal = exports.cartTotal = exports.removeQuantity = exports.removeFromCart = exports.addToCart = exports.createUser = exports.createProduct = void 0;
//external import
const uuid_1 = require("uuid");
function createProduct(name, price, desc) {
    return { id: (0, uuid_1.v4)(), name, price, description: desc };
}
exports.createProduct = createProduct;
function createUser(name, age) {
    return { id: (0, uuid_1.v4)(), name, age, cart: [] };
}
exports.createUser = createUser;
function addToCart(product, user) {
    user.cart.push(product);
}
exports.addToCart = addToCart;
function removeFromCart(product, user) {
    const index = user.cart.indexOf(product);
    if (index > -1) {
        user.cart.splice(index, 1);
    }
}
exports.removeFromCart = removeFromCart;
function removeQuantity(user, product, quantity) {
    const index = user.cart.indexOf(product);
    if (index > -1) {
        user.cart.splice(index, quantity);
    }
}
exports.removeQuantity = removeQuantity;
function cartTotal(user) {
    let total = 0;
    for (let product of user.cart) {
        total += product.price;
    }
    return total;
}
exports.cartTotal = cartTotal;
function showTotal(user) {
    let total = cartTotal(user);
    console.log(`Your current total is: $${total.toFixed(2)}`);
}
exports.showTotal = showTotal;
function printCart(user) {
    console.log("Your current cart:\n", user.cart);
}
exports.printCart = printCart;
// Create User
let user = createUser("Cat Lover", 25);
console.log(user);
// Create Items
let catnipToy = createProduct("Catnip Toy", 9.99, "Plush cat toy with catnip.");
console.log(catnipToy);
let featherWand = createProduct("FeatherWand", 12.99, "Colorful feather wand for cats.");
console.log(featherWand);
let scratchingPost = createProduct("Scratching Post", 29.99, "Durable scratching post for cats.");
console.log(scratchingPost);
// Add 1 item to cart
addToCart(catnipToy, user);
console.log(user);
// Remove 1 instance of item
removeQuantity(user, catnipToy, 1);
console.log(user);
printCart(user);
showTotal(user);
// Add items to cart
addToCart(catnipToy, user);
addToCart(featherWand, user);
addToCart(scratchingPost, user);
console.log(user);
printCart(user);
showTotal(user);
// Remove all items
removeFromCart(scratchingPost, user);
removeFromCart(catnipToy, user);
removeFromCart(featherWand, user);
console.log(user);
showTotal(user);
