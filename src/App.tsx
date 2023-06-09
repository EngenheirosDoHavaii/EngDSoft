import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile';
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
          <Profile />
        </Protected>
      }
    />
    <Route path='/signin' element={<SignIn />} />
    </Routes>
    </div>
  );
}