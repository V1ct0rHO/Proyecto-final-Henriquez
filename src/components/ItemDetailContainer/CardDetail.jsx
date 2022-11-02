import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function CardDetail({ product }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(product, count);
    setCount(count);
  }

    if (product.title)
    return (
      <div className="cardDetail">
        <div className="cardDetail_img_detail">
          <img src={product.img} alt={product.title} />
        </div>
        <FlexWrapper>
          <div className="cardDetail_detail">
            <h2>{product.title}</h2>
            <h4 className="cardDetail_muteD">{product.category}</h4>
            <h3>$ {product.price}</h3>
            <hr />
            <p>{product.detail}</p>
          </div>
          {count === 0 ? (
            <ItemCount
              onAddToCart={handleAddToCart}
              text="Agregar al carrito"
              stock={product.stock}
              initial={1}
            />
          ) : (
            <Link to="/cart">Ver el carrito</Link>
          )}

          <button onClick={() => removeItem(product.id)}>Eliminar</button>
        </FlexWrapper>
      </div>
    );

  return <Loader />;
}

export default CardDetail;
