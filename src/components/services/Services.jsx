import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'
const Services = () => {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
     <div className="container services__container">
       <article className='services'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li><HiCheck className='service__list-icons' /> 
          <p>Building user-friendly and responsive user interface</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Creating server-side logic, databases and APIs to support dynamic web applications</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Building online stores, shopping carts, and payments gateways or e-commerce businesses</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Setting up hosting environment and deploying websites or web applications</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Implementing secrity measures to protect to protect websites and applications from threat and vulnerabiities</p>
          </li>
        </ul>
       </article>
     </div>
   </section>
  )
}

export default Services