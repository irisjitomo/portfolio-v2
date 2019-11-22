import React from 'react';
import profileBench from '../images/profile-bench.jpg';

import './about.scss'

const About = () => {
	return (
		<div>
		<div className="about-home">
			<div className="aboutMeCard">
				<div className='aboutMe'>
					<h1>About Me:</h1>
					<h3>
						My name is Iris Jitomo. I attended Lambda School's FullStack Web Developement Program. Became a
						Team Lead for part-time students for cohorts below me. I have knowledge in Web
						Developement/Coding in both front-end and back-end and knowledge in Computer Science. I'm in the
						process of adding more to my skillset especially React Libraries. I'm always willing to learn
						and to put into practice whatever is required of me.
					</h3>
				</div>
				<div className="image-card">
					<img src={profileBench} alt="profile on bench" />
				</div>
			</div>

			<div className="skills-cards">
				<div className="skill-card1">
					<ul>
						<h2>Skills: </h2>
						<h3>Languages: </h3>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript</li>
						<br />

						<h3>Libraries and Frameworks: </h3>
						<h5>Front End:</h5>
						<li>ReactJS</li>
						<li>React-Native</li>
						<li>Redux</li>
						<li>AJAX requests</li>
						<li>LESS/SASS</li>
						<li>Semantic UI</li>
						<li>Styled-Components</li>
						<li>Functional/Class Components</li>
					</ul>
				</div>
				<div className="skill-card2">
					<ul>
						<h5>Back End:</h5>
						<li>Node</li>
						<li>Express</li>
						<li>CRUD requests</li>
						<li>Javascript Web Token</li>
						<li>Cookies</li>
						<li>Knex</li>
						<li>Bcrypt/BcryptJS</li>
						<br />

						<h3>Database: </h3>
						<li>SQLite3</li>
						<br />

						<h3>Other Skills: </h3>
						<li>Git/GitBash</li>
						<li>VSCode</li>
						<li>Netlify</li>
						<li>Heroku</li>
					</ul>
				</div>
			</div>
		</div>
		</div>
	);
};

export default About;
