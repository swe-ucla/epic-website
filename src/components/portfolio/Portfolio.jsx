import React from 'react'
import './portfolio.css'
//import IMG6 from '../../assets/avatar1.jpg'
import LAVINIA from '../../assets/lavinia.JPEG'
import SAHITI from '../../assets/sahiti.JPEG'
import LINES from '../../assets/lines.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [

  {
    id: 6,
    image: LAVINIA,
    title: 'Lavinia Lei (she/they)',
    bio: 'Lavinia is a first-year mathematics of computation student. Outside of her involvement with SWE Advocacy, she serves on the Alumni Scholars Academic Enrichment committee and conducts AI research at the Arisaka Lab, while in her free time, she enjoys adventuring around Los Angeles and creating art. Lavinia is also a competitive wrestler on UCLA’s club team, another space where she believes in the active progress toward women’s inclusion.',
  },
  {
    id: 6,
    image: SAHITI,
    title: 'Sahiti Gabrani (she/her)',
    bio: 'Sahiti is a third year student with a major in Computer Science and minor in Digital Humanities. She is the Internship Director for ACM working towards building an inclusive community for all interns. Apart from being the EPIC Co-chair for the SWE Advocacy Committee, she is a part-time employee for Residential Life as a Computer Support Technician supervisor. In her spare time, you can find her making Spotify playlists and painting her thoughts.',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="container portfolio__content">
        <h2>meet the EPIC chairs</h2>
        <img className='divider-lines-portfolio' src={LINES}/>
      </div>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, bio, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="portfolio__item-text">
                  <h3>{title}</h3>
                  <h4>{bio}</h4>
                </div>
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