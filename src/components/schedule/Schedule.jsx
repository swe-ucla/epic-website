
import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <section>
      <div id='schedule'><br/></div>
      <div className="container schedule__content"> 
        <h2 style={{padding: '25px'}}>schedule of events</h2>
        <div className="container">
      <div className="row">
        <div className="column">
          <div className="pink-circle">
            <p>5:30 - 6:00 pm: check-in</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="orange-circle">
            <p>5:45 - 6:00 pm: opening remarks with advocacy director</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="yellow-circle">
            <p>6:00 - 6:15 pm: opening remarks with dean santos</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="green-circle">
            <p>6:15 - 6:45 pm: keynote speech with lirong bao</p>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="blue-circle">
            <p>6:45 - 7:30 pm: panel</p>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="column">
          <div className="indigo-circle">
            <p>7:30 - 8:15 pm: dinner and small group discussion</p>
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="column">
          <div className="purple-circle">
            <p>8:15 - 8:30 pm: closing remarks with epic chairs</p>
            </div>
    </div>
      </div> */}
    </div>
      </div>
    </section>
  );
}

export default Schedule;

