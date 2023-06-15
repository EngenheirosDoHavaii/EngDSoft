import { SignIn } from "./pages/SignIn";
import { Profile } from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
