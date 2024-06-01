import { Link } from "react-scroll";
import React from "react";
import './education.css';
import bv from "../../assets/bv.jpg";
import school from "../../assets/school.jpg";

const Education = () => {
    return (
        <Link to="education" smooth={true} duration={1000}>
           <section id="education">
                <div class="title">MY EDUCATION</div>  
            <div class="content">
                <div class="box">
                    <img src={bv} alt="BV" className="img"/>
                    <div className="boxCont">
                        <h3>B.Tech CSE</h3>
                        <h4>2021-Present</h4>
                        <p>I am pursuing Bachelor of Technology in Computer Science and Engineering from Banasthali University.</p>
                    </div>
                </div>

                <div class="box">
                    <img src={school} alt="SSPS" className="img"/>
                    <div className="boxCont">
                        <h3>Intermediate (12th)</h3>
                        <h4>2019-21</h4>
                        <p>I did my Intermediate in Science stream from Saint Soldier Public School (CBSE), Tonk and secured 95.6%.</p>
                    </div>
                </div>
            </div>
           </section>
        </Link>
    );
}

export default Education;





