import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import './footer.scss'


const Footer = () => {
    return (
        <footer>
            <div className="contact-card">
				
            <p>LinkedIn: Iris Jitomo</p>
				<p>Email: irisjitomo1997@gmail.com</p>
				<p>Personal Cell: +1(507)202-0275</p>
			</div>
            <div className='navigation'>
                <Link to='/' className='Link'>Home</Link>
                <NavLink to='/projects' className="NavLink">Projects</NavLink>
                <NavLink to='/about-me' className="NavLink">About Me</NavLink>
            </div>
        </footer>
    )
}

export default Footer