import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Intro = () =>
    {
        return (
            <section id="intro">
                <div className="introContent">
                <span className="hello">Hello,</span>
                <br></br>
                <span className="introText">I'm <span className="introName">Ishika</span><br/>
               

                <TypeAnimation className="dynamic"
                sequence={['Web Developer', 500, 'Open Source Enthusiast', 500, 'Problem Solver', 500]}
                style={{ fontSize: '3rem' }}
                repeat={Infinity}
/>
                </span>

                {/* <p className="para">I am a passionate tech enthusiast dedicated to leveraging technology to create innovative solutions and enhance user experiences</p> */}
                
                <br/>
                <a href={require("../../assets/IshikaGoyal_B.TechCS.pdf")} download="Ishika_Resume.pdf">
                    <button className="btn">Download Resume</button>
                </a>
                
                </div>
                {/* <img src={bg} alt='Profile' className="bg"/> */}
                

            </section>

        )
    }

    export default Intro