//internal import
import {createUser, createProduct, addToCart, printCart, showTotal, removeFromCart} from './operations'


const user = createUser("Elliot The Cat", 5);
const catnipToy = createProduct("Catnip Toy", 1, "A toy filled with catnip");
const featherWand = createProduct("Feather Wand", 2, "A wand with feathers for interactive play");
const scratchingPost = createProduct("Scratching Post", 3, "A post for cats to scratch and stretch");

addToCart(catnipToy, user);
console.log("User's cart after adding Catnip Toy:");
printCart(user);
showTotal(user);

for (let i = 0; i < 3; i++) {
  addToCart(featherWand, user);
}
console.log("User's cart after adding 3 Feather Wands:");
printCart(user);
showTotal(user);

for (let i = 0; i < 3; i++) {
  addToCart(scratchingPost, user);
}
console.log("User's cart after adding 3 Scratching Posts:");
printCart(user);
showTotal(user);

removeFromCart(featherWand, user);
console.log("User's cart after removing Feather Wand:");
printCart(user);
showTotal(user);

