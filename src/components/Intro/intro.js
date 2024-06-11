import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import logoHome from '../../assets/logoHome.mp4';

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
                {/* Uncomment the video if needed */}
                {/* <video src={logoHome} autoPlay="true" loop muted className="vdo"></video> */}
            </div>
            <div className="animated-letter">I</div>
        </section>
    )
}

export default Intro;
