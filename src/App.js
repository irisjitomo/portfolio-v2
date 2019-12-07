import React from 'react';
import './App.scss';
import profilePic from './images/profile.png';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Projects from './components/projects';
import About from './components/about';

function App(props) {
	function goToProjectsClick() {
		// let history = useHistory
		props.history.push('/projects');
	}

	function goToAboutMeClick() {
		props.history.push('/about-me');
	}

	return (
		<div className="App">
			<Header />
				<div className="home">
					<div className="profile-card">
						<div className="image">
							<img src={profilePic} alt="profile picture" />
						</div>
						<div className="name">
							<h1>Iris Jitomo</h1>
							<h2>Full Stack Web Developer</h2>
						</div>
					</div>
					<br />

					<div className="cards">

						<div className="about-me-card">
							<h1>Software Engineer</h1>
							<h1>Computer Science</h1>
							<h1>Fullstack Developer</h1>
						</div>
					</div>
				</div>
				
				<div className="AboutMe">
					<About />
					</div>
					<div className="Projects">
						<Projects />
					</div>
			<Footer />
		</div>
	);
}

export default withRouter(App);
