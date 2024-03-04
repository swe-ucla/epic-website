import React from 'react'
import './portfolio.css'
//import IMG6 from '../../assets/avatar1.jpg'
import LEXI from '../../assets/lexi.jpg'
import KAYLEE from '../../assets/kaylee.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [

  {
    id: 6,
    image: LEXI,
    title: 'name',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 6,
    image: KAYLEE,
    title: 'name',
    position: 'External Director',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>meet the EPIC chairs</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, bio, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{bio}</h4>
              </article>
            )
          })
        }
      </div>
      <h6 id='contact'></h6>
    </section>
  )
}

export default Portfolio