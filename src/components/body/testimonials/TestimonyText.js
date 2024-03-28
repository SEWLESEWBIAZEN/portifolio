import React from 'react'
import Stars from './Stars'

const TestimonyText = ({data}) => {
  return (
    <div className='container d-block m-auto text-center'>
       
       <h1 className='text-success '>"</h1> <i><h4>{data.description}</h4></i><h1 className='text-success'>"</h1>
      
        <Stars star={data.star}/>
    </div>
  )
}

export default TestimonyText