
import React from "react";
import "./schedule.css";
import ArrowR from '../../assets/Arrow Right.png'
import ArrowL from '../../assets/Arrow Left.png'
import LINES from '../../assets/lines.png'
import transparentPNG from '../../assets/transparent arrow.png'

const Schedule = () => {
  return (
    <section>
      <div id='schedule'><br/></div>
      <div className="container schedule__content"> 
        <h2>schedule of events</h2>
        <img className='divider-lines-schedule' src={LINES}/>
        <div className="container">
      <div className="row">
        <div className="column">
          <div className="pink-box">
            <p>5:30 - 6:00 pm: check-in</p>
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
            <p>5:45 - 6:00 pm: opening remarks with advocacy director</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="yellow-box">
            <p>6:00 - 6:15 pm: opening remarks with dean santos</p>
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
            <p>6:15 - 6:45 pm: keynote speech with lirong bao</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="blue-box">
            <p>6:45 - 7:30 pm: panel</p>
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
          <div className="indigo-box">
            <p>7:30 - 8:15 pm: dinner and small group discussion</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="purple-box">
            <p>8:15 - 8:30 pm: closing remarks with epic chairs</p>
            </div>
            <div className="arrow-container">
            <img src={transparentPNG} alt="Right Arrow" className="arrow" />
          </div>
    </div>
      </div>
    </div>
      </div>
    </section>
  );
}

export default Schedule;

