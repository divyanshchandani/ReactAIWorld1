import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer__main section__padding'>

      <div className='footer__container1-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='footer__container2-button'>
        <p>Request Early Access</p>
      </div>

      <div className='footer__container3-links'>

        <div className='footer__container3-links__logo'>
          <img src={logo} alt='Logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='footer__container3-links__div1'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='footer__container3-links__div2'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='footer__container3-links__div3'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>

      </div>

      <div className='footer__container4'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
