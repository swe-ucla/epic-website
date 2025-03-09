import React from 'react'
import './portfolio.css'
import Park from '../../assets/Park.png'
import Cisneros from '../../assets/MCisneros Pic.png'
import Singhai from '../../assets/Singhai.png'
import Lei from '../../assets/Lei.png'
import Pasman from '../../assets/ReneePasman.png'
import Santos from '../../assets/VeronicaSantos.jpg'
import LINES from '../../assets/lines.png'
import sparkle from '../../assets/Group 25.png'
import Star from '../../assets/star.svg'

const Portfolio = () => {
  return (
    <section>
      <div id='speakers'><br/></div>
      <div className="container speaker__content"> 
          <div className="header_and_logo">
            <h2 style={{padding: '35px'}}>meet the EPIC 2025 team</h2>
            {/* <img className="graphic" src={sparkle} alt="sparkle"/> */}
          </div>
          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Singhai} alt={'Lirong Bao photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Anusha Singhai</p>
              <p>
              Anusha is a second-year computer science student. Aside from her involvement with SWE Advocacy, she’s also a part of ACM Teach LA and is passionate about advancing educational equity. She is also involved with neuroscience and artificial intelligence research with the Hinman Lab. In her free time, she enjoys reading, curating Spotify playlists, and drinking hot chocolate.
              </p>
            </div>
          </div>

          <div class="speaker_row backward">
            <div class="speaker_column_text">
              <p class="title">Kana Park</p>
              <p>
              Kana is a second-year bioengineering major. She is a part of SWE Advocacy’s EPIC subcommittee and hopes to inspire all engineers through EPIC to pursue their passions in the face of adversity. Kana is also an undergraduate researcher at the Kamariza Lab, a part of the Korean American Student Association, and a member of the Biomedical Engineering Society’s Cell Team. She spends her free time either going on new adventures to Los Angeles hot spots or watching TV with her roommates.
              </p>
            </div>
            <div class="speaker_column_image">
              <img className='speaker-img' src={Park} alt={'Ayonnah Tinsley photo'} style={{  borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Lei} alt={'Kailin Kearns photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Lavinia Lei</p>
              <p>
              Lavinia is a second-year computer science student, ardent book reader, instrumental music enthusiast, and co-director of SWE@UCLA’s Advocacy committee. Through EPIC and other initiatives in SWE, she endeavors to further the social and civic engagement of her fellow engineering community. In her free time, she enjoys folding paper (stars or otherwise) and maximizing use of her free transit pass: some favorite frolics include watching sand pipers scurry with the waves at Venice and long walks and food crawls through the SGV.
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
        </div>

    
    </section>
  )
}

export default Portfolio