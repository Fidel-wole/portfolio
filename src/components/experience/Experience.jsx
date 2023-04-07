import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
            <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icons'/ >
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>   
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>

                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience__backend">
            <h3>Backend Development</h3>
              <div className="experience__content">
              <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icons'/ >
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                  </div>   
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experence__details-icons' / >
                <div>
                  <h4>Laravel</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Intermidiate</small>

                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>MYSQl</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icons'/ >
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Basic</small>
                  </div>
                </article>
             
              </div>
            </div>
      </div>
    </section>
  )
}

export default Experience