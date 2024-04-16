import React from 'react'
import './speakers.css'
import Tinsley from '../../assets/TAyonnah Pic.png'
import Cisneros from '../../assets/MCisneros Pic.png'
import Bao from '../../assets/LirongBao.jpeg'
import Kearns from '../../assets/Kailin Kearns.JPEG'
import Pasman from '../../assets/ReneePasman.png'
import LINES from '../../assets/lines.png'


const Speakers = () => {
  return (
    <section>
      <div id='speakers'><br/></div>
      <div className="container speaker__content"> 
            <h2>speakers</h2>
            <img className='divider-lines' src={LINES}/>
          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Bao} alt={'Lirong Bao photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Lirong Bao</p>
              <p class="subtitle">Global Science and Technology Director</p>
              <p>
                Lirong Bao is the Global Science and Technology Director for aerospace materials at PPG Industries, a leading supplier of innovative paints, coatings, and specialty materials. PPG’s aerospace business provides differentiated materials, products, and services for the global aerospace market. Lirong and her team focus on product and technology development for aerospace coatings, sealants, adhesives and functional materials. They serve the diverse needs of aerospace industry and collaborate closely with customers and partners to bring novel products to market. Lirong is based in Burbank, California.
                <br/>
                Lirong holds a Ph.D. degree in Macromolecular Science and Engineering from the University of Michigan and a B.S. degree in Materials Science from Fudan University in China. Before joining PPG in 2021, she held various technical and leadership roles in Henkel, AkzoNobel and National Starch and Chemical Company.
              </p>
            </div>
          </div>

          <div class="speaker_row backward">
            <div class="speaker_column_text">
              <p class="title">Ayonnah Tinsley</p>
              <p class="subtitle">STEM Content Creator</p>
              <p>
              Ayonnah Tinsley is a Junior at the University of Southern California studying Arts, Technology, and the Business of Innovation at the Iovine Young Academy, with a minor in Sports Media Industries. Although her studies sound like a mouthful, she incorporates or passion for technology, sports, and art through her social media series called, “STEMix Series”, and through her children’s book she wrote, illustrated, and published titled, “This Is What an Engineer Looks Like”. She always had a passion for STEM education, but during her Junior year she realized her passion for the sports too! Her goal is to highlight the STEM behind sports, and give a spotlight to athletes that are a part of both worlds. Not only is she interested in the industry, but loves playing sports too! From ultimate frisbee to rollerskating, or even learning how to boulder.
              </p>
            </div>
            <div class="speaker_column_image">
              <img className='speaker-img' src={Tinsley} alt={'Ayonnah Tinsley photo'} style={{  borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="speaker_row">
            <div class="speaker_column_image">
              <img className='speaker-img' src={Cisneros} alt={'Mariel Cisneros photo'} style={{borderRadius: '10%' }}/>
            </div>
            <div class="speaker_column_text">
              <p class="title">Mariel Cisneros</p>
              <p class="subtitle">Digital Systems Engineering Leader</p>
              <p>
                Mariel Cisneros is a senior program manager leading architecture analysis and 
                digital engineering for the research and advanced design organization as part of the
                Aeronautics sector at the Northrop Grumman Corporation. In this role Mariel 
                oversees all the architecture and model-based systems engineering products across
                a wide portfolio of projects ranging from advanced weapons, future battle 
                management systems, and even space air integration for tomorrow’s battles. Mariel
                brings a diverse perspective to her role from prior experiences on both air and 
                space programs to guide the strategic vision for the future of the Aeronautics 
                projects. Mariel is a proud first-generation graduate and holds a bachelor’s degree 
                in electrical engineering technology from California State University, Long Beach, a 
                master’s degree in architecture-enterprise based systems engineering from the 
                University of California, San Diego, and several certifications from the California 
                Institute of Technology.
                <br/>
                Mariel is an active and passionate DEI leader within the SWE and Northrop 
                Grumman communities serving as the SWE Latinos Affinity Group Co-Chair, the SWE
                Orange County Section Outreach chair, the SATO Academy of Math and Science 
                SWENext Counselor, the Northrop Grumman’s Women’s International (NGWIN) ERG 
                Enterprise Chair, and the NGWIN Aeronautics Sector Chair. Mariel joined the Mujeres
                initiative in 2020 and serves as the external communications lead helping spread 
                the mission of Mujeres to external organizations.
              </p>
            </div>
          </div>

          <div class="speaker_row backward">
            <div class="speaker_column_text">
              <p class="title">Kaitlin Kearns</p>
              <p class="subtitle">Engineering Consulting Firm Recruiter</p>
              <p>
              Kaitlin Kearns is a Recruiter at Second Order Effects, an engineering consulting firm that delivers novel solutions to customers in multiple industries (aerospace, medical devices, renewable energy, robotics, etc.). She discovered her passion for Recruiting during her time at UCLA, where she majored in Economics and graduated in June of 2022. Throughout her time so far at SOE, Kaitlin has taken ownership over the hiring process for both engineering and non-engineering roles and is responsible for adding talented individuals to the team. Her most notable achievements include hiring Engineering Managers for the Electrical and Mechanical teams and sourcing SOE’s current Director of Operations and Information Technology. 
              </p>
            </div>
            <div class="speaker_column_image">
              <img className='speaker-img' src={Kearns} alt={'Kaitlyn Kearns photo'} style={{ borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="speaker_row">
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
          </div> 

        </div>

    
    </section>
  )
}

export default Speakers