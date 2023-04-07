import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8bd9jqq', 'template_w7kwfd4', form.current, 'g0baTI_P-b4KLXTkf')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
         <div className="contact__options">
                   <article className="contact__option">
                    <MdOutlineMail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>adewoyeadedayo@gmail.com</h5>
                    <a href='mailto:adewoyeadedayo@gmail.com'  target='_blank'>Send a message</a>
                   
                   </article>
                   <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon"/>
                    <h4>Messenger</h4>
                    <h5>Fidel Wole</h5>
                    <a href='https://m.me/fidelwole'  target='_blank'>Send a message</a>
                   
                   </article>
                   <article className="contact__option">
                    <FaWhatsapp className="contact__option-icon"/>
                    <h4>Whatsapp</h4>
                    <h5>+2347057586871</h5>
                    <a href='https://api.whatsapp.com/send?phone=+2347057586871' target='_blank'>Send a message</a>
                   
                   </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button> 
         </form>
      </div>
    </section>
  )
}

export default Contact