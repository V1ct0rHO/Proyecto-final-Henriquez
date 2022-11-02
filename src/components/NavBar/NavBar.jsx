import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">Tu Mascota </Link>
        <Link to="/category/alimentos">Alimentos</Link>
        <Link to="/category/juguetes">Juguete</Link>
        <Link to="/category/cuidados">Cuidados</Link>
      
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar;
