//external import
import { v4 as uuidv4 } from "uuid";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type User = {
  id: string;
  name: string;
  age: number;
  cart: Product[];
};


export function createProduct(name: string, price: number, desc: string): Product {
  return { id: uuidv4(), name, price, description: desc };
}

export function createUser(name: string, age: number): User {
  return { id: uuidv4(), name, age, cart: [] };
}

export function addToCart(product: Product, user: User) {
  user.cart.push(product);
}

export function removeFromCart(product: Product, user: User) {
  const index = user.cart.indexOf(product);
  if (index > -1) {
    user.cart.splice(index, 1);
  }
}

export function removeQuantity(user: User, product: Product, quantity: number) {
  const index = user.cart.indexOf(product);
  if (index > -1) {
    user.cart.splice(index, quantity);
  }
}

export function cartTotal(user: User): number {
  let total = 0;
  for (let product of user.cart) {
    total += product.price;
  }
  return total;
}

export function showTotal(user: User): void {
  let total = cartTotal(user);
  console.log(`Your current total is: $${total.toFixed(2)}`);
}

export function printCart(user: User): void {
  console.log("Your current cart:\n", user.cart);
}

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
