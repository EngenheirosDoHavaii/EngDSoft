import { Timestamp, orderBy, query, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { ItemEntity } from "../entity/item-entity";
import Product from "../interfaces/Product";
import UserType from "../interfaces/UserType";
import { FirebaseConfig } from "../services/FirebaseConfig";
import {
    User,
  } from "firebase/auth";

export class FirestoreManager {
    static instance = new FirestoreManager()

    public static async isUserInDatabase(userID: string) {
        const usersList = await getDocs(collection(FirebaseConfig.instance.db, "users"));
    
        for (let user of usersList.docs) {
          if (userID === user.data().uid) {
            return true;
          }
        }
        return false;
    }
    
      public static async addUser(user: User) {
        const userInDB = await this.isUserInDatabase(user.uid);
    
        if (!userInDB) {
          const newUser: UserType = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          };
          await addDoc(collection(FirebaseConfig.instance.db, "users"), newUser);
        }
    
        return;
      }
    
      public static async AddProduct(item: ItemEntity) {
        const docRef = await addDoc(collection(FirebaseConfig.instance.db, "products"), item);
        await updateDoc(docRef, {timestamp: Timestamp.fromMillis(Date.now())});
        return docRef.id;
      }
    
      public static async getProducts() {
        const collectionRef = collection(FirebaseConfig.instance.db, "products")
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
    
      public static async getUserProducts() {
        let productsList = await this.getProducts();
        const userProducts = productsList.filter(
          (product) => product.email === FirebaseConfig.instance.auth.currentUser?.email
        );
        return userProducts;
      }
      
      public static async deleteUserProduct(product: Product) {
        await deleteDoc(product.id)
        return;
      }
}