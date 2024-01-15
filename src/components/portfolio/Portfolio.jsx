import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/analytics.png';
import IMG2 from '../../assets/fitkeep.png';
import IMG3 from '../../assets/userdashboard.png';
import IMG4 from '../../assets/weather.png';
import IMG5 from '../../assets/quizapp.png';
import IMG6 from '../../assets/IMG6.jpg';
import IMG7 from '../../assets/anony.jpg';
import IMG8 from '../../assets/eCommerce .jpg';
import IMG9 from '../../assets/IMG8.jpg';
const Portfolio = () => {
     const handleLink = (url)=>{
          window.location.href = url;
     };
  return (
  <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG9} alt=''/>
            </div>
            <h3>Cliqpod digital backdrop</h3>
            <a href='https//github.com/fidel-wole' className='btn' target='_blank'>Github</a>
            <a href='https://cliqpod.co' style={{marginLeft:15}} onClick={()=>handleLink('https://cliqpod.co')} className='btn'>View</a>
       </article>
    <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG7} alt=''/>
            </div>
            <h3>Anonymous messaging app</h3>
            <a href='https//github.com/fidel-wole' className='btn' target='_blank'>Github</a>
            <a href='https://anonz.netlify.app' style={{marginLeft:15}} onClick={()=>handleLink('https://anonz.netlify.app')} className='btn'>View</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG1} alt=''/>
            </div>
            <h3>QuizGrad Analytic View</h3>
            <a href='https://github.com/Fidel-wole' className='btn' target='_blank' rel="noreferrer" >Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG2} alt=''/>
            </div>
            <h3>FitKeep</h3>
            <a href='https://github.com/Fidel-wole' className='btn' target='_blank' rel="noreferrer" >Github</a>
            <a href='https://fidel-wole.github.io/Fitkeep' style={{marginLeft:15}} onClick={()=>handleLink('https://fidel-wole.github.io/Fitkeep')} className='btn'>View</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG3} alt=''/>
            </div>
            <h3>QuizGrad</h3>
            <a href='https//github.com/Fidel-Wole/' className='btn' target='_blank'>Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG4} alt=''/>
            </div>
            <h3>Weather Forecast App</h3>
          
             <a href='https://fidel-wole.github.io/weather_forecast' onClick={()=>handleLink('https://fidel-wole.github.io/weather_forecast')} className='btn'>View</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG5} alt=''/>
            </div>
            <h3>Quiz App</h3>
            <a href='https://github.com/Fidel-wole' className='btn' target='_blank' rel="noreferrer" >Github</a>
             <a href='https://fidel-wole.github.io/Bio-101-questions' style={{marginLeft:15}} onClick={()=>handleLink('https://fidel-wole.github.io/Bio-101-questions')}className='btn' >View</a>
       </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG6} alt=''/>
            </div>
            <h3>Quiz Hub built with react js</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
             <a href='https://fidel-wole.github.io/React-Js-Quiz-App' style={{marginLeft:15}} onClick={()=>handleLink('https://fidel-wole.github.io/React-Js-Quiz-App')}className='btn' >View</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG8} alt=''/>
            </div>
            <h3>E-commerce built with node js</h3>
            <a href='https://github.com/Fidel-wole/ecommerceWithNode' className='btn' target='_blank' rel="noreferrer" >Github</a>

       </article>
    </div>
  </section>
  )
}

export default Portfolio