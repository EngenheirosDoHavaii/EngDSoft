// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { DocumentReference, Timestamp, getFirestore, orderBy, query, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import Product from "../interfaces/Product";
import UserType from "../interfaces/UserType";

export class Firebase {
  private static firebaseConfig = {
    apiKey: "AIzaSyCVTd6q0xT6MoKynsc2Grysvx_uSvN7D74",
    authDomain: "mind-48c91.firebaseapp.com",
    projectId: "mind-48c91",
    storageBucket: "mind-48c91.appspot.com",
    messagingSenderId: "600356704496",
    appId: "1:600356704496:web:0cd835c16ad0a9f2fc7235",
    measurementId: "G-F9270S9XDD",
  };
  private static app = initializeApp(this.firebaseConfig);
  private static db = getFirestore(this.app);
  private static auth = getAuth(this.app);

  public static async SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(Firebase.auth, provider).then(
      (result) => result.user
    );
  }

  public static GetAuth() {
    return Firebase.auth;
  }

  public static LogOut() {
    signOut(Firebase.auth);
  }

  public static async isUserInDatabase(userID: string) {
    const usersList = await getDocs(collection(Firebase.db, "users"));

    for (let user of usersList.docs) {
      if (userID === user.data().uid) {
        return true;
      }
    }
    return false;
  }

  public static async addUser(user: User) {
    const userInDB = await Firebase.isUserInDatabase(user.uid);

    if (!userInDB) {
      const newUser: UserType = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };
      await addDoc(collection(Firebase.db, "users"), newUser);
    }

    return;
  }

  public static async AddProduct(item: Product) {
    const docRef = await addDoc(collection(Firebase.db, "products"), item);
    await updateDoc(docRef, { timestamp: Timestamp.fromMillis(Date.now()) });
    return docRef.id;
  }

  public static async getProducts() {
    const collectionRef = collection(Firebase.db, "products");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const productsSnapshot = await getDocs(q);
    const productsList = productsSnapshot.docs.map((doc) => {
      const data = doc.data();
      const newData: Product = {
        name: data.name,
        description: data.description,
        id: doc.ref,
        email: data.email,
      };
      return newData;
    });
    return productsList;
  }

  public static async getUserProducts() {
    let productsList = await Firebase.getProducts();
    const userProducts = productsList.filter(
      (product) => product.email === this.auth.currentUser?.email
    );
    return userProducts;
  }

  public static async deleteUserProduct(product: Product) {
    await deleteDoc(product.id as DocumentReference<unknown>)
    return;
  }
}
