import ProductView from "../../components/ProductView";
import "../../style/ProductListView.css";
import Product from "../../interfaces/Product";
import { Firebase } from "../../services/firebase";
import { useState, useEffect } from "react";

function ProductListView() {
  const [minhaLista, setMinhaLista] = useState<Product[]>([]);

  useEffect(() => {
    Firebase.getProducts().then((productList) => setMinhaLista(productList))
  }, [])
  
  const listItems = minhaLista.map((product) => (
    <li className="ListView" key={product.id}>{ProductView(product)}</li>
  ));

  return (
    <div className="Page">
      <h1 className="PageTitle"> Lista de produtos </h1>
      <ul className="ProductList"> {listItems} </ul>
    </div>
  );
}
export default ProductListView;
