import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-white text-white border-0">
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-primary">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-danger   ">
              CHECK OUT ALL THE TRENDS
            </p>      
          </div>      
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
