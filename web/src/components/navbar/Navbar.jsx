import React from "react";
import { Link } from "gatsby";
import { RiMenu2Fill } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  return (
    <div data-scroll-section>
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
        {/* mobile toogele navbar */}
        <div className="menu-open">
          <RiMenu2Fill size={25} />
        </div>
      </div>
      {/* mobile navbar */}
    </div>
  );
};

export default Navbar;
