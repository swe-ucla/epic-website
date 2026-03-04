import React from "react";
import './MeetTheTeamBox.css';

const MeetTheTeamBox = ({name, role, image}) => {
    return (
        <div className="member__box">
            <img className="member__image" src={image} alt={name} />
            <div className="member__content">
                <h1 className="member_name">{name}</h1>
                <p className="member__role">{role}</p>
            </div>
        </div>
    );
};
export default MeetTheTeamBox;