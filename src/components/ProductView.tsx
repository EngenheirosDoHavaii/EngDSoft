import "../style/ProductView.css";
import Product from "../interfaces/Product";
import logo from '../style/assets/mockimage.jpeg';

const ProductView = (product: Product) => {
  const buttonHandler = () => {
    console.log("button pressed");
  };

  return (
    <div className="ProductCard">
      <div className="Container">
        <div className="Image">
          <img src={logo} width={150} height={150} alt="Chair"></img>
        </div>
        <div className="Text">
          <h1> {product.name} </h1>
          <p><strong>Description:</strong> {product.description} </p>
          <p><strong>Contact:</strong> {product.email} </p>
          <button onClick={buttonHandler}>See details </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
