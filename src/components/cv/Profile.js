import React from 'react'
import pimg from '../../assets/images/Ericson.jpg'
import './cv.css'

const Profile = () => {
  return (
    <div className='profile'>
      <img className="profile-image" src={pimg} width={150} height={150}/>
      <h5> </h5>
    </div>
  )
}

export default Profile