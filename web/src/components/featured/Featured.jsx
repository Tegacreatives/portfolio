import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./featured.css";

const Featured = ({ projectsData }) => {
  return (
    <section className="featured-section" data-scroll-section>
      <h1 className="featured-title">Works</h1>
      {projectsData.map((project) => (
        <div key={project.title} className="section-container">
          <div className="container">
            <figure className="figure">
              <div className="img-placeholder">
                <GatsbyImage
                  image={project.mainImage.asset.gatsbyImageData}
                  alt={project.title}
                />
              </div>
              <p className="title">{project.title}</p>
              <div className="label">
                <div className="serial">No.1</div>
                <div className="text">{project.brand}</div>
              </div>
            </figure>
          </div>
          <div className="mobile-container">
            <figure className="mobile-figure">
              <div className="img-placeholder">
                <GatsbyImage
                  image={project.mainImage.asset.gatsbyImageData}
                  alt={project.title}
                />
              </div>
              <p className="title">{project.title}</p>
              <div className="label">
                <div className="serial">No.1</div>
                <div className="text">{project.brand}</div>
              </div>
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Featured;
