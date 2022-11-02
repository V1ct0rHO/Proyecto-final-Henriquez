import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getProducts, getProductsByCategory } from "../../services/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    setProductsList([]);
    if (categoryID === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    } else {
      getProductsByCategory(categoryID).then((data) => {
        setProductsList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Todo lo que necesitas para tu Mascota</h1>
      {isLoading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
}

export default ItemListContainer;
