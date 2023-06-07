import { SignIn } from './pages/SignIn';
import { Perfil } from './pages/Perfil';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';

export default function App() {
  return (
    <div>
    <Routes>
    <Route
      path='/'
      element={
        <Protected>
          <Perfil />
        </Protected>
      }
    />
    <Route path='/signin' element={<SignIn />} />
    </Routes>
    </div>
  );
}