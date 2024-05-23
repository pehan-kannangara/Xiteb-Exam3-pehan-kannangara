import React from "react";
import img3 from "../../Pics/p3.png";
import img4 from "../../Pics/p4.png";
import "./OurServices.css";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="our-services-header">
        <p className="solution-text">Real Solution, Real Fast!</p>
        <h2>Best Global Logistics Solutions.</h2>
      </div>
      <div className="services-container">
        <div className="service-card">
          <img src={img3} alt="Air Freight Services" />
          <div className="service-content">
            <h3>Air Freight Services</h3>
            <p>
              At our Auto Service garage, we fully appreciate how difficult it
              is for people to find.
            </p>
            <a href="/" className="read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="service-card">
          <img src={img4} alt="Drone Services" />
          <div className="service-content">
            <h3>Drone Services</h3>
            <p>
              These are unique and often they differ from one industry to the
              other. Our logistics expertise.
            </p>
            <a href="/" className="read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
      <p className="footer-text">
        Logistic & Transport Solutions Saves Your Time.{" "}
        <a href="/Solutions" className="read-more">
              Find Your Solutions
            </a>
      </p>
    </section>
  );
};

export default OurServices;
