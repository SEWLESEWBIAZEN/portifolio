import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Links = () => {
  return (
    <div className="d-block my-auto">
      <h5 className="text-warning links-label">Links</h5>      
      <div className="d-xs-block d-sm-flex flex-wrap link mx-auto px-2 mt-0">
      <Link to='./'>Home </Link>
      <Link to='./'>Portifolios</Link>
      <Link to='./'>About Me </Link>
      <Link to='/contact-me'>Contact Me </Link>
      <Link to='./'>Testimonials</Link>
    </div>
    </div>   
  );
};

export default Links;
