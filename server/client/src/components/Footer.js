import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h4>Contact Us</h4>
            <p>This is a footer</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h4>Follow Us</h4>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          (c) SevaFund. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
