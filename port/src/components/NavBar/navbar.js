import React from "react";
import './navbar.css';
 import logo from '../../assets/logo.jpg';
 import { Link } from 'react-scroll';

const NavBar = ()=>
    {
        return (
            <nav className="navlist">
            {/* <img src={logo} alt="LOGO" className="logo"></img> */}
                <Link className="navButton">HOME</Link>
                <Link className="navButton">ABOUT ME</Link>
                <Link className="navButton">SKILLS</Link>
                <Link className="navButton">EDUCATION</Link>
                <Link className="navButton">EXPERIENCE</Link>
                <Link className="navButton">PROJECTS</Link>
                <Link className="navButton">CERTIFICATES</Link>
                <Link className="navButton">CONTACT</Link>
            </nav> 
        )
    }

    export default NavBar