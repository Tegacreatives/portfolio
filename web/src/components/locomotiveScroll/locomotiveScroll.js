import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll";

import { scroll } from "../../theme";

gsap.registerPlugin(ScrollTrigger);

const Scroll = (callbacks) => {
  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    });
    locomotiveScroll.update();

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", (func) => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction);
      ScrollTrigger.update();
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
