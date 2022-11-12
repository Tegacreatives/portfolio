import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Featured from "../components/featured/Featured";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = ({ data }) => {
  const projectsData = data.allSanityPost.nodes;

  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#line", {
      y: "0%",
      ease: "power4",
      delay: 1,
      duration: 1.2,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
      scrollTrigger:  {
        trigger: "#line",
        toggleActions: "play pause resume reset"
      }
    });

    gsap.from(".about-info", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-info",
        toggleActions: "play complete complete reset",
      },
    });

    ScrollTrigger.create({
      trigger: ".featured-section",
      start: "top 80%",
      toggleClass: { targets: "body", className: "body-active"},
    })
  }, []);
  return (
    <Layout data-scroll-container>
      <Hero />
      <About />
      <Featured projectsData={projectsData} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Tega Creatives</title>;

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        title
        brand
        mainImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
