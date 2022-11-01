import React from "react";
import "./featured.css";


const workData = [
  {
    id: '1',
    name: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Ikea'
  },
  {
    id: '2',
    name: 'CRM',
    image: 'https://images.unsplash.com/photo-1667222886295-72267cdc99ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Upwork'
  },
  {
    id: '3',
    name: 'Tracker',
    image: 'https://images.unsplash.com/photo-1666974993470-d1116c9667e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Emergency'
  },
  {
    id: '4',
    name: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1571292388502-66711f403cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Viralbase'
  }
]

const Featured = () => {
  return <section className="featured-section" data-scroll-section>
    <h1>Works</h1>
    {
      workData.map((item) => (
        <section className="section-container">
        <div class="container">
            <figure class="figure">
                <div class="img-placeholder"><img src={item.image} alt="" /></div>
                <p class="title">{item.name}</p>
                <div class="label">
                    <div class="serial">No.1</div>
                    <div class="text">Retro</div>
                </div>
            </figure>
        </div>
        <div className="mobile-container">
        <figure class="mobile-figure">
                <div class="img-placeholder"><img src={item.image} alt="" /></div>
                <p class="title">{item.name}</p>
                <div class="label">
                    <div class="serial">No.1</div>
                    <div class="text">Retro</div>
                </div>
            </figure>
        </div>
    </section>
      ))
    }
  </section>;
};

export default Featured;
