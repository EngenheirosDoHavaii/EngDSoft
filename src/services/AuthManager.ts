import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { FirebaseConfig } from "../services/FirebaseConfig";
  
export class AuthManager {
    private static instance: AuthManager

    public static getInstance(): AuthManager {
        if (!AuthManager.instance) {
            AuthManager.instance = new AuthManager();
        }

        return AuthManager.instance;
    }

    public static async SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

        return signInWithPopup(FirebaseConfig.getInstance().auth, provider).then(
        (result) => result.user
        );
    }

    public static GetAuth() {
        return FirebaseConfig.getInstance().auth;
    }

    public static LogOut() {
        signOut(FirebaseConfig.getInstance().auth);
    }
  
}