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

    public async SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

        return signInWithPopup(FirebaseConfig.getInstance().auth, provider).then(
        (result) => result.user
        );
    }

    public GetAuth() {
        return FirebaseConfig.getInstance().auth;
    }

    public getUserEmail() {
        return FirebaseConfig.getInstance().auth.currentUser?.email;
    }

    public LogOut() {
        signOut(FirebaseConfig.getInstance().auth);
    }
  
}