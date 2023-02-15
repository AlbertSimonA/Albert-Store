import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <img
              className="foot-img"
              src="https://images.squarespace-cdn.com/content/v1/54359450e4b0b0bd92ccad2a/1571206862567-Y4X4TRDXPZ87KEKBOG5O/albert-logo-darkblue.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex"></div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Near Cochin University, Kalamassery , Ernakulam </li>
              <li>Email:alabertstore@gmail.com </li>
              <li>Phone: +91 9633278766</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
