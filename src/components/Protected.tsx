import { Navigate } from "react-router-dom";
import { Firebase } from "../services/firebase";

interface Params {
  children: JSX.Element;
}

const Protected = ({ children }: Params) => {
  const auth = Firebase.getInstace().GetAuth();
  if (auth.currentUser == null) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default Protected;
