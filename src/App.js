import React from 'react';
import './App.scss';
import profilePic from './images/profile.png';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import TopImage from './components/topImage';

function App(props) {


	return (
		<div className="App">
			<Header />
			<TopImage />
			{/* 			
			<div className="home">
				<div className="profile-card">
					<div className="image">
						<img src={profilePic} alt="profile picture" />
					</div>
					<div className="name">
						<h2>Iris Jitomo</h2>
						<h4>Full Stack Web Developer</h4>
					</div>
				</div>
				<br />

				<div className="cards">
					<div className="about-me-card">
						<h3>Software Engineer</h3>
						<h3>Computer Science</h3>
						<h3>Fullstack Developer</h3>
					</div>
				</div>
			</div> */}

			<div id="AboutMe">
				<About />
			</div>
			<div id="Projects">
				<Projects />
			</div>
			<div id="Contact">
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default withRouter(App);
