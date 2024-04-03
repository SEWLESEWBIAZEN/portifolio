import React from 'react'
import ContactAddress from './ContactAddress'
import ContactForm from './ContactForm'
import './contactus.css'

const Index = () => {
  return (
    <div className='d-xs-block d-sm-flex container container-contactus'>
        <ContactAddress/>
        {/* <ContactForm/>         */}
    </div>
  )
}

export default Index