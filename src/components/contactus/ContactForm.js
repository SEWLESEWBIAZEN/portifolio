import React, { useState } from 'react';
import './contactus.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="my-2 mx-auto d-block">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className='form-control form-contact '>
        <div className="mb-3 d-block">
          <label htmlFor="name" className="form-label mb-0">Name</label>
          <input type="text" className="form-control" id="name" name="name" 
          value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label mb-0">Address</label>
          <input type="text" className="form-control" id="address" name="address" 
          value={formData.address} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label mb-0">Email</label>
          <input type="email" className="form-control" id="email" name="email" 
          value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label mb-0">Message</label>
          <textarea className="form-control" id="message" name="message" rows="5"
           value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-success btn-outline-warning">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
