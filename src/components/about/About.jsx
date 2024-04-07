import React from 'react'
import './about.css'
import EPIC_END from '../../assets/epic_end.jpg'
import EPIC_EVENT from '../../assets/epic_event.jpg'
import EPIC_SIGN from '../../assets/epic_sign.jpg'


const About = () => {
  return (
    <section>
      <div id='about'><br/></div>
      <div className="container about__content"> 
            <h2>about</h2>

        <div class="about_table">
          <div class="about_row">
            <div class="about_column">
              <p>
                The Engineers for Professional Inclusion Conference (EPIC) is the Society of Women Engineers’ Advocacy committee’s flagship event, engaging students, company representatives, and academics from a wide range of backgrounds in an open conversation about what it means to be inclusive in a professional environment.
              </p>
            </div>
            <div class="about_column">
              <img src={EPIC_EVENT} alt={'Attendees sitting at EPIC event'} style={{  borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="about_row">
            <div class="about_column">
              <img src={EPIC_SIGN} alt={'EPIC attendees smiling by EPIC\'s entrance sign'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="about_column">
              <p>
                EPIC 2024 will be held at UCLA’s Carnesale Commons on the evening of Thursday, April 25th. While our event is geared toward uplifting members of underrepresented minorities in engineers such as women, queer people, and much more, attendees from all walks of life are welcome; after all, we stand for inclusivity here.
              </p>
            </div>
          </div>

          <div class="about_row">
            <div class="about_column">
              <p>
                Our goal for EPIC is to facilitate meaningful conversations about diversity between a wide range of students and professionals and help participants brainstorm solutions that they can apply at UCLA and their workplaces. Overall, we hope that both students and professionals walk away from this event feeling more motivated and optimistic about fixing the lack of diversity in engineering, and realize they have a community on campus that cares. Additionally, we hope that these conversations will give them the tools to start and lead more conversations with others in an effort to heighten awareness surrounding obstacles that minorities in STEM fields face.
              </p>
            </div>
            <div class="about_column">
            <img src={EPIC_END} alt={'EPIC attendees smiling at end of EPIC event'} style={{ borderRadius: '10%' }}/>
            </div>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default About