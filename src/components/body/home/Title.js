import React from "react";
import { ReactTyped } from "react-typed";
import "./home.css";

const Title = () => {
  return (
    <div className="container f-new m-auto w-100 ">
      <h1>
        <ReactTyped
          className="typed-text"
          strings={["Hey! I am Sewlesew. Frontend developer!"]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </h1>
      <p>
        As a frontend developer, <br /> I have a 2 years of experience with
        latest technologies, <br />
        tools, frameworks and libraries...
      </p>
      <span class="collapse" id="collapseTitle">
        skills CSS3, HTML5, Git, React, Material UI, Bootstrap, Nodejs are all
        in-hand. Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </span>
      <button
        className="btn btn-success btn-outline-warning"
        type="button"
        data-toggle="collapse"
        data-target="#collapseTitle"
        aria-expanded="false"
        aria-controls="collapseTitle"
      >
        Read More...
      </button>
      <p>
        <b>Highly responsible to serve!</b>
      </p>     
    </div>
  );
};
export default Title;
