import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/analytics.png'
import IMG2 from '../../assets/keepfit.png'
import IMG3 from '../../assets/userdashboard.png'
import IMG4 from '../../assets/qudroidquiz.png'
import IMG5 from '../../assets/qudroidquiz4.png'
const Portfolio = () => {
  return (
  <section>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG1}/>
            </div>
            <h3>This is the portfolio item title</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG2}/>
            </div>
            <h3>This is the portfolio item title</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG3}/>
            </div>
            <h3>This is the portfolio item title</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG4}/>
            </div>
            <h3>This is the portfolio item title</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
       </article>
       <article className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={IMG5}/>
            </div>
            <h3>This is the portfolio item title</h3>
            <a href='https//github.com' className='btn' target='_blank'>Github</a>
       </article>
    </div>
  </section>
  )
}

export default Portfolio