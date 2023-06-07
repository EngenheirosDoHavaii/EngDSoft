import { auth } from '../../services/firebase';
import { signOut, User } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Perfil() {
    const [user, setUser] = useState<User>({} as User);
    const navigate = useNavigate();

    function logOut() {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                console.log("User did log out");
                navigate("/signin");
            }  
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <div className="container">
        <h1>Perfil</h1>
            <div className="user">

            <h4>{auth.currentUser?.displayName}</h4>
            <h4>{auth.currentUser?.email}</h4>
            </div>

            <button type="button" onClick={logOut} className="button">
            Log Out
            </button>
        </div>
    )
}