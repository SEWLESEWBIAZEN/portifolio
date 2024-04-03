import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Next = ({index,setIndex,data}) => {
  function nextClickHandler(){
    if(index===data.length-1){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  return (
    <FontAwesomeIcon style={{cursor:'pointer'}} className="m-auto arrow-icon" icon={faArrowRight} onClick={nextClickHandler} />
  )
}

export default Next