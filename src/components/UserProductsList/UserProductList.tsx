import ProductView from "../ProductView";
import Product from "../../interfaces/Product";
import { FirestoreManager } from "../../services/FirestoreManager";
import { useState, useEffect } from "react";
import "../../style/UserProductList.css";

function UserProductList() {
    const [myList, setMyList] = useState<Product[]>([]);

    useEffect(() => {
        FirestoreManager.getUserProducts().then((userProductList) => setMyList(userProductList))
    }, [])
    
    const listItems = myList.map((product) => (
        <li className="user-product-view" key={product.id.toString()}>{ProductView(product)}</li>
      ));
    
      return (
        <div className="user-list-component">
          <ul className="user-product-list"> {listItems} </ul>
        </div>
      );

}

export default UserProductList;