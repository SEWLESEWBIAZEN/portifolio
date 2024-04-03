import React, { useState } from "react";
import TestimonyPicture from "./TestimonyPicture";
import TestimonyText from "./TestimonyText";
import "./index.css";
import Previous from "./Previous";
import Next from "./Next";
import tData from "./Testimonials";

const Index = () => {
  const data = tData;
  const [index, setIndex] = useState(0);

  return (
    <section id="witnesses" >
    <div className="d-block">
      <h3 className="text-center">TESTIMONIALS</h3>
      <div className="d-xs-block d-sm-flex">
        <Previous index={index} setIndex={setIndex} data={data} />
        <div className="container container-testimonial d-xs-block d-sm-flex mb-4 p-4">
          <TestimonyPicture style={{cursor:'pointer'}} image={data[index].picture} name={data[index].name} />
          <TestimonyText data={data[index]} />
        </div>
        <Next index={index} setIndex={setIndex} data={data} />
      </div>
    </div>
    </section>
  );
};

export default Index;
