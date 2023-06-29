import ProductView from "../ProductView";
import Product from "../../interfaces/Product";
import { Firebase } from "../../services/firebase";
import { useState, useEffect } from "react";

function UserProductList() {
    const [myList, setMyList] = useState<Product[]>([]);

    useEffect(() => {
        Firebase.getUserProducts().then((userProductList) => setMyList(userProductList))
    }, [])
    console.log(myList);
    
    const listItems = myList.map((product) => (
        <li className="ListView" key={product.id}>{ProductView(product)}</li>
      ));
    
      return (
        <div className="Page">
          <ul className="ProductList"> {listItems} </ul>
        </div>
      );

}

export default UserProductList;