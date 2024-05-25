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
                <span className="introText">I'm <span className="introName">Ishika</span><br/>Website Designer</span>

                <p className="para">I am a skilled web designer with experience in creating visually appealing and user friendly website</p>
                
                <Link><button className="btn">Download Resume</button></Link>
                
                </div>
                <img src={bg} alt='Profile' className="bg"/>
            

            </section>

        )
    }

    export default Intro