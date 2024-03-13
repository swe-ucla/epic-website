import React, { useEffect, useState } from 'react'
import './timer.css'

const calculateTimeLeft = () => {
    let difference = +new Date("April 25, 2024 17:30:00") - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60)
      };
    }
  
    return timeLeft;
  }

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //     return;
    // }
    timerComponents.push(
        <span className="countdown">
          <div className="countdown_bubbles">
            <p><h2>{timeLeft[interval]}</h2>{interval}</p>
          </div>
        </span>
    );
    });
  return (
    <div>
        <div className='countdown__container'>
            {timerComponents.length ? timerComponents : <span></span>}
        </div>
    </div>
  )
}

export default Timer