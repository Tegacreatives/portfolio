import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" data-scroll-section>
      <h2>
        <span id="line">Creative</span>
      </h2>
      <h2 className="middle">
        <span id="line">Front-End</span>
      </h2>
      <h2>
        <span id="line">Developer</span>
      </h2>
    </section>
  );
};

export default Hero;
