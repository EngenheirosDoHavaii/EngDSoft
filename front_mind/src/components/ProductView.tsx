import "../style/ProductView.css"
import Product from "../interfaces/Product"

const ProductView = (product: Product) => {
    const buttonHandler = () => {
        console.log("button pressed")
    }

    return (
        <div className="ProductCard">
            <h1> {product.name} </h1>    
            <p> {product.email} </p> 
            <p> {product.description} </p>
            <button onClick={buttonHandler} >See details </button>
        </div>
    )
}

export default ProductView