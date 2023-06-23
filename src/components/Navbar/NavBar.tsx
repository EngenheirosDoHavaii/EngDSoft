
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/" className="mind"> Mind& </NavLink>

      <ul className="linkList">
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "clickedLink" : "")}>All Products</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? "clickedLink" : "")}>Register Products</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({isActive}) => (isActive ? "clickedLink" : "")}>Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;