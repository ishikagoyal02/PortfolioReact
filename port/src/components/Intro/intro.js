import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from 'react-scroll';

const Intro = () =>
    {
        return (
            <section id="intro">
                <div className="introContent">
                <span className="hello">Hello,</span>
                <br></br>
                <span className="introText">I'm <span className="introName">Ishika</span><br/>
                {/* <ul className="dynamic">
                    <li><span> Web Developer</span></li>
                    <li><span> Open Source Enthusiast</span></li>
                    <li><span> Problem Solver</span></li>
                    <li><span> Website Designer</span></li>
                </ul> */}
                
                Web Developer
                </span>

                <p className="para">I am a skilled web designer with experience in creating visually appealing and user friendly website</p>
                
                <a href={require("../../assets/IshikaGoyal_B.TechCS.pdf")} download="Ishika_Resume.pdf">
                    <button className="btn">Download Resume</button>
                </a>
                
                </div>
                <img src={bg} alt='Profile' className="bg"/>
                

            </section>

        )
    }

    export default Intro