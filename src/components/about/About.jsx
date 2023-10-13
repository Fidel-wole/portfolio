import React from 'react'
import './about.css'
import MeAbout from '../../assets/me.JPG'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
<h5>Get to know</h5>
<h2>About Me</h2>
<div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
       <img src={MeAbout} alt="About Image"/>
      </div>
    </div>
    <div className="about__content">
       <div className="about__cards">
        <article className="about__card">
          <FiAward className="about__icon"/>
          <h5>Experience</h5>
          <small>1+ year Working</small>
        </article>
        <article className="about__card">
          <FiUsers className="about__icon"/>
          <h5>Clients</h5>
          <small>50+ Worldwide</small>
        </article>
        <article className="about__card">
          <VscFolderLibrary className="about__icon"/>
          <h5>Projects</h5>
          <small>20+ Completed</small>
        </article>
       </div>
       <p>
        Passionate Web developer experienced in creating dynamic and user-friendly 
        web applications. Proficient in Javascript, React, Node Js, PHP(Laravel)
        , HTML, CSS, with a strong focus on backend development. 
        Skilled in translating design concepts into efficient and responsive code. 
        Constantly staying up-to-date with the latest web development trends and technologies to deliver 
        cutting-edge solutions. Dedicated to delivering high-quality, scalable, and maintainable code.
         Committed to collaborating with cross-functional teams to create intuitive and seamless user experiences. 
        Let's connect and discuss how I can contribute to your web development projects!
       </p>
    </div>
</div>
    </section>
  )
}

export default About