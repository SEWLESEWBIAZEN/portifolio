import React from "react";
import "./footer.css";

const Links = () => {
  return (
    <div className="d-flex flex-xs-column flex-md-row  my-auto">
      <h5 className="text-warning text-center ms-3">Links</h5>      
      <div className="d-flex flex-xs-column flex-sm-row flex-wrap link mx-auto px-2 mt-0">
      <a  className="footer-links" href='#home'>Home </a>
      <a className="footer-links" href='#showcases'>Portifolios</a>
      <a className="footer-links" href='/about-me'>About Me </a>
      <a className="footer-links" href='/contact-me'>Contact Me </a>
      <a className="footer-links" href='#witnesses'>Testimonials</a>
    </div>
    </div>   
  );
};

export default Links;
