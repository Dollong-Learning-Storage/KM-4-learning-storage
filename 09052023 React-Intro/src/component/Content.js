import React, { useState } from "react";

const Content = ({ itemName = "Sold out" }) => {
  const [cartItem, setCartItem] = useState(0);

  return (
    <div>
      <p>List Item Cart</p>
      <ul>
        <li>
          {itemName}: {cartItem}
        </li>
      </ul>
      <button onClick={() => setCartItem((e) => e + 1)}>+</button>
      {/* <button onClick={() => setCartItem(cartItem + 1)}>+</button> */}
      <button onClick={() => setCartItem((e) => e - 1)}>-</button>
    </div>
  );
};

export default Content;
