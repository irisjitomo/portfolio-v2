import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <div className="header-whole">
        <nav className='header'>
            {/* <div className="header-links"> */}
            {/* <Link to='/'>Home </Link>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/about-me'>About Me</NavLink> */}
            {/* </div> */}
        </nav>
        </div>
    )
}

export default Header