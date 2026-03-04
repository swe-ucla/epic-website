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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit interdum nunc vehicula pharetra. 
                    Aliquam posuere ex mi, sit amet semper velit aliquet at. Vivamus dictum fermentum justo, sit amet condimentum 
                    arcu dictum id. Nam fermentum arcu non posuere vehicula. Proin eleifend leo nunc, vel dapibus risus fermentum 
                    at. Nulla aliquam ex eget quam porta lacinia. Integer egestas tincidunt faucibus. Pellentesque ut augue 
                    dapibus, vulputate neque a, rutrum nulla. Quisque feugiat dapibus ex sed sagittis. Sed et augue hendrerit, 
                    dignissim arcu eu, suscipit ante. Sed mattis diam sed massa hendrerit maximus. Sed ac porttitor tortor.
                     Nulla facilisi. Suspendisse consectetur, dolor.
                </p>
            </div>
        </div>
    );
};
export default MeetTheTeam;