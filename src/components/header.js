import React from 'react';
import './header.scss';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<header>
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<h1 className="nav-title">Iris Jitomo</h1>
					<ul className="nav-items">
						<li className="nav-item">
							<Link
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
								to="AboutMe"
								// activeClassName="selected"
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
								to="skills"
								// activeClassName="selected"
							>
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
								to="Projects"
								// activeClassName="selected"
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
								to="Contact"
								// activeClassName="selected"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
