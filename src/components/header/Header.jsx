import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import HeaderSocial from './Headersocials'
const Header = () => {
  return (
<header>
  <div className="container header_container">
    <h5>Hello i'm</h5>
    <h2>Adewoye Adewole</h2>
    <h5 className="text-light">
      Fullstack Developer
    </h5>
    <CTA />
    <HeaderSocial/>
    <div className="me">
      <img src={ME} alt=""/>
    </div>
    <a href="#contact" className='scroll_down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header