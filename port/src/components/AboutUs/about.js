import React from "react";
import './about.css';
import pp from "../../assets/pp2.jpg";

const about = ()=>
    {
        return (

            <section id="about">
                <img src={pp} alt="img" className="image"/>

                <div className="aboutCont">
                    <span className="aboutIntro">Hello there...!! Welcome to My Portfolio.<br/>
                    My name is Ishika Goyal.</span><br/><br/>

            <span className="aboutPa">Hello! I'm Ishika Goyal, a Computer Science student from Tonk, Rajasthan, currently studying at Banasthali Vidyapith, Jaipur, with a CGPA of 9.54 . I am deeply passionate about technology and continuously strive to expand my knowledge and skills in this ever-evolving field. My enthusiasm for tech drives me to explore new technologies and stay updated with industry trends. My short-term goal is to gain practical experience in software development through internships and collaborative projects, enhancing my technical and professional skills. My Long-term goal is to become a lead software engineer, contributing to innovative projects that make a significant impact in the tech industry, and eventually mentor and guide aspiring developers.</span>
                </div>
            </section>
        )
    }

    export default about;