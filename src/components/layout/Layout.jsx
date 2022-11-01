import React from "react";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import Scroll from "../locomotiveScroll/locomotiveScroll";
import "../locomotiveScroll/locomotive-scroll.css";

const Layout = ({ children, location }) => {
  return (
    <div>
      <Scroll callbacks={location} />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
