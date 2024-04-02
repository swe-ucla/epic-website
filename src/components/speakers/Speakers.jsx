import React from 'react'
import './speakers.css'
import Tinsley from '../../assets/TAyonnah Pic.png'
import Cisneros from '../../assets/MCisneros Pic.png'
import Bao from '../../assets/LirongBao.jpeg'
import temp4 from '../../assets/4.png'


const Speakers = () => {
  return (
    <section>
      <h6 id='speakers'></h6>
      <div className="container speakers__content"> 
            <h2>speakers</h2>

        <div class="table">
          <div class="row">
            <div class="column">
            <img src={Cisneros} style={{ width: '400px', height: '400px', borderRadius: '10%', marginBottom: '10px' }}/>
            </div>
            <div class="column">
            <p>
            <p class="title">Mariel Cisneros</p>
            <p></p>
            <p class="subtitle">Senior Program Manager</p>
            <p></p>
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
the mission of Mujeres to external organizations. </p>
              </div>
          </div>

          <div class="row">
            <div class="column">
            <p>
            <p class="title">Ayonnah Tinsley</p>
            <p></p>
            <p class="subtitle">Undergraduate Student</p>
            <p></p>
              Ayonnah Tinsley is a Junior at the University of Southern California studying Arts, Technology, and the Business of Innovation at the Iovine Young Academy, with a minor in Sports Media Industries. Although her studies sound like a mouthful, she incorporates or passion for technology, sports, and art through her social media series called, “STEMix Series”, and through her children’s book she wrote, illustrated, and published titled, “This Is What an Engineer Looks Like”. She always had a passion for STEM education, but during her Junior year she realized her passion for the sports too! Her goal is to highlight the STEM behind sports, and give a spotlight to athletes that are a part of both worlds. Not only is she interested in the industry, but loves playing sports too! From ultimate frisbee to rollerskating, or even learning how to boulder. </p>
            </div>
            <div class="column">
            <img src={Tinsley} style={{ width: '400px', height: '400px', borderRadius: '10%' }}/>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <img src={Bao} style={{ width: '400px', height: '400px', borderRadius: '10%' }}/>
            </div>
            <div class="column">
            <p>
            <p class="title">Lirong Bao</p>
            <p></p>
            <p class="subtitle">Global Science and Technology Director</p>
            <p></p>
              Lirong Bao is the Global Science and Technology Director for aerospace materials at PPG Industries, a leading supplier of innovative paints, coatings, and specialty materials. PPG’s aerospace business provides differentiated materials, products, and services for the global aerospace market. Lirong and her team focus on product and technology development for aerospace coatings, sealants, adhesives and functional materials. They serve the diverse needs of aerospace industry and collaborate closely with customers and partners to bring novel products to market. Lirong is based in Burbank, California.
<br/>
Lirong holds a Ph.D. degree in Macromolecular Science and Engineering from the University of Michigan and a B.S. degree in Materials Science from Fudan University in China. Before joining PPG in 2021, she held various technical and leadership roles in Henkel, AkzoNobel and National Starch and Chemical Company.</p>
            </div>
          </div>

          {/* <div class="row">
            <div class="column">
            <p>
            <p class="title">Speaker Four</p>
            <p></p>
            <p class="subtitle">Title</p>
            <p></p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div class="column">
            <img src={temp4} style={{ width: '400px', height: '400px', borderRadius: '10%' }}/>
            </div>
          </div> */}
        </div>

      </div>
    
    </section>
  )
}

export default Speakers