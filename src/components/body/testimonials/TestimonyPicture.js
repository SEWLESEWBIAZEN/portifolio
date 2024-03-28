import React from 'react'
//import PIMG from '../home/profile.jpg'

const TestimonyPicture = ({image,name}) => {
  return (
    <div className='m-auto d-block'>
      <img className='pimg' src={image} width={100} height={100} alt='Profile Image'></img>
      <h6>{name}</h6>
      </div>
  )
}

export default TestimonyPicture