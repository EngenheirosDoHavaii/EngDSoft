import ProductView from "./ProductView";
import "../style/ProductListView.css";
import Product from "../interfaces/Product";

function ProductListView() {
  const numbers = [1, 2, 3, 4, 5, 6, 6, 7];
  const products: Product[] = [
    {
      id: "1",
      name: "Cadeira",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "2",
      name: "Mesa",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "3",
      name: "Sofá",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "4",
      name: "Cinzeiro",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "5",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "6",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "7",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "8",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "9",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "10",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
    {
      id: "11",
      name: "Tv",
      email: "@@@@@@gmail.com",
      description: "aaaaaaaaaaa",
    },
  ];

  const listItems = products.map((product) => (
    <li className="ListView" key={product.id}>{ProductView(product)}</li>
  ));

  return (
    <div>
      <h1 className="PageTitle"> Lista de produtos </h1>
      <ul className="ProductList"> {listItems} </ul>
    </div>
  );
}
export default ProductListView;
