import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hamburger.css";

const Hamburger = ({ state }) => {
  //varaibles fot animating dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  //reveal menu background colors
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  //reveal menu links
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      opacity: 0,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  };

  //reveal menu info
  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  //links hover animation
  const hoverHandler = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power.inOut",
    });
  };

  //links exit hover animation
  const hoverExitHandler = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power.inOut",
    });
  };
  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li ref={(el) => (line1 = el)}>
                    <Link
                      onMouseEnter={(e) => hoverHandler(e)}
                      onMouseLeave={(e) => hoverExitHandler(e)}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li ref={(el) => (line2 = el)}>
                    <Link
                      onMouseEnter={(e) => hoverHandler(e)}
                      onMouseLeave={(e) => hoverExitHandler(e)}
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li ref={(el) => (line3 = el)}>
                    <Link
                      onMouseEnter={(e) => hoverHandler(e)}
                      onMouseLeave={(e) => hoverExitHandler(e)}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat debitis provident doloribus incidunt? Repellat
                  mollitia est porro possimus quos placeat aspernatur optio
                  vitae reprehenderit inventore itaque veritatis sequi tenetur
                  corporis facilis qui id quas, ab cumque, consequatur nemo
                  tempora. Unde quod beatae consectetur nihil fugit voluptatibus
                  vitae impedit officia cupiditate!
                </p>
              </div>
              <div className="socials">
                Socials:
                <span>Twitter</span>
                <span>Instagram</span>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
