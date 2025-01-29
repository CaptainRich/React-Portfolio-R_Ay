
import React from 'react';
import {HiOutlineMail} from "react-icons/hi";
import {FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";


function Footer() {

    return (

        <div className="footer">
            Contact Links:  &nbsp; &nbsp;&nbsp; &nbsp;
            <a href="mailto:rich.ay3896@gmail.com">Email <HiOutlineMail size={30} color="#5f1c25ff" ></HiOutlineMail>&nbsp; &nbsp;</a>
            <a href="https://www.linkedin.com/in/richardayjr">LinkedIn <FaLinkedin size={30} color="#5f1c25ff"></FaLinkedin>&nbsp; &nbsp;</a>
            <a href="https://github.com/CaptainRich">GitHub <FaGithub size={30} color="#5f1c25ff"></FaGithub>&nbsp; &nbsp;</a>
            <a href="https://twitter.com/@ARich_54">X <FaTwitter size={30} color="#5f1c25ff"></FaTwitter>&nbsp; &nbsp;</a>

        </div>

)}

export default Footer;

