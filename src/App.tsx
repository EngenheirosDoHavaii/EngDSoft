import { SignIn } from "./pages/SignIn/SignIn";
import { Profile } from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import "./style/App.css"
import WithoutNav from "./components/WithoutNav";
import WithNav from "./components/WithNav";
import ProductListView from "./pages/Product List/ProductListView";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<WithNav />}>
          <Route
          path="/"
          element={
            <Protected>
              <ProductListView />
            </Protected>
          }
          />
          <Route path="/profile" element={<Profile />}/>
        </Route>
        
        <Route element={<WithoutNav />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        

      </Routes>
    </div>
  );
}
