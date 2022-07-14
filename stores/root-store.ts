import { applySnapshot, flow, getSnapshot, types } from "mobx-state-tree";
import CartItem from "./cart-item";

const RootStore = types
  .model("RootStore", {
    cart: types.array(CartItem),
  })
  .actions((self) => ({
    addToCart(name: string, image: string, price: number, quantity?: number) {
      const item = self.cart.find((item) => item.name === name);
      if (item) {
        item.increment();
      } else {
        self.cart.push({
          name,
          image,
          price,
          quantity: quantity ?? 1,
        });
      }
    },
    removeFromCart(name: string) {
      const index = self.cart.findIndex((item) => item.name === name);
      if (index > -1) {
        self.cart.splice(index, 1);
      }
    },
    clearCart() {
      self.cart.clear();
    },
    hydrateFromServer: flow(function* hydrateFromServer() {
      try {
        const res = yield fetch("/api/cart");
        if (res.ok) {
          const data = yield res.json();
          applySnapshot(self, data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }),
    saveCartToServer() {
      fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getSnapshot(self)),
      });
    },
  }))
  .views((self) => ({
    get grandTotal() {
      return self.cart.reduce((total, item) => total + item.total, 0);
    },
    get totalItems() {
      return self.cart.reduce((total, item) => total + item.quantity, 0);
    },
  }));

export default RootStore;
