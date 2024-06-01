// import React from "react";
// import './navbar.css';
//  import logo from '../../assets/logo.jpg';
//  import { Link } from 'react-scroll';

// const NavBar = ()=>
//     {
//         return (
//             <nav className="navlist">
//             <Link to="intro" smooth={true} duration={1000} className="navButton">HOME</Link>
//             <Link to="about" smooth={true} duration={1000} className="navButton">ABOUT ME</Link>
//             <Link to="skills" smooth={true} duration={1000} className="navButton">SKILLS</Link>
//             <Link to="education" smooth={true} duration={1000} className="navButton">EDUCATION</Link>
//             <Link to="experience" smooth={true} duration={1000} className="navButton">EXPERIENCE</Link>
//             <Link to="projects" smooth={true} duration={1000} className="navButton">PROJECTS</Link>
//             <Link to="contact" smooth={true} duration={1000} className="navButton">CONTACT</Link>
//             </nav> 
//         )
//     }

//     export default NavBar

import React, { useState } from "react";
import { Link } from "react-scroll";
import './navbar.css';
// import logo from '../../assets/logo.jpg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navlist">
            {/* <img src={logo} alt="LOGO" className="logo"></img> */}
            <button className="menuButton" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navLinks ${isOpen ? "open" : ""}`}>
                <Link to="intro" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>HOME</Link>
                <Link to="about" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>ABOUT ME</Link>
                <Link to="skills" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>SKILLS</Link>
                <Link to="education" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>EDUCATION</Link>
                <Link to="experience" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>EXPERIENCE</Link>
                <Link to="projects" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>PROJECTS</Link>
                {/* <Link to="certificates" smooth={true} duration={1000} className="navButton">CERTIFICATES</Link> */}
                <Link to="contact" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>CONTACT</Link>
            </div>
        </nav>
    );
}

export default NavBar;
