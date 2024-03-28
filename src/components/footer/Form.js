import React from 'react'

const Form = () => {
  return (
    <form className='form-control form m-auto'>
       <label className='text-black mt-3 form-group'> Telephone N.:</label>
       <input type='tel' className='form-input m-3' placeholder='Type your number and hit the button..' required></input> <br/>
       <button type='submit' className='btn btn-success btn-outline-warning'> Subscribe</button>
    </form>
  )
}

export default Form