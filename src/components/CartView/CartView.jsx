import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import UserForm from "../UserForm/UserForm";

function CartView() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);

  return (
    <FlexWrapper>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h4>${product.price}</h4>
          <h4>{product.count}</h4>
          <h4>Precio Total: ${product.price * product.count}</h4>
          <button>X</button>
        </div>
      ))}

      <UserForm cart={cart} getTotalPrice={getTotalPrice} />
    </FlexWrapper>
  );
}

export default CartView;
