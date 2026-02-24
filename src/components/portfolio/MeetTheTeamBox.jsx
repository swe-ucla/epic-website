import React from "react";
import './MeetTheTeamBox.css';

const MeetTheTeamBox = ({name, role, image, bio}) => {
    return (
        <div className="member__box">
            <div className="member__image">
                <img src={image} alt={name} />
            </div>
            <div className="member__content">
                <h2 className="member_name">{name}</h2>
                <p className="member__role">{role}</p>
                <p className="member__bio">{bio}</p>
            </div>
        </div>
    );
};
export default MeetTheTeamBox;