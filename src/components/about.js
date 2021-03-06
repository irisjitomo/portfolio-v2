import React from 'react';

import css3 from '../images/icons/css3White.svg'; //
import html5 from '../images/icons/html5White.svg'; //
import js from '../images/icons/javascriptWhite.svg'; //
import nodejs from '../images/icons/nodeWhite.svg'; //
import react from '../images/icons/reactWhite.svg'; //
// import reactNative from '../images/icons/icons8-react-native-100.png';
import git from '../images/icons/gitWhite.svg'; //
import githubWhite from '../images/icons/githubWhite.svg'; //
import redux from '../images/icons/reduxWhite.svg'; //
// import insom from '../images/icons/insomnia.ico';
import vscode from '../images/icons/vscodeWhite.svg';
import less from '../images/icons/lessWhite.svg';
import scss from '../images/icons/sass-lang.svg';
import netlify from '../images/icons/netlifyWhite.svg';
import profilePic from '../images/profile.png';
import python from '../images/icons/icons8-python.svg'
import express from '../images/icons/expressjs.svg'
import pg from '../images/icons/postgresql.svg'
import jwt from '../images/icons/jsonwebtoken.svg'

import { Tooltip } from '@material-ui/core'

import './about.scss';
const About = () => {
	return (
		<div>
			<div className="about-home">
				<div className="aboutMeCard">
					<div className="image">
						<img src={profilePic} alt="profile pic" />
					</div>
					<div className="aboutMeCards">
						<div className="aboutMe">
							<h1>About Me:</h1>
							<h4>
								My name is Iris Jitomo, I'm a Full Stack Web Developer that recently graduated from
								Lambda School's intensive 9-month Full Stack Web Development Program. In addition to
								building over 50+ fully-functional web applications at Lambda and completing over 960
								hours of code, I also served as a Teaching Assistant for part-time Lambda School
								students. I have knowledge in Web Development in both front-end and back-end and
								additionally, Computer Science fundamentals. I'm in the process of adding more to my
								skill-set, especially React Libraries. I'm always willing to learn and to put into
								practice whatever is required of me.
							</h4>
						</div>
						<div className="aboutMe">
							<h1>Why Tech? Why Web Development?</h1>
							<h4>
								This industry is growing. I remember discovering the field through the Youtube coders,
								web developers, and computer scientists sharing their process and what made them
								successful in their careers. I wanted to be like them and create amazing products too. I
								self taught myself beginner HTML/CSS and Python and enrolled in Lambda in July 2019 to
								learn even more skills to be able to contribute to this growing industry.
							</h4>
						</div>
					</div>
				</div>
				<div className="skillsTitle" id="skills">
					<h1>SKILLS</h1>
				</div>
				<div className="skills-cards">
					<Tooltip title='HTML5' arrow enterTouchDelay={50}>
					<img src={html5} alt="html5" />
					</Tooltip>
					<Tooltip title='CSS3' arrow enterTouchDelay={50}>
					<img src={css3} alt="css3" />
					</Tooltip>
					<Tooltip title='JavaScript' arrow enterTouchDelay={50}>
					<img src={js} alt="javascript" />
					</Tooltip>
					<Tooltip title='SASS/SCSS' arrow enterTouchDelay={50}>
					<img src={scss} alt="SCSS/SASS" />
					</Tooltip>
					<Tooltip title='LESS' arrow enterTouchDelay={50}>
					<img src={less} alt="less-compiler" />
					</Tooltip>
					<Tooltip title='ReactJS' arrow enterTouchDelay={50}>
					<img src={react} alt="react" />
					</Tooltip>
					<Tooltip title='Redux' arrow enterTouchDelay={50}>
					<img src={redux} alt="redux" />
					</Tooltip>
					<Tooltip title='Node.js' arrow enterTouchDelay={50}>
					<img src={nodejs} alt="nodeJS" />
					</Tooltip>
					<Tooltip title='Express.js' arrow enterTouchDelay={50}>
					<img src={express} alt="Express.Js" />
					</Tooltip>
					<Tooltip title='JWT (Json Web Token)' arrow enterTouchDelay={50}>
					<img src={jwt} alt="Json Web Token" />
					</Tooltip>
					<Tooltip title='PostgresSQL' arrow enterTouchDelay={50}>
					<img src={pg} alt="PostgresSQL" />
					</Tooltip>
					<Tooltip title='Python' arrow enterTouchDelay={50}>
					<img src={python} alt="python" />
					</Tooltip>
					<Tooltip title='GIT' arrow enterTouchDelay={50}>
					<img src={git} alt="git" />
					</Tooltip>
					<Tooltip title='Github' arrow enterTouchDelay={50}>
					<img src={githubWhite} alt="gitHub" />
					</Tooltip>
					<Tooltip title='VSCode' arrow enterTouchDelay={50}>
					<img src={vscode} alt="vscode" />
					</Tooltip>
					<Tooltip title='Netlify' arrow enterTouchDelay={50}>
					<img src={netlify} alt="netlify" />
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default About;
