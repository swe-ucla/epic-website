import React from 'react'
import './homeSchedule.css'

const HomeSchedule = () => {
  const activities = [
    {
      name: "Check-in starts",
      time: "04/09 17:00-17:30",
      description: "Brief description of activity"
    },
    {
      name: "Opening remarks",
      time: "04/09 17:30-17:50",
      description: "Brief description of activity"
    },
    {
      name: "Panel",
      time: "04/09 17:50-18:40",
      description: "Brief description of activity"
    }
  ];

  return (
    <section className="home-schedule-section">
      <div className="home-schedule-container">
        <h2 className="home-schedule-title">Schedule</h2>
        
        <div className="home-schedule-content">
          {/* Timeline */}
          <div className="home-schedule-timeline">
            <div className="timeline-line"></div>
            {activities.map((activity, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="activity-card">
                  <div className="activity-header">
                    <div className="activity-name">{activity.name}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                  <div className="activity-description">{activity.description}</div>
                </div>
              </div>
            ))}
            <div className="timeline-arrow">▼</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSchedule
