import "../style/ProductView.css";
import Product from "../interfaces/Product";
import logo from '../style/assets/mockimage.jpeg';
import { FirestoreManager } from "../services/FirestoreManager";
import { AuthManager } from "../services/AuthManager";

const ProductView = (product: Product) => {
  const authManager = AuthManager.getInstance();

  const buttonHandler = () => {
    console.log("button pressed");
  };

  const deleteButtonHandler = () => {
    FirestoreManager.getInstance().deleteUserProduct(product);
  }

  return (
    <div className="ProductCard">
      <div className="Container">
        <div className="Image">
          <img src={logo} width={150} height={150} alt="Chair"></img>
        </div>
        <div className="Text">
          <h1 className="product-name">{product.name}</h1>
          <p><strong>Description:</strong> {product.description} </p>
          <p><strong>Contact:</strong> {product.email} </p>

        <div className="product-buttons">
          <button className="details-btn" onClick={buttonHandler}>See details</button>
          {authManager.getUserEmail() === product.email && 
            <button className="delete-btn" onClick={deleteButtonHandler}>Delete</button>
          }
        </div>

        </div>
      </div>
    </div>
  );
};

export default ProductView;
