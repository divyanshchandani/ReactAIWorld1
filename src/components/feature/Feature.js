import React from 'react'
import './feature.css'

const Feature = ({ title, text }) =>{
  return (
    <div className='feature__main'>

      <div className='feature__heading'>
        <div className='gradient__bar'/>
        <h1>{title}</h1>
      </div>

      <div className='feature__text'>
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Feature
