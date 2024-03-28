import React, { useState } from "react";
import "./index.css";
import { ReactTyped } from "react-typed";

const CardItem = ({
  cards,
  showReact,
  showBootstrap,
  showMaterialUI,
  setShowMaterialUI,
  setShowReact,
  setShowBootstrap,
}) => {

    function githubOpner(link){
        window.open(link, '_blank', 'noopener,noreferrer')        
    }
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("Learn More...");

  function btnClickHandler(e,index) {
    setShow(!show);
    show && e ? setBtnText("Learn More...") : setBtnText("Learn Less...");   

    if (index === 0) {
      setShowReact(!showReact);
      setShowBootstrap(false);
      setShowMaterialUI(false);
    }
    if (index === 1) {
      setShowMaterialUI(!showMaterialUI);
      setShowReact(false);
      setShowBootstrap(false);
    }
    if (index === 2) {
      setShowBootstrap(!showBootstrap);
      setShowReact(false);
      setShowMaterialUI(false);
    }
  }

  // const buttons=document.querySelectorAll('button')
  //  buttons.forEach(button=>{
  //   button.addEventListener('click',(event)=>{
  //     if(this.btnText==="Learn More..."){
  //       this.setBtnText="Learn Less..."
  //     }
  //     else if(btnText==="Learn Less..."){
  //       setBtnText("Learn More...")
  //     }
      

  //   })
  //  })

  return (
    <div className="d-xs-block d-md-flex justify-content-center mx-auto mb-3 card-hover">
      {cards.map((card, index) => (
        <div key={index} className="card container m-3 ">
          <div className="card-image my-3">
            <img
              maxWidth={350}
              maxHeight={200}
              className="img-fluid cimg"
              src={card.image}
            />
            <p className="overlay-text">
              <ReactTyped
                className="typed-text"
                strings={[card.overlayText]}
                backSpeed={30}
                typeSpeed={30}
                loop
              />
            </p>
          </div>
          <div className="card-text card-description">
            <p>
              {card.description}
              {card.show ? card.togglableText : "..."}
            </p>
          </div>
          <button
            className="btn btn-success btn-outline-warning"
            onClick={(e) => btnClickHandler(e,index)}>
            {btnText}
          </button>
          <a
          className="text-center mx-auto my-3"
            onClick={()=>githubOpner(card.githubLink)}>
            Find on Github
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
