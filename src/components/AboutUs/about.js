

import React from "react";
import './about.css';
import pp from "../../assets/pp2.jpg";
import { Link } from "react-scroll";
import linkedln from "../../assets/linkedln.png";
import github from "../../assets/github.png";
import linktree from "../../assets/linktree.png";

const About = () => {
  return (
    <Link to="about" smooth={true} duration={1000}>
      <section id="about">
      <div className="aboutIntro">
      <div className="title"><span>Welcome to my portfolio</span></div>
          </div>
      
         <div className="cont">
         <img src={pp} alt="img" className="image"/>
         
         <div className="aboutCont">
          
           <span className="aboutPa">
             Hello! I'm Ishika Goyal, a Computer Science student from Tonk, Rajasthan, currently studying at Banasthali Vidyapith, Jaipur, with a CGPA of 9.54. I am deeply passionate about technology and continuously strive to expand my knowledge and skills in this ever-evolving field. My enthusiasm for tech drives me to explore new technologies and stay updated with industry trends.
             <br/> <br/> My short-term goal is to gain practical experience in software development through internships and collaborative projects, enhancing my technical and professional skills. My long-term goal is to become a lead software engineer, contributing to innovative projects that make a significant impact in the tech industry, and eventually mentor and guide aspiring developers.
           </span>
 
           <div className="contacts">
              <a href="https://linktr.ee/ishika_goyal02" target="_blank" rel="noopener noreferrer">
              <img src={linktree} className="cont linktree" alt="Linktree" />
            </a>
            
            <a href="https://www.linkedin.com/in/ishika-goyal-375112221/" target="_blank" rel="noopener noreferrer">
              <img src={linkedln} className="cont linkedin" alt="LinkedIn" />
            </a>
            
            <a href="https://github.com/ishikagoyal02" target="_blank" rel="noopener noreferrer">
              <img src={github} className="cont github" alt="GitHub" />
            </a>
             
           </div>
         </div>
         </div>
      </section>
    </Link>
  )
}

export default About;