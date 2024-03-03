import React from 'react'
import './speakers.css'
import EWI2017 from '../../assets/ewi2017.jpg'
import tempOne from '../../assets/MCisneros Pic.png' 
import tempTwo from '../../assets/2.png' 
import tempThree from '../../assets/3.png' 
import tempFour from '../../assets/4.png' 
import EWI2018_2 from '../../assets/ewi2018_2.jpg'


const Speakers = () => {
  return (
    <section>
      <h6 id='speaker'></h6>
      <div className="container speaker__content"> 
            <h2>Speakers</h2> 
      </div>
      <p>  </p>

      <div className="image_container"> 
      <div class="image_container-row">
        <div class="image_container-column">
          
        <div class="container-left">
          <img src={tempOne} alt={'EWI Committee 2023'} style={{ borderRadius: '20px' }}/>
          </div>
          <h3> .</h3>

            <h1>Name</h1>
            <h2>Title</h2>
            <p>SPEAKER BIO 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat lacus sit amet enim feugiat, et imperdiet justo convallis. Mauris quis vestibulum nisl. Aenean sagittis accumsan orci, quis eleifend ligula ultricies in. Fusce fringilla ullamcorper purus, non tincidunt neque vehicula nec. Maecenas tristique metus nec justo accumsan gravida. Praesent hendrerit sem diam, in consequat risus auctor vitae.</p>
            <section></section>

          <div class="container-left">
          <img src={tempThree} alt={'EWI Committee 2023'} style={{ borderRadius: '20px' }}/>
          </div>
          <section></section>

            <h1>Name</h1>
            <h2>Title</h2>
            <p>SPEAKER BIO 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat lacus sit amet enim feugiat, et imperdiet justo convallis. Mauris quis vestibulum nisl. Aenean sagittis accumsan orci, quis eleifend ligula ultricies in. Fusce fringilla ullamcorper purus, non tincidunt neque vehicula nec. Maecenas tristique metus nec justo accumsan gravida. Praesent hendrerit sem diam, in consequat risus auctor vitae.</p>
            <section></section>

        </div>
        
        <div class="image_container-column">
          <div className="column-image">

          <h1>Mariel Cisneros</h1>
            <h2>Senior Project Manager</h2>
            <p>Mariel Cisneros is a senior program manager leading architecture analysis and 
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
Institute of Technology. </p>
            <p>Mariel is an active and passionate DEI leader within the SWE and Northrop 
Grumman communities serving as the SWE Latinos Affinity Group Co-Chair, the SWE
Orange County Section Outreach chair, the SATO Academy of Math and Science 
SWENext Counselor, the Northrop Grumman’s Women’s International (NGWIN) ERG 
Enterprise Chair, and the NGWIN Aeronautics Sector Chair. Mariel joined the Mujeres
initiative in 2020 and serves as the external communications lead helping spread 
the mission of Mujeres to external organizations. </p>
            </div>
            <section></section>
          
            <div class="container-right">
          <img src={tempTwo} alt={'EWI Committee 2023'} style={{ borderRadius: '20px' }}/>
          </div>
          <section></section>

          <h1>Name</h1>
            <h2>Title</h2>
            <p>SPEAKER BIO 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat lacus sit amet enim feugiat, et imperdiet justo convallis. Mauris quis vestibulum nisl. Aenean sagittis accumsan orci, quis eleifend ligula ultricies in. Fusce fringilla ullamcorper purus, non tincidunt neque vehicula nec. Maecenas tristique metus nec justo accumsan gravida. Praesent hendrerit sem diam, in consequat risus auctor vitae.</p>
          <section></section>  

          <div class="container-right">
          <img src={tempFour} alt={'EWI Committee 2023'} style={{ borderRadius: '20px' }}/>
          </div>
          <section></section>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Speakers