import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import logoHome from '../../assets/logoHome.mp4';
import linkedln from "../../assets/linkedln.png";
import github from "../../assets/github.png";
import linktree from "../../assets/linktree.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <br />
                <span className="introText">I'm <span className="introName">Ishika</span><br />
                    <TypeAnimation className="dynamic"
                        sequence={['Web Developer', 500, 'Open Source Enthusiast', 500, 'Problem Solver', 500]}
                        style={{ fontSize: '3rem' }}
                        repeat={Infinity}
                    />
                </span>
                <br />
                <a href={require("../../assets/IshikaGoyal_B.TechCS.pdf")} download="Ishika_Resume.pdf">
                    <button className="btn">Download Resume</button>
                </a>

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
           
        </section>
    )
}

export default Intro;
