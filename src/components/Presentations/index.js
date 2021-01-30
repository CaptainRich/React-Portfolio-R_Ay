import React from 'react'
import {FcVoicePresentation} from "react-icons/fc";

function Presentations() {

  return (
    <section className="my-5" >
      <h1 id="presentation">A few interesting presentations ...  &nbsp; &nbsp;<FcVoicePresentation size={45}></FcVoicePresentation></h1>

      <div className="my-2 justify-content-center">
        <p>
          Listed below are links to a few of my more interesting (webinar) presentations.  Each of these 
          presentations runs about an hour.  These are scaled down versions of 4-hour sessions presented
          in-person to large groups around the world.
        </p>

        <p>
          <ul class="Me">
            <li> <a href="https://connect.hexagonppm.com/ImprovedEquipmentModelingWithCAESARII-Video">Equipment Modeling in CAESAR II</a></li>
            <li> <a href="https://connect.hexagonppm.com/StaticLoadCaseEditor-Video">Static Load Case Setup in CAESAR II</a></li>
            <li><a href="https://connect.hexagonppm.com/CAESARIIWebinarUsingLoadCaseMultiplierstoExpandLoadCondition-Video">Using Load Case Multipliers in CAESAR II</a></li>
            <li><a href="https://connect.hexagonppm.com/CAESARIIWebinarAlternateSustainedCase-Session1-Video">The Alternate Sustained Case</a></li>
          </ul>
        </p>

      </div>
    </section>
  )
}

export default Presentations