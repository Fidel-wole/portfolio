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
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
        </ul>
       </article>
       <article className='services'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
        </ul>
       </article>
       <article className='services'>
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
         
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
          <li><HiCheck className='service__list-icons' /> 
          <p>Lorem Nam undmpore. Perferendis nesciunt id dicta moll</p>
          </li>
        </ul>
       </article>
     </div>
   </section>
  )
}

export default Services