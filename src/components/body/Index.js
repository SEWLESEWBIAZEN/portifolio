import React from "react";

// local component import
import Home from "./home/Index";
import Services from "./servicesection/Index";
import Testimonials from "./testimonials/Index";

const Index = () => {
  return (
    <div className="pb-4 px-3">
      <Home />
      <hr />
      <Services />
      <hr className="text-success" />
      <Testimonials />
    </div>
  );
};

export default Index;
