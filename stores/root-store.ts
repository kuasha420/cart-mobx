import { makeAutoObservable } from "mobx";
import CartItem from "./cart-item";

export default class RootStore {
  cart: CartItem[];

  addToCart(name: string, image: string, price: number, quantity?: number) {
    console.log(`${name} added to cart`);
    const item = this.cart.find((item) => item.name === name);
    if (item) {
      item.increment();
    } else {
      this.cart.push(new CartItem(this, name, image, price, quantity));
    }
  }

  removeFromCart(name: string) {
    const itemIndex = this.cart.findIndex((item) => item.name === name);
    if (itemIndex > -1) {
      this.cart.splice(itemIndex, 1);
    }
  }

  get grandTotal() {
    return this.cart.reduce((total, item) => total + item.total, 0);
  }

  get totalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  constructor() {
    makeAutoObservable(this);
    this.cart = [];
  }
}
