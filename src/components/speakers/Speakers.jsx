import React, { useState } from 'react';
import './speakers.css';
import Combs from '../../assets/Combs.png';
import Jones from '../../assets/Jones.png';
import Krider from '../../assets/Krider.png';
import Emami from '../../assets/Emami.jpg';
import Clites from '../../assets/Clites.jpg';
import Filler from '../../assets/filler_pfp.png';
import Planet from '../../assets/planet.svg';
import Star from '../../assets/star.svg';

const SpeakerBio = ({ bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLimit = 750;

  return (
    <p>
      {isExpanded
        ? bio.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
        : bio.substring(0, previewLimit)}
      {!isExpanded && bio.length > previewLimit && (
        <div>
          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={() => setIsExpanded(true)}
          >
            See more ⌄
          </span>
        </div>
      )}
      {isExpanded && (
        <div>
          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={() => setIsExpanded(false)}
          >
            See less ^
          </span>
        </div>
      )}
    </p>
  );
};

const Speakers = () => {
  return (
    <section>
      <div id='speakers'><br/></div>
      <div className="container speaker__content"> 
        <div className="header_and_logo">
          <h2 style={{ padding: '35px' }}>speakers</h2>
          <img className="graphic" src={Planet} alt="Planet"/>
        </div>

        <div className="speaker_row">
          <div className="speaker_column_image">
            <img className='speaker-img' src={Jones} alt={'Kim Jones photo'} style={{ borderRadius: '10%' }}/>
          </div>
          <div className="speaker_column_text">
            <p className="title">Kim Jones</p>
            <p className="subtitle">Executive Coach, Gender Equity Advisor, Keynote Speaker</p>
{/*             <SpeakerBio bio="Before rising to divisional Chief Information Officer at Farmers Insurance Company, Kim held multiple executive level roles at Fortune 250 companies over her 25-year career. She now coaches leaders at all levels, from first-time managers to C-Suite executives, to accelerate their impact and rise to their highest professional potential. In her work with clients, Kim leverages her first-hand experience with overcoming the barriers frequently encountered on the path to senior leadership, specializing in developing the leadership skills to foster strong communication, set vision and strategy, navigate complex interpersonal dynamics, and build high performing teams and inclusive cultures.
In addition, Kim is a keynote speaker; serves as faculty for Signature Leadership and the ITC Women in Leadership, CIO Certification program; facilitates the STEMBridge Leadership Program with the mission to elevate women in male dominant industries; and is an instructor for UCLA Extension’s Technology Management Certificate Program where she facilitates courses on 21st century leadership.
Kim holds a master’s degree in anthropology, MBA in Finance, and a bachelor’s degree in psychology from California State University, Northridge. She is an ACC-certified coach through the International Coaching Federation and is a Gallup certified strengths coach. She holds additional certifications from Hogan Insights, MHS Emotional Intelligence 2.0, and from the Yale University School of Management, Women’s Leadership Program." />
           */}
            <SpeakerBio bio={`Before rising to divisional Chief Information Officer at Farmers Insurance Company, Kim held multiple executive level roles at Fortune 250 companies over her 25-year career. She now coaches leaders at all levels, from first-time managers to C-Suite executives, to accelerate their impact and rise to their highest professional potential. In her work with clients, Kim leverages her first-hand experience with overcoming the barriers frequently encountered on the path to senior leadership, specializing in developing the leadership skills to foster strong communication, set vision and strategy, navigate complex interpersonal dynamics, and build high performing teams and inclusive cultures.

In addition, Kim is a keynote speaker; serves as faculty for Signature Leadership and the ITC Women in Leadership, CIO Certification program; facilitates the STEMBridge Leadership Program with the mission to elevate women in male dominant industries; and is an instructor for UCLA Extension’s Technology Management Certificate Program where she facilitates courses on 21st century leadership.

Kim holds a master’s degree in anthropology, MBA in Finance, and a bachelor’s degree in psychology from California State University, Northridge. She is an ACC-certified coach through the International Coaching Federation and is a Gallup certified strengths coach. She holds additional certifications from Hogan Insights, MHS Emotional Intelligence 2.0, and from the Yale University School of Management, Women’s Leadership Program.`} />

          </div>
        </div>

        <div className="speaker_row backward">
          <div className="speaker_column_text">
            <p className="title">Samantha Combs</p>
            <p className="subtitle">Senior Data Scientist at SAP</p>
{/*             <SpeakerBio bio="Samantha Combs is a Senior Data Scientist at SAP, a global leader in enterprise software solutions that power the world’s largest businesses. She is part of SAP’s central architecture team, where she develops proof-of-concept (POC) solutions that drive innovation across the SAP Business Network, the world’s largest B2B marketplace connecting manufacturers, suppliers, and buyers. Currently, she is focused on leveraging AI-driven agents to streamline enterprise processes.
              
Samantha’s experience spans multiple domains within SAP. She has worked on SAP Joule, an enterprise AI assistant, and contributed to optimization algorithms for research and production use cases. She began her SAP career with SAP.iO, supporting internal and external startups in refining their marketing campaigns. Passionate about AI, supply chain intelligence, and applied machine learning, Samantha thrives at the intersection of innovation and practical business impact. She is based in Newport Beach, California." />
          */}
            <SpeakerBio bio={`Samantha Combs is a Senior Data Scientist at SAP, a global leader in enterprise software solutions that power the world’s largest businesses. She is part of SAP’s central architecture team, where she develops proof-of-concept (POC) solutions that drive innovation across the SAP Business Network, the world’s largest B2B marketplace connecting manufacturers, suppliers, and buyers. Currently, she is focused on leveraging AI-driven agents to streamline enterprise processes.

Samantha’s experience spans multiple domains within SAP. She has worked on SAP Joule, an enterprise AI assistant, and contributed to optimization algorithms for research and production use cases. She began her SAP career with SAP.iO, supporting internal and external startups in refining their marketing campaigns. Passionate about AI, supply chain intelligence, and applied machine learning, Samantha thrives at the intersection of innovation and practical business impact. She is based in Newport Beach, California.`} />

          </div>
          <div className="speaker_column_image">
            <img className='speaker-img' src={Combs} alt={'Ayonnah Tinsley photo'} style={{ borderRadius: '10%' }}/>
          </div>
        </div>

        <div className="speaker_row">
          <div className="speaker_column_image">
            <img className='speaker-img' src={Krider} alt={'Kailin Kearns photo'} style={{ borderRadius: '10%' }}/>
          </div>
          <div className="speaker_column_text">
            <p className="title">Elizabeth Krider</p>
            <p className="subtitle">Not Your Typical Caltech PhD</p>
{/*             <SpeakerBio bio="Dr. Liz Krider, a Caltech PhD in Chemistry and founder of KSA Catalyst, has dedicated her career to helping students transform their interests into meaningful projects and internships, with her mentees going on to thrive at prestigious institutions including Stanford, Yale, and Cornell. Drawing from her extensive background in scientific research and her experience as Caltech's Director of Government and Community Relations, she has spent over two decades mentoring students through various organizations including Girl Scouts, Boy Scouts, and robotics programs. Dr. Krider has become nationally recognized for her innovative approach to independent projects, which have become a key differentiator in college admissions and internship placements. She is the creator of the Catalyst Research Program, which teaches high school students how to conduct undergraduate-level laboratory research.
              
She’s not your typical Caltech PhD.
              
Her unique combination of academic expertise and practical mentorship has earned her multiple awards for environmental advocacy, community service, and teaching in Southern California, while her work continues to shape how students develop purpose through hands-on experiences. Through her keynote talk and book 'Purpose and Paychecks: How to Get the Best ROI in College', she inspires undergraduates to embrace uncertainty while cultivating purpose, helping them secure vital research positions and internships that define their career paths.
              
Based in Southern California where she enjoys mountain biking and volunteering with her husband, Dr. Krider actively shares her insights through speaking engagements at national conferences, association meetings, and college campuses, while also hosting small-group workshops for parents, students, and community leaders." />
           */}
          <SpeakerBio bio={`Dr. Liz Krider, a Caltech PhD in Chemistry and founder of KSA Catalyst, has dedicated her career to helping students transform their interests into meaningful projects and internships, with her mentees going on to thrive at prestigious institutions including Stanford, Yale, and Cornell. Drawing from her extensive background in scientific research and her experience as Caltech's Director of Government and Community Relations, she has spent over two decades mentoring students through various organizations including Girl Scouts, Boy Scouts, and robotics programs. Dr. Krider has become nationally recognized for her innovative approach to independent projects, which have become a key differentiator in college admissions and internship placements. She is the creator of the Catalyst Research Program, which teaches high school students how to conduct undergraduate-level laboratory research.

She’s not your typical Caltech PhD.

Her unique combination of academic expertise and practical mentorship has earned her multiple awards for environmental advocacy, community service, and teaching in Southern California, while her work continues to shape how students develop purpose through hands-on experiences. Through her keynote talk and book 'Purpose and Paychecks: How to Get the Best ROI in College', she inspires undergraduates to embrace uncertainty while cultivating purpose, helping them secure vital research positions and internships that define their career paths.

Based in Southern California where she enjoys mountain biking and volunteering with her husband, Dr. Krider actively shares her insights through speaking engagements at national conferences, association meetings, and college campuses, while also hosting small-group workshops for parents, students, and community leaders.`} />

          </div>
        </div>

        <div className="speaker_row backward">
          <div className="speaker_column_text">
            <p className="title">Tyler Clites</p>
            <p className="subtitle">Assistant Professor of Mechanical and Aerospace Engineering, Orthopaedic Surgery</p>
            <SpeakerBio bio={`Tyler Clites is an Assistant Professor of Mechanical and Aerospace Engineering at UCLA, with a joint appointment in the Department of Orthopaedic Surgery at UCLA’s David Geffen School of Medicine. Prof. Clites’ current research in rehabilitation and augmentation technology is focused on synchronizing the efforts of surgeons and mechatronic engineers to enable co-development of body and machine, in pursuit of bionic performance that is superior to what is possible with mechatronics alone. In these efforts, he has had the privilege to work with amazing mentors, collaborators, trainees, and research participants from many different backgrounds, all of whom have helped shape his understanding of how to work on a diverse engineering team and foster an inclusive research environment.

Prof. Clites grew up in rural New Hampshire before moving to Boston, Massachusetts for college. After completing his undergraduate degree, he earned his Ph.D. in 2018 from the Harvard/MIT program in Health Sciences and Technology, where he led the development of a novel surgical procedure for limb amputation to improve neural interfacing and control. He completed a postdoc in Mechanical Engineering and Robotics at the University of Michigan, before starting at UCLA in 2020.`} />
          </div>
          <div className="speaker_column_image">
            <img className='speaker-img' src={Clites} alt={'Tyler Clites photo'} style={{ borderRadius: '10%' }}/>
          </div>
        </div>

        <div className="speaker_row">
          <div className="speaker_column_image">
            <img className='speaker-img' src={Emami} alt={'Fatima Emami photo'} style={{ borderRadius: '10%' }}/>
          </div>
          <div className="speaker_column_text">
            <p className="title">Fatima Sophia Emami</p>
            <p className="subtitle">Global Technology Manager at PPG Industries</p>
          <SpeakerBio bio={`Fatima Sophia Emami is a distinguished leader within the field of Aerospace, currently serving as a Global Technology Manager at PPG Industries, Inc. Her career trajectory encompasses a diverse range of roles, through which she has developed a robust expertise in research and development (R&D), technology innovation, product launch, and strategic leadership. Fatima's successful product developments have earned her recognition on both company-wide and external platforms. She is passionate about science, personal developments, mentorship and effective leadership. A passionate advocate for science, personal growth, mentorship, and effective leadership, Fatima is dedicated to fostering an environment of continuous learning. As an immigrant who began her academic journey in the United States in 2006, she embraces the belief that every experience in life presents a valuable teaching moment, contributing to personal and professional development.

Fatima holds a Bachelor’s and Master’s degree in Chemical Engineering, as well as a Ph.D. in Polymer Engineering from the University of Akron. Additionally, she completed her postdoctoral fellowship at Northwestern University prior to joining PPG.`} />

          </div>
        </div>

        <img className="graphic" src={Star} alt="Two stars clustered together"/>
      </div>
    </section>
  );
};

export default Speakers;
