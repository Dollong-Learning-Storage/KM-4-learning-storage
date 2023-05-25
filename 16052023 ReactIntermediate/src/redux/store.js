import { createStore } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      // remove
      // [{}, {}] -> hilangkan item paling akhir
      return {};
  }
};

const store = createStore(cartReducer);

export default store;
