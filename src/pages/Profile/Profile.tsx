import { Firebase } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddItemModal from "../../components/Modal/AddItemModal";
import profilePic from "../../images/profile-pic-mock.jpg"
import "./Profile.css"

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
    <div className="container-profile">
      <div className="profile-content">

        <div className="profile-header">

          <div className="top-header">
            <img src={profilePic} alt="user profile" className="profile-pic"></img>
            <button type="button" onClick={Firebase.LogOut} className="button-profile">
              Log Out
            </button>
          </div>
          
          <div className="user-profile-text">
            <div className="user-name">{auth.currentUser?.displayName}</div>
            <div className="user-date"> Created in: day, month year</div>
            <div className="user-email">{auth.currentUser?.email}</div>
          </div>

        </div>

        <hr></hr>

        <div className="add-item-button">
          <AddItemModal />
        </div>
        

          
      </div>
      

      
    </div>
  );
}
