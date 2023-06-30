import { Navigate } from "react-router-dom";
import { AuthManager } from "../services/AuthManager";

interface Params {
  children: JSX.Element;
}

const Protected = ({ children }: Params) => {
  const auth = AuthManager.getInstance().GetAuth();
  if (auth.currentUser == null) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default Protected;
