import React from "react";
import img2 from "../../Pics/p2.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-image">
        <img src={img2} alt="Worker handling logistics" />
        <div className="clients-info">
          <h3>15,350+</h3>
          <p>Clients Worldwide</p>
        </div>
      </div>
      <div className="welcome-content">
        <h2>
          TransMax Logistics <br />
          Around <span>the World</span>
        </h2>
        <p>
          Transmax is the world's driving worldwide coordinations supplier — we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
        </p>
        <p>
          Our worth added administrations guarantee the progression of products
          proceeds consistently and supply chains stay lean and streamlined for
          progress.
        </p>
        <button className="more-about-us">More About Us</button>
      </div>
    </section>
  );
};
export default Welcome;
