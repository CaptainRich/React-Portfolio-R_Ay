import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
import inspectImage from "../../assets/images/mag-glass.svg";

import {HiOutlineDesktopComputer} from "react-icons/hi";
import {FcEngineering} from "react-icons/fc";



function Expertise() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        // This (onClick) handler will toggle the state.
        setIsFlipped( !isFlipped );
    };

  return (
    <section className="my-5" >
      <h1 id="expertise">Capabilities & Skills ...</h1>
      <h1><p></p> </h1>

      <div className="container">

        {/* Define the link to present my resume. */}
        <div className="my-resume">
          {/* Configure this link to open in a new "tab" */}
          <img src={inspectImage} className="my-2" style={{ width: "5%" }} alt="Magnifying Glass" />
          <a href ="https://drive.google.com/file/d/1ckQtj7fc67mH15Ucy8NuR81DeRe0bwQ3/view?usp=sharing"  
                    target="_blank" rel="noopener noreferrer" aria-label="My-Resume" id="my-resume">
                      Click here to inspect my complete Resume. </a>
          <img src={inspectImage} className="my-2" style={{ width: "5%" }} alt="Magnifying Glass" />
        </div>

        {/* Define the overview/summary section, just above the lists that will be animated. */}
        <div className="my-2 justify-content-center">
          <p>
            I am an Engineer focused on (Engineering) software development.  I have developed software in a
            variety of languages, presented usage scenarios in seminars, developed the associated documentation
            and marketing materials, and supported users with application issues.
          </p>
        </div>

        {/* Define two sets of 'bullets', describing the Engineering and Software capabilities. */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="front location-front-item flippers">
              <h5 className="my-5 ">&nbsp; Software Expertise:</h5>
              <ul>
                <li id="skill-list">Languages (C, C++, Fortran, Assembly)</li>
                <li id="skill-list">Front-end web technologies (HTML, CSS, Python, Javascript, React)</li>
                <li id="skill-list">Development tools (Git, npm, Jest, Webpack)</li>
                <li id="skill-list">Database technologies (SQLite, MySQL, MongoDB)</li>
                <li id="skill-list">Back-end technologies (Express, NodeJS)</li>
              </ul>
              <button className="front-button" onClick={handleFlip}>
                  <FcEngineering size={30} color="#ff9800"></FcEngineering>&nbsp; Engineering
              </button>
            </div>

            <div className="back location-back-item flippers">
              <h5 className="my-5">&nbsp; Engineering Expertise:</h5>
              <ul>
                <li id="skill-list">Education (BS Ocean Engineering, MS Civil Engineering, MBA)</li>
                <li id="skill-list">Licensing: Texas Professional Engineer</li>
                <li id="skill-list">Society Membership (ASCE, ASME)</li>
                <li id="skill-list">Skilled Presenter (Webinars and Seminars)</li>
                <li id="skill-list">Competencies (Piping codes, Seismic and Wind standards)</li>
              </ul>
  
              <button className="back-button" onClick={handleFlip}>
                  <HiOutlineDesktopComputer size={30} color="#ff9800"></HiOutlineDesktopComputer>&nbsp; Software
              </button>
            </div>
        </ReactCardFlip>
        
      </div>
    </section>
  )
}

export default Expertise