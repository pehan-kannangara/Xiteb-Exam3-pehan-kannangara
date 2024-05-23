import React from "react";
import img1 from "../../Pics/p1.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-content">
        <h5>L O G I S T I C</h5>
        <h1>
          Best Shipping <br />
          <span>Partner</span>
        </h1>
        <p>
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis
          posuere maecenas. Molestie lobortis posuere maecenas. Eget sapien,
          gravida nequi.
        </p>
        <button className="discover-btn">DISCOVER MORE</button>
      </div>
      <div className="image-content">
        <img src={img1} alt="Shipping" />
        <div className="overlay-text">#CARGOTON LOGISTIC</div>
      </div>
      <div className="slider-navigation">
        <span>2 / 2</span>
        <div className="arrows">
          <button className="prev-arrow">←</button>
          <button className="next-arrow">→</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
