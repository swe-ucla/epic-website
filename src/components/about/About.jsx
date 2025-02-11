import React from 'react'
import './about.css'
import EPIC_END from '../../assets/Group 6.png'
import EPIC_EVENT from '../../assets/Group 19.png'
import EPIC_SIGN from '../../assets/Group 20 (1).png'
import Moon_Phases from '../../assets/potm.svg'
import Planet_with_Rings from '../../assets/planet_rings.svg'


const About = () => {
  return (
    <section>
      <div id='about'><br/></div>
      <img className="moon_phases" src={Moon_Phases} alt="Phases of the moon"/>
      <div className="container about__content"> 
            <h2 style={{padding: '25px'}}>about</h2>

        <div class="about_table">
          <div class="about_row">
            <div class="about_column">
              <p>
              The Engineers for Professional Inclusion Conference (EPIC) is the Society of Women Engineers’ Advocacy committee’s flagship event, engaging students, company representatives, and academics from a wide range of backgrounds in an open conversation about what it means to be inclusive in a professional environment.</p>
            </div>
            <div class="about_column">
              <img src={EPIC_EVENT} alt={'Attendees sitting at EPIC event'} style={{  borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="about_row backward">
            <div class="about_column">
              <img src={EPIC_SIGN} alt={'EPIC attendees smiling by EPIC\'s entrance sign'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="about_column">
              <p>
              Our goal for EPIC is to facilitate meaningful conversations about diversity between a wide range of students and professionals and help participants brainstorm solutions that they can apply at UCLA and their workplaces. Overall, we hope that both students and professionals walk away from this event feeling more motivated and optimistic about fixing the lack of diversity in engineering, and realize they have a community on campus that cares. Additionally, we hope that these conversations will give them the tools to start and lead more conversations with others in an effort to heighten awareness surrounding obstacles that minorities in STEM fields face.</p>
            </div>
          </div>

          <div class="about_row">
            <div class="about_column">
              <p>
              EPIC 2025 will be held at [tbd] on the evening of Wednesday, April 9th. In our commitment to fostering inclusivity, we strive to include as many voices as possible in the conversation about diversity and inclusion in engineering and thus welcome attendees from all backgrounds and identities to join us in this dialogue, recognizing that diverse perspectives enrich our collective understanding and drive meaningful change. After all, we stand for inclusion here.</p>
            </div>
            <div class="about_column">
            <img src={EPIC_END} alt={'EPIC attendees smiling at end of EPIC event'} style={{ borderRadius: '10%' }}/>
            </div>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
          <img className="planet_rings" src={Planet_with_Rings} alt="Planet with Rings"/>
        </div>
      </div>
    
    </section>
  )
}

export default About