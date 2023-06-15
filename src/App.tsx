import React, { useState, useEffect } from "react";
import "./style/App.css";
import FooterView from "./components/NavBar/FooterView";
import NavBar from "./components/NavBar/NavBar";
import ProductListView from "./components/Products/ProductListView";
import RegisterProductView from "./components/RegisterProduct/RegisterProductView";
import ProfileView from "./components/Profile/ProfileView";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
        <Routes>
          <Route path="/" element={<ProductListView />} />
          <Route path="/register" element={<RegisterProductView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
        </div>
        <FooterView/>
      </BrowserRouter>
    </div>
  );
}

export default App;
