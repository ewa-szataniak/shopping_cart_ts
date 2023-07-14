"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//internal import
const operations_1 = require("./operations");
const user = (0, operations_1.createUser)("Elliot The Cat", 5);
const catnipToy = (0, operations_1.createProduct)("Catnip Toy", 1, "A toy filled with catnip");
const featherWand = (0, operations_1.createProduct)("Feather Wand", 2, "A wand with feathers for interactive play");
const scratchingPost = (0, operations_1.createProduct)("Scratching Post", 3, "A post for cats to scratch and stretch");
(0, operations_1.addToCart)(catnipToy, user);
console.log("User's cart after adding Catnip Toy:");
(0, operations_1.printCart)(user);
(0, operations_1.showTotal)(user);
for (let i = 0; i < 3; i++) {
    (0, operations_1.addToCart)(featherWand, user);
}
console.log("User's cart after adding 3 Feather Wands:");
(0, operations_1.printCart)(user);
(0, operations_1.showTotal)(user);
for (let i = 0; i < 3; i++) {
    (0, operations_1.addToCart)(scratchingPost, user);
}
console.log("User's cart after adding 3 Scratching Posts:");
(0, operations_1.printCart)(user);
(0, operations_1.showTotal)(user);
(0, operations_1.removeFromCart)(featherWand, user);
console.log("User's cart after removing Feather Wand:");
(0, operations_1.printCart)(user);
(0, operations_1.showTotal)(user);
