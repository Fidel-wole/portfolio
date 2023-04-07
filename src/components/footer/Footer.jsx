import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>FIDELWOLE</a>
    <ul className='permalinks'>
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experience'>Experiences</a></li>
<li><a href='#service'>Services</a></li>
<li><a href='#portfolio'>Portfolio</a></li>
<li><a href='#testimonials'>Testimonials</a></li>
<li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer_socials'>
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://instagram.com'><AiFillInstagram/></a>
      <a href='https://twitter.com'><AiOutlineTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Fidel Wole, All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer