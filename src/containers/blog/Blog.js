import React from 'react'
import './blog.css'
import { Article } from '../../components'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog__main section__padding' id='blog'>

      <div className='blog__container1-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='blog__container2'>

        <div className='blog__container2-bigArticle'>
        <Article img={blog01} text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>

        <div className='blog__container2-smallArticle'>
        <Article img={blog02} text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        <Article img={blog03} text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        <Article img={blog04} text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        <Article img={blog05} text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
