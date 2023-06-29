import { DocumentReference } from "firebase/firestore";

type Product = {
    id: DocumentReference;
    name: string;
    email: string;
    description: string;
};

export default Product;