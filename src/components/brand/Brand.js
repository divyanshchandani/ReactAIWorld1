import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './brand.css'


const Brand = () => {
  return (
    <div className='brand__main section__padding'>
      <div>
        <img src={google} alt='Google' />
      </div>

      <div>
        <img src={slack} alt='Slack' />
      </div>

      <div>
        <img src={atlassian} alt='Atlassian' />
      </div>

      <div>
        <img src={dropbox} alt='Dropbox' />
      </div>

      <div>
        <img src={shopify} alt='Shopify' />
      </div>
      
    </div>
  )
}

export default Brand
