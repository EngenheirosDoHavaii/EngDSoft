import { useNavigate } from "react-router-dom";
import { Firebase } from "../../services/firebase";
import "./SignIn.css";

export function SignIn() {
  const navigate = useNavigate();

  async function AuthenticatedUser() {
    try {
      const authenticatedUser = await Firebase.SignInWithGoogle();
      if (authenticatedUser != null) {
        await Firebase.addUser(authenticatedUser);
        navigate("/");
      }
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("User dismissed the popup");
      }
    }
  }
  return (
    <div className="container-signin">
      <h1>MIND&</h1>
      <div className="content-container">
        <div className="text">
          <h2>Don't throw away, give it to someone!</h2>
          <p>
            In our community you can find a new home for things you no longer
            need.
          </p>
        </div>
        <div className="access">
          <h3>Access your account:</h3>
          <button
            type="button"
            onClick={AuthenticatedUser}
            className="button-signin"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
