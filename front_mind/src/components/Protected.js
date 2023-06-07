import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebase';

const Protected = ({ children }) => {
  if (auth.currentUser == null) {
    return <Navigate to='/signin' />;
  } 
  return children;
};

export default Protected;