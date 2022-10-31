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
    name: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Ikea'
  },
  {
    id: '3',
    name: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    brand: 'Ikea'
  },
  {
    id: '4',
    name: 'Ecommerce',
    image: '',
    brand: 'Ikea'
  }
]

const Featured = () => {
  return <div className="featured-section" data-scroll-section>
    <h1>Works</h1>
    {
      workData.map((item) => (
        <div className="project-items" key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" />
        </div>
      ))
    }
  </div>;
};

export default Featured;
