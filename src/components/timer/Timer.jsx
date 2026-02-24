import React, { useEffect, useState } from 'react';
import './timer.css';

const calculateTimeLeft = () => {
    let difference = +new Date("April 10, 2026 17:00:00") - +new Date(); // TODO: Change

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
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const daysStr = String(timeLeft.days || 0).padStart(2, '0');
    const hoursStr = String(timeLeft.hours || 0).padStart(2, '0');
    const minutesStr = String(timeLeft.minutes || 0).padStart(2, '0');

    return (
        <div className='countdown__container'>
            <div className="countdown-group">
                <div className="digit-pair">
                    <div className="digit-card">{daysStr[0]}</div>
                    <div className="digit-card">{daysStr[1]}</div>
                </div>
                <p className="time-label">days</p>
            </div>
            <span className="colon">:</span>
            <div className="countdown-group">
                <div className="digit-pair">
                    <div className="digit-card">{hoursStr[0]}</div>
                    <div className="digit-card">{hoursStr[1]}</div>
                </div>
                <p className="time-label">hours</p>
            </div>
            <span className="colon">:</span>
            <div className="countdown-group">
                <div className="digit-pair">
                    <div className="digit-card">{minutesStr[0]}</div>
                    <div className="digit-card">{minutesStr[1]}</div>
                </div>
                <p className="time-label">min</p>
            </div>
        </div>
    );
};

export default Timer;
