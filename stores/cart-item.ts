import { types } from "mobx-state-tree";

const CartItem = types
  .model("CartItem", {
    name: types.identifier,
    image: types.string,
    price: types.number,
    quantity: types.number,
  })
  .actions((self) => ({
    increment() {
      self.quantity++;
    },
    decrement() {
      if (self.quantity > 1) {
        self.quantity--;
      }
    },
  }))
  .views((self) => ({
    get total() {
      return self.price * self.quantity;
    },
  }));

export default CartItem;
