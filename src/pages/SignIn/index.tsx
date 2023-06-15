import { useNavigate } from "react-router-dom";
import { Firebase } from "../../services/firebase";

export function SignIn() {
  const navigate = useNavigate();

  async function AuthenticatedUser() {
    const authenticatedUser = await Firebase.SignInWithGoogle();
    if (authenticatedUser != null) {
      navigate("/");
    }
  }

  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <button type="button" onClick={AuthenticatedUser} className="button">
        Sign In with Google
      </button>
    </div>
  );
}
