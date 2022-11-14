import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  //menu button state
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  //disabled button state
  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }
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
        <button disabled={disabled} className="menu-open" onClick={handleMenu}>
          Menu
        </button>
      </div>
      <Hamburger state={state} handleMenu={handleMenu} disabled={disabled} />
    </div>
  );
};

export default Navbar;
