import React from "react";
import "./schedule.css";
import ArrowR from '../../assets/Arrow Right.png'
import ArrowL from '../../assets/Arrow Left.png'

const Schedule = () => {
  return (
    <section>
      <h6 id='schedule'></h6>
      <div className="container schedule__content"> 
        <h2>schedule</h2>

        <div className="container">
          <div className="row">
            <div className="column">
              <div className="pink-box">
                <p>5:30 - 5:45 pm: opening remarks</p>
              </div>
              <div className="arrow-container">
                <img src={ArrowR} alt="Right Arrow" className="arrow" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
            <div className="arrow-container">
                <img src={ArrowL} alt="Left Arrow" className="arrow" />
              </div>
              <div className="orange-box">
                <p>5:45 - 6:15 pm: keynote speech</p>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="yellow-box">
                <p>6:15 - 7:00: Panel</p>
              </div>
              <div className="arrow-container">
                <img src={ArrowR} alt="Right Arrow" className="arrow" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="arrow-container">
                <img src={ArrowL} alt="Left Arrow" className="arrow" />
              </div>
              <div className="green-box">
                <p>7:00 - 8:30 pm: dinner and small group discussion</p>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="blue-box">
                <p>8:30 - 9:00 pm: closing remarks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
