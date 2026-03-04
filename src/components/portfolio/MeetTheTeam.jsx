import React from "react";
import './MeetTheTeam.css'
import MeetTheTeamBox from "./MeetTheTeamBox";
import Lei from '../../assets/Lei.png'


const MeetTheTeam = () => {
    return (
        <div className="meet-the-team">
            <div className="team-section">
                <h2 className="title">Meet the Team</h2>
                <div className="boxes">
                     <MeetTheTeamBox 
                     name='Johnny Appleseed'
                     role='Director'
                     bio='Lorem ipsum dolor sit amet.'
                     image={Lei}
                     />
                    <MeetTheTeamBox 
                     name='Johnny Appleseed'
                     role='Director'
                     bio='Lorem ipsum dolor sit amet.'
                    image={Lei}
                    />
                    <MeetTheTeamBox 
                     name='Johnny Appleseed'
                     role='Director'
                     bio='Lorem ipsum dolor sit amet.'
                     image={Lei}
                     />
                     
                </div>
               
            </div>
            <div className="advocacy-section">
                <h2 className="title">Advocacy</h2>
                <p>Brief description</p>
            </div>
        </div>
    );
};
export default MeetTheTeam;