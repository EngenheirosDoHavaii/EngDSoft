import { Timestamp, orderBy, query, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import Product from "../interfaces/Product";
import UserType from "../interfaces/UserType";
import { FirebaseConfig } from "../services/FirebaseConfig";
import {
    User,
  } from "firebase/auth";

export class FirestoreManager {
    private static instance: FirestoreManager

    public static getInstance(): FirestoreManager {
        if (!FirestoreManager.instance) {
            FirestoreManager.instance = new FirestoreManager();
        }

        return FirestoreManager.instance;
    }

    public async isUserInDatabase(userID: string) {
        const usersList = await getDocs(collection(FirebaseConfig.getInstance().db, "users"));
    
        for (let user of usersList.docs) {
          if (userID === user.data().uid) {
            return true;
          }
        }
        return false;
    }
    
    public async addUser(user: User) {
        const userInDB = await this.isUserInDatabase(user.uid);

        if (!userInDB) {
            const newUser: UserType = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            };
            await addDoc(collection(FirebaseConfig.getInstance().db, "users"), newUser);
        }

        return;
    }

    public async AddProduct(item: Product) {
        const docRef = await addDoc(collection(FirebaseConfig.getInstance().db, "products"), item);
        await updateDoc(docRef, {timestamp: Timestamp.fromMillis(Date.now())});
        return docRef.id;
    }
    
    public async getProducts() {
        const collectionRef = collection(FirebaseConfig.getInstance().db, "products")
        const q = query(collectionRef, orderBy('timestamp', 'desc'))
        const productsSnapshot = await getDocs(q);
        const productsList = productsSnapshot.docs.map((doc) => {
            const data = doc.data();
            const newData: Product = {
            name: data.title,
            description: data.description,
            id: doc.ref,
            email: data.email,
            };
            return newData;
        });
        return productsList;
    }
    
    public async getUserProducts() {
        let productsList = await this.getProducts();
        const userProducts = productsList.filter(
            (product) => product.email === FirebaseConfig.getInstance().auth.currentUser?.email
        );
        return userProducts;
    }
    
    public async deleteUserProduct(product: Product) {
        await deleteDoc(product.id)
        return;
    }
}