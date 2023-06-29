import ProductView from "../../components/ProductView";
import "../../style/ProductListView.css";
import Product from "../../interfaces/Product";
import { Firebase } from "../../services/firebase";
import { useState, useEffect } from "react";

const getFilteredItems = (query: string, items: Product[]) => {
  query = query.toLowerCase()
  if (!query) {
    return items;
  }
  return items.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.email.toLowerCase().includes(query)
  );
};

function ProductListView() {
  const [query, setQuery] = useState<string>("");
  const [minhaLista, setMinhaLista] = useState<Product[]>([]);
  const filteredItems = getFilteredItems(query, minhaLista);

  useEffect(() => {
    Firebase.getProducts().then((productList) => setMinhaLista(productList));
  }, []);

  const listItems = filteredItems.map((product) => (
    <li className="ListView" key={product.id.toString()}>
      {ProductView(product)}
    </li>
  ));

  return (
    <div className="Page">
      <h1 className="PageTitle">Product's List</h1>
      <div className="SearchBar">
        <label>Search</label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
      </div>
      <ul className="ProductList"> {listItems} </ul>
    </div>
  );
}
export default ProductListView;
