import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" data-scroll-section>
      <div className="about-data">
        <p className="about-info">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge. The
          combination of my passion for design, code & interaction positions me
          in a unique place in the web design world.
        </p>
        <p className="about-info">
          I strive for simplicity, clarity and originality in my work through
          designs where the role of every pixel is well thought and respected in
          development.
        </p>
      </div>
      <a className="about-button" href="/contact">
        Contact me
      </a>
    </section>
  );
};

export default About;
