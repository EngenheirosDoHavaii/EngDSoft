import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { FirebaseConfig } from "../services/FirebaseConfig";
  
export class AuthManager {
    static instance = new AuthManager()

    public static async SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

        return signInWithPopup(FirebaseConfig.instance.auth, provider).then(
        (result) => result.user
        );
    }

    public static GetAuth() {
        return FirebaseConfig.instance.auth;
    }

    public static LogOut() {
        signOut(FirebaseConfig.instance.auth);
    }
  
}