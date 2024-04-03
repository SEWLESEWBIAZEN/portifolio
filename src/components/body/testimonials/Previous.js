import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Previous = ({index,setIndex,data}) => {
  function previousClickHandler(){
    if(index===0){
      setIndex(data.length-1);
    }else{
      setIndex(index-1);
    }
  }
  
  return (
    <FontAwesomeIcon style={{cursor:'pointer'}} className="m-auto arrow-icon" onClick={previousClickHandler} icon={faArrowLeft} />
  )
}

export default Previous