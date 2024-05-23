import React from "react";
import fb from "../../Pics/fb.png";
import img10 from "../../Pics/p10.png";
import twitter from "../../Pics/twitter.png";
import venmo from "../../Pics/venmo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>Weekly Newsletter</h2>
          <p>There are many variations of passages of lorem ipsum available.</p>
        </div>
        <div className="newsletter-subscribe">
          <input type="email" placeholder="Enter Your Mail" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <i className="fa fa-phone"></i> (+94) 11 434 7575
          </p>
          <p>
            <i className="fa fa-map-marker"></i> 42 Lily Ave, Colombo 00600
          </p>
        </div>
        <div className="footer-section customer-service">
          <h3>Latest News</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <p>5 Minutes Ago</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <p>5 Minutes Ago</p>
        </div>
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <p>Support Forums</p>
          <p>Communication</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Rules & Condition</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-section customer-images">
          <h3>Customer Service</h3>
          <div className="images">
            <img src={img10} alt="Icons" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 All Rights Reserved. Site By Xiteb®</p>
        <div className="footer-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://venmo.com" target="_blank" rel="noopener noreferrer">
            <img src={venmo} alt="Venmo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
