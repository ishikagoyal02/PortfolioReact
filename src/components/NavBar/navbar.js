import React from "react";
import './navbar.css';
 import logo from '../../assets/logo.jpg';
 import { Link } from 'react-scroll';

const NavBar = ()=>
    {
        return (
            <nav className="navlist">
            {/* <img src={logo} alt="LOGO" className="logo"></img> */}
           
            <Link to="/" smooth={true} duration={1000} className="navButton">HOME</Link>
            <Link to="about" smooth={true} duration={1000} className="navButton">ABOUT ME</Link>
            <Link to="skills" smooth={true} duration={1000} className="navButton">SKILLS</Link>
            <Link to="education" smooth={true} duration={1000} className="navButton">EDUCATION</Link>
            <Link to="experience" smooth={true} duration={1000} className="navButton">EXPERIENCE</Link>
            <Link to="projects" smooth={true} duration={1000} className="navButton">PROJECTS</Link>
            <Link to="certificates" smooth={true} duration={1000} className="navButton">CERTIFICATES</Link>
            <Link to="contact" smooth={true} duration={1000} className="navButton">CONTACT</Link>
            </nav> 
        )
    }

    export default NavBar