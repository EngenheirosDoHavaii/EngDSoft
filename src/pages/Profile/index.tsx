import { Firebase } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddItemModal from "../../components/Modal/AddItemModal";

export function Profile() {
  const navigate = useNavigate();
  const auth = Firebase.GetAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log("User did log out");
        navigate("/signin");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  return (
    <div className="container">
      <h1>Perfil</h1>
      <div className="user">
        <h4>{auth.currentUser?.displayName}</h4>
        <h4>{auth.currentUser?.email}</h4>
      </div>
      <div>
        <button type="button" onClick={Firebase.LogOut} className="button">
          Log Out
        </button>
      </div>

      <div>
        <AddItemModal />
      </div>
    </div>
  );
}
