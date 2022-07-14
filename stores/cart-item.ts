import { makeAutoObservable } from "mobx";
import RootStore from "./root-store";

export default class CartItem {
  // Root Store
  rootStore: RootStore;

  // Observables
  name: string;
  image: string;
  price: number;
  quantity: number;

  // Actions
  increment = () => this.quantity++;

  decrement = () => this.quantity--;

  remove = () => this.rootStore.removeFromCart(this.name);

  // Computed
  get total() {
    return this.price * this.quantity;
  }

  constructor(
    rootStore: RootStore,
    name: string,
    image: string,
    price: number,
    quantity?: number
  ) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity ?? 1;
  }
}
