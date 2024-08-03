import React from "react";
import Banner from "../../public/images/hero.png";
import amazone from "../../public/images/amazon.png";
import flipkart from "../../public/images/flipkart.png";
const HeroSection = () => {
  return (
    <>
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazone} alt="Amzone-Icon" width="60" height="40"/>
            <img src={flipkart} alt="FLipkart-Icon" width="60" height="40"/>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Banner} alt="Banner" width="300"/>
      </div>
    </main>
    </>
    
  );
};

export default HeroSection;
