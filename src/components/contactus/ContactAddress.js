import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./contactus.css";
import ContactItem from "./ContactItem";

const ContactAddress = () => {
  return (
    <div className="d-block my-auto">

      {/* Phone information */}
      <ContactItem 
      title="Call Me" 
      icon={ <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faPhone} />  }
      description="+251 947 367 528, +251 961 718 044"/>  

          {/*Location Information  */}
      <ContactItem 
      title="Location" 
      icon={ <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faMapMarkerAlt} />  }
      description=" Mesalemiya, Kotebe, Yeka ,Addis Ababa, Ethiopia"/>   

         {/*working hours information  */}
      <ContactItem 
      title="Available At:" 
      icon={ <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faClock} /> }
      description=" Monday --Sunday from 24 Hrs online"/>      

      {/* Email address information */}
      <ContactItem 
      title="Email Address" 
      icon={ <FontAwesomeIcon className='my-auto me-3'  size="2x" color="darkgreen" icon={faEnvelope} />  }
      description="sewlesewbiazen65@gmail.com"/>      
      
  </div>
  );
};

export default ContactAddress;
