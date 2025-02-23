
import React from "react";
import "./schedule.css";
import Rocket from '../../assets/rocket.svg'
import ShootingStars from '../../assets/shooting_star.svg'

const Schedule = () => {
  return (
    <section>
      <div id='schedule'><br/></div>
      <div className="container schedule__content"> 
        <div className="header_and_logo">
          <h2 style={{padding: '25px'}}>schedule of events</h2>
          <img className="graphic shooting_star" src={ShootingStars} alt="Shooting star"/>
        </div>
        <div className="container">
      <div className="row">
        <div className="column">
          <div className="pink-circle">
            <p>5:00 pm <br /> Check-in starts</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="orange-circle">
            <p>5:30 pm <br /> Opening remarks</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="yellow-circle">
            <p>5:50 pm <br /> Panel</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="green-circle">
            <p>6:40 pm <br /> Workshop and activity</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="blue-circle">
            <p>7:10 pm <br /> Dinner</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="indigo-circle">
            <p>7:45 pm <br /> Keynote speech</p>
          </div>
        </div>
      </div> 
     <div className="row">
        <div className="column">
          <div className="purple-circle">
            <p>8:15 pm <br /> Closing remarks</p>
            </div>
    </div>
      </div>
    </div>
      </div>
      <div className="rocket-container">
        <img className="rocket" src={Rocket} alt="Rocket"/>
      </div>
    </section>
    
  );
}

export default Schedule;

