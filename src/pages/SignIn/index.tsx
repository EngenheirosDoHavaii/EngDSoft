import { useNavigate } from "react-router-dom";
import { Firebase } from "../../services/firebase";
import "./SignIn.css"

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
      <h1>MIND&</h1>
      <div className="content-container">
        <div className="text">
          <h3>Don't throw away, give to someone!</h3>
          <p>In our community you can find a new home for things you no longer need.</p>
        </div>
        <div className="access">
          <h2>Acesse sua conta</h2>
          <button type="button" onClick={AuthenticatedUser} className="button">
            Sign In with Google
          </button>
        </div>
        
      </div>
      
    </div>
  );
}
