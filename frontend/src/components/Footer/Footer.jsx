import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>We love hearing from our customers! Feel free to reach out with any questions, suggestions, or just to say hello. Your feedback helps us serve you better!</p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+1-123-456-789</li>
                <li>contact@tomato.com</li>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2024 @Tomato.com - All Rights Reserved
        </p>
    </div>
  )
}
import './Footer.css'
import { assets } from '../../assets/assets'

export default Footer
