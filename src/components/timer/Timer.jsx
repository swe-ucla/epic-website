import React, { useEffect, useState } from 'react';
import './timer.css';

const calculateTimeLeft = () => {
    let difference = +new Date("April 9, 2025 17:00:00") - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
};

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className='countdown__container'>
            <span className="countdown">
                <div className="countdown_bubbles">
                    <h2>{String(timeLeft.days).padStart(2, '0')}</h2>
                    <p>days</p>
                </div>
            </span>
            <span className="colon"> : </span>
            <span className="countdown">
                <div className="countdown_bubbles">
                    <h2>{String(timeLeft.hours).padStart(2, '0')}</h2>
                    <p> hours </p>
                </div>
            </span>
            <span className="colon"> : </span>
            <span className="countdown">
                <div className="countdown_bubbles">
                    <h2>{String(timeLeft.minutes).padStart(2, '0')}</h2>
                    <p>minutes</p>
                </div>
            </span>
        </div>
    );
};

export default Timer;
