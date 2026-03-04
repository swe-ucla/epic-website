import React from 'react'
import './homeSchedule.css'
import TimelineSVG from '../../assets/timeline.svg'

const HomeSchedule = () => {
  const activities = [
    {
      name: "Check-in starts",
      date: "04/09",
      time: "5:00 PM - 5:30 PM",
      description: "Brief description of activity"
    },
    {
      name: "Opening remarks",
      date: "04/09",
      time: "5:30 PM - 5:50 PM",
      description: "Brief description of activity"
    },
    {
      name: "Panel",
      date: "04/09",
      time: "5:50 PM - 6:40 PM",
      description: "Brief description of activity"
    }
  ];

  return (
    <section className="home-schedule-section">
      <div className="home-schedule-container">
        <h1 className="home-schedule-title">Schedule</h1>
        
        <div className="home-schedule-content">
          {/* Timeline on the left */}
          <div className="home-schedule-timeline">
            <img src={TimelineSVG} alt="Timeline" className="timeline-svg" />
          </div>

          {/* Content blocks on the right */}
          <div className="schedule-items">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-header">
                  <span className="activity-name">{activity.name}</span>
                  <span className="activity-datetime">
                    {activity.date} {activity.time}
                  </span>
                </div>
                <p className="activity-description">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSchedule
