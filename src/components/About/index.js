import React from 'react'
import meImage from "../../assets/images/rich.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About me ...</h1>
      <img src={meImage} className="my-2" style={{ width: "10%" }} alt="myPicture" />
      <div className="my-2">
        <p>
          I am an Engineer by education. After undergraduate school I worked for an EPC firm (rebuilding a port in
          Guiaquil, Ecuador). After several years at the EPC firm I joined a Consulting Engineering firm
          specializing in Offshore Arctic Structures. The projects at this firm consistently required specialized
          software development dealing with the dynamics of structures and floating bodies. While at this
          Consulting firm, an associate convinced me to join his company, developing Engineering Software -
          specifically Piping and Pressure Vessel Stress Analysis software.  These Engineering applications perform their computations according to national and international codes and standards (such as B31.1, B31.3, EN-13480, API-650, ASCE #7 and ASME Section VIII Division 1).
        </p>

        <p>
          I have been with this firm for 35 years, working my way up to partner-owner before we sold to a larger
          corporation. My position requires not only software planning, development, and maintenance - but
          also the supervision of the technical staff, acquisition plans, business plans, technical support,
          documentation, training, and presentations.  Software development efforts involved various technologies and languages (Assembly, Fortran, C, C++, HTML, CSS, Python, and Javascript).
        </p>

        <p>
          I believe you can never stop learning.  I received by Bachelors Degree in 1977 (BS Ocean Engineering - Florida Institute of Technology), my Masters Degree in 1983 (MS Civil Engineering - University of Houston), my MBA in 2019 (Johns Hopkins University), and my Bootcamp Coding Certificate in 2021 (University of Texas). Education keeps the mind sharp, enabling a problem solving mentality that benefits employers and society in general.
        </p>

      </div>
    </section>
  )
}

export default About