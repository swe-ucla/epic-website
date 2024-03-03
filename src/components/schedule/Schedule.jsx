import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <div className="container">
      <div className="left-column">
      <h2>Schedule of Events</h2>
      <section></section>
        <div className="pink-box">
          <p>5:30-5:45</p>
          <p> Opening</p>
        </div>

        <div className="arrow_text">
        <h2>. </h2>   
          <div className="arrow2"></div>
        </div>

        <div className="yellow-box">
          <p>6:15-7:00</p>
          <p> Panel</p>
          </div>

        <div className="arrow_text">
        <h1> .</h1>
          <div className="arrow2"></div>
        </div>

        <div className="blue-box">
          <p>8:30-9:00</p>
          <p>Closing</p>
        </div>
      </div>

      <div className="right-column">
        <section></section>
        <div className="arrow_text">
        <h2> .</h2>
        </div>
      <div className="arrow_text">
        <div className="arrow1"></div>
        </div>

        <div className="orange-box">
          <p>5:45-6:15</p>
          <p> Keynote</p>
          </div>
          <div className="arrow_text">
        <h2> .</h2>
          <div className="arrow1"></div>
        </div>

        <div className="green-box">
          <p>7:00-8:30</p>
          <p> Dinner</p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
