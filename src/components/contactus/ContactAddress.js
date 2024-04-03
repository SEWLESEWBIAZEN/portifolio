import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./contactus.css";

const ContactAddress = () => {
  return (
    <div className="d-block my-auto">
      <div className="d-block address-item mb-4">
        <div className="d-flex">
        <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faPhone} />       
        <h3 className="icon-text">Call Me</h3>
        </div>
        <p className="icon-value ms-4">
            +251 947 367 528, +251 961 718 044
        </p>
      </div>
      <hr />
      <div className="d-block address-item mb-4">
        <div className="d-flex">
        <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faMapMarkerAlt} />
        {/* Location icon */}
        <h3 className="icon-text">Location</h3>
        </div>
        <p className="icon-value ms-4">
            Mesalemiya, Kotebe, Yeka ,Addis Ababa, Ethiopia
        </p>
      </div>
      <hr />
      <div className="d-block address-item mb-4">
        <div className="d-flex">
        <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faClock} />
        {/* Location icon */}
        <h3 className="icon-text">Available At:</h3>
        </div>
        <p className="icon-value ms-4">
        Monday --Sunday from 24 Hrs online
        </p>
      </div>
      <hr />
      <div className="d-block address-item mb-4">
        <div className="d-flex">
        <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faEnvelope} />
        {/* Location icon */}
        <h3 className="icon-text">Email Address:</h3>
        </div>
        <p className="icon-value ms-4">
           sewlesewbiazen65@gmail.com
        </p>
      </div>   
     
    </div>
  );
};

export default ContactAddress;
