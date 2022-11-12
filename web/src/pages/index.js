import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

import { gsap } from "gsap";
import Featured from "../components/featured/Featured";

const IndexPage = ({data}) => {
  const projectsData = data.allSanityPost.nodes
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
    });
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
