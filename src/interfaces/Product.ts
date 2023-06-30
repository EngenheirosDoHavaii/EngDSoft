import { DocumentReference } from "firebase/firestore";

type Product = {
    id: DocumentReference | String;
    name: string;
    email: string;
    description: string;
};

export default Product;