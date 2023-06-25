// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc,  getDocs} from "firebase/firestore";
import { ItemEntity } from "../entity/item-entity";
import Product from "../interfaces/Product";


export class Firebase  {
  private static firebaseConfig = {
    apiKey: "AIzaSyCVTd6q0xT6MoKynsc2Grysvx_uSvN7D74",
    authDomain: "mind-48c91.firebaseapp.com",
    projectId: "mind-48c91",
    storageBucket: "mind-48c91.appspot.com",
    messagingSenderId: "600356704496",
    appId: "1:600356704496:web:0cd835c16ad0a9f2fc7235",
    measurementId: "G-F9270S9XDD"
  };
  private static app = initializeApp(this.firebaseConfig);
  private static db = getFirestore(this.app);
  private static auth = getAuth(this.app);

  public static SignInWithGoogle() {
    const provider = new GoogleAuthProvider();
  
    return signInWithPopup(Firebase.auth, provider)
      .then((result) => result.user)
  }

  public static GetAuth() {
    return Firebase.auth;
  }

  public static LogOut() {
    signOut(Firebase.auth);
  }

  public static async AddProduct(item: ItemEntity) {
    const docRef = await addDoc(collection(Firebase.db, "products"), item);

    return docRef.id;
  }

  public static async getProducts() {
    const productsSnapshot = await getDocs(collection(Firebase.db, "products"));
    const productsList = productsSnapshot.docs.map(doc => { 
      const data = doc.data()
      const newData: Product = {
        name: data.title,
        description: data.description,
        id: doc.id, 
        email: data.email 
      }
      return newData
    });
    return productsList
  }
}