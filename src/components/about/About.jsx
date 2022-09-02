import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about" data-scroll-section>
      <div className="about-data">
        <h1 className="about-info">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </h1>
        <p className="about-text">
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
      </div>
      <a className="about-button" href="/contact">
        Contact me
      </a>
    </div>
  );
};

export default About;
