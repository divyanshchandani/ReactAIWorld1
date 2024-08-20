import React from 'react'
import './article.css'

const Article = ({img, text}) => {
  return (
    <div className='article__main'>

      <div className='article__container1-image'>
        <img src={img} alt='Image' />
      </div>

      <div className='article__container2'>

        <div className='article__container2-content1'>
        <p>Sep 26, 2021</p>
        <h3>{text}</h3>
        </div>

        <div className='article__container2-content2'>
          <p>Read Full Article</p>
        </div>

      </div>
      
    </div>
  )
}

export default Article
