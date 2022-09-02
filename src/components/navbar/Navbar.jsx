import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav" data-scroll-section>
      <div className="logo">Tega Creatives</div>
      <ul>
        <li>
          <Link to="/projects">Projects.</Link>
        </li>
        <li>
          <Link to="/contact">Contact.</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
