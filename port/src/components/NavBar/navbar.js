import React from "react";
import './navbar.css';

const NavBar = ()=>
    {
        return (
            <div className="navlist">
                <button className="navButton">HOME</button>
                <button className="navButton">ABOUT ME</button>
                <button className="navButton">SKILLS</button>
                <button className="navButton">EDUCATION</button>
                <button className="navButton">EXPERIENCE</button>
                <button className="navButton">PROJECTS</button>
                <button className="navButton">CERTIFICATES</button>
                <button className="navButton">CONTACT</button>
            </div> 
        )
    }

    export default NavBar