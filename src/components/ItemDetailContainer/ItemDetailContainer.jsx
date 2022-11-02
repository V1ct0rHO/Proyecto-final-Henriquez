import React, { useState, useEffect } from "react";

import { getAProduct } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  console.log("Item id", itemID );
  useEffect(() => {
    getAProduct(itemID)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);

  // 2. Render condicional con Operador Ternario
  return (
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <CardDetail product={product} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
