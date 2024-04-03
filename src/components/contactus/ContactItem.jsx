import React from 'react'

const ContactItem = ({icon,title, description}) => {
  return (
    <div className="d-block address-item mb-4">
        <div className="d-flex">
        {icon}       
        <h3 className="icon-text">{title}</h3>
        </div>
        <p className="icon-value ms-4">
           {description}
        </p>
        <hr />
      </div>
  )
}

export default ContactItem