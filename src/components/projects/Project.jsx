import React from 'react'
import './projects.css'

const Project = ({githubLink, websiteLink,description,name,imgUrl}) => {
  return (
<div className="card m-3 project-item col-xs-3 col-md-5 rounded-2">
  <img className="card-img-top rounded-3 img-fluid " src={imgUrl} alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text text-left">{description}</p>    
    <a onClick={ ()=>(window.open(websiteLink, '_blank', 'noopener,noreferrer'))}className="btn btn-success me-3">Live</a>
    <a onClick={()=>(window.open(githubLink, '_blank', 'noopener,noreferrer'))} className="btn btn-outline-success">Code</a>  
  </div>
</div>
  )
}

export default Project