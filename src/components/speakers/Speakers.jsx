import React from 'react'
import './speakers.css'
import Speaker2 from '../../assets/filler_pfp.png'
import Cisneros from '../../assets/MCisneros Pic.png'
import Jones from '../../assets/Jones.png'
import Speaker3 from '../../assets/filler_pfp.png'
import Pasman from '../../assets/ReneePasman.png'
import Santos from '../../assets/VeronicaSantos.jpg'
import LINES from '../../assets/lines.png'
import Planet from '../../assets/planet.svg'
import Star from '../../assets/star.svg'


const Speakers = () => {
  return (
    <section>
      <div id='speakers'><br/></div>
      <div className="container speaker__content"> 
          <div className="header_and_logo">
            <h2 style={{padding: '35px'}}>speakers</h2>
            <img className="graphic" src={Planet} alt="Planet"/>
          </div>
          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Jones} alt={'Kim Jones photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Kim Jones</p>
              <p class="subtitle">Executive Coach, Gender Equity Advisor, Keynote Speaker</p>
              <p>
              Before rising to divisional Chief Information Officer at Farmers Insurance Company, Kim held multiple executive level roles at Fortune 250 companies over her 25-year career. She now coaches leaders at all levels, from first-time managers to C-Suite executives, to accelerate their impact and rise to their highest professional potential. In her work with clients, Kim leverages her first-hand experience with overcoming the barriers frequently encountered on the path to senior leadership, specializing in developing the leadership skills to foster strong communication, set vision and strategy, navigate complex interpersonal dynamics, and build high performing teams and inclusive cultures.              </p>
            </div>
          </div>

          <div class="speaker_row backward">
            <div class="speaker_column_text">
              <p class="title">Samantha Combs</p>
              <p class="subtitle">Title</p>
              <p>
              Speaker bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat lacus sit amet enim feugiat, et imperdiet justo convallis. Mauris quis vestibulum nisl. Aenean sagittis accumsan orci, quis eleifend ligula ultricies in. Fusce fringilla ullamcorper purus, non tincidunt neque vehicula nec. Maecenas tristique metus nec justo accumsan gravida. Praesent hendrerit sem diam, in consequat risus auctor vitae.
              </p>
            </div>
            <div class="speaker_column_image">
              <img className='speaker-img' src={Speaker2} alt={'Ayonnah Tinsley photo'} style={{  borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Speaker3} alt={'Kailin Kearns photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Elizabeth Krider</p>
              <p class="subtitle">Title</p>
              <p>
              Speaker bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat lacus sit amet enim feugiat, et imperdiet justo convallis. Mauris quis vestibulum nisl. Aenean sagittis accumsan orci, quis eleifend ligula ultricies in. Fusce fringilla ullamcorper purus, non tincidunt neque vehicula nec. Maecenas tristique metus nec justo accumsan gravida. Praesent hendrerit sem diam, in consequat risus auctor vitae.
              </p>
            </div>
          </div>

          {/* <div class="speaker_row backward">
            <div class="speaker_column_text">
              <p class="title">Veronica Santos</p>
              <p class="subtitle">UCLA Samueli Associate Dean</p>
              <p>
              Veronica Santos is a Professor of Mechanical and Aerospace Engineering and Director of the UCLA Biomechatronics Lab. She currently serves as the Associate Dean of Equity, Diversity, and Inclusion and Faculty Affairs for the UCLA Samueli School of Engineering. Dr. Santos earned her B.S. in mechanical engineering with a music minor from UC Berkeley, was a Quality and R&D Engineer at Guidant Corporation, and earned her M.S. and Ph.D. in mechanical engineering with a biometry minor from Cornell University. She was a postdoctoral researcher at the University of Southern California and an Assistant Professor at Arizona State University prior to joining UCLA as the third female professor in the Mechanical and Aerospace Engineering Department.
              </p>
            </div>
            <div class="speaker_column_image">
              <img className='speaker-img' src={Santos} alt={'Veronica Santos photo'} style={{ borderRadius: '10%' }}/>
            </div>
          </div> */}

          {/* <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Pasman} alt={'Renee Pasman photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Renee Pasman</p>
              <p class="subtitle">Program Management VP</p>
              <p>
              Renee Pasman is Vice President, Integrated Systems for 
              Advanced Development Programs (ADP), also known as the 
              Skunk Works®, Lockheed Martin Aeronautics. In this capacity, 
              she leads strategy development, portfolio management and 
              execution of a variety of proprietary programs, reporting to John 
              Clark. She was named to this position in August 2017.
              <br/>
              Previously, Ms. Pasman was the Director of Mission Systems 
              Roadmaps, responsible for the capture strategy and execution 
              for multiple inter-related projects in Open System Architecture, Cyber, Data Links, Air-
              Space Integration and Electronic Warfare. Prior to that, she served as the Software 
              Systems Senior Manager and Open Systems Architecture Roadmap Lead for ADP.
              <br/>
              Ms. Pasman graduated from California Polytechnic State University in San Luis Obispo,
              California, with a bachelor’s and master’s degree in Aeronautical Engineering. She also 
              holds master’s degree in Business Administration from the University of Massachusetts 
              in Amherst, Massachusetts.
              <br/>
              Ms. Pasman is active in the community supporting STEM and veterans/military causes.
              </p>
            </div>
          </div>  */}
          <img className="graphic" src={Star} alt="Two stars clustered together"/>
        </div>

    
    </section>
  )
}

export default Speakers