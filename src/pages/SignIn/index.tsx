import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        if (user != null) {
          navigate('/');
        }
      }).catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className="container">

      <h1>Acesse sua conta</h1>

      <button type="button" onClick={signInWithGoogle} className="button">
        SignIn with Google
      </button>

    </div>
  )
}