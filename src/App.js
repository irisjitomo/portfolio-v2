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
			<Switch>
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/about-me" component={About} />

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
						<div className="project-card">
							<h1>Projects</h1>
							<h3>Take a look at some of the projects I built.</h3>
							<h4>See my projects:</h4>
							<button onClick={goToProjectsClick} className="button">Projects</button>
						</div>

						<div className="about-me-card">
							<h1>About Me</h1>
							<h3>Learn more about me, how I learned to be a fullstack developer.</h3>
							<h4>Also see my skillset in Web Development.</h4>
							<button onClick={goToAboutMeClick} className="button">About Me</button>
						</div>
					</div>
				</div>
			</Switch>
			<Footer />
		</div>
	);
}

export default withRouter(App);
