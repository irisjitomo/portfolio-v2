import React from 'react';
import profileBench from '../images/profile-bench.jpg';

import css3 from '../images/icons/icons8-css3-100.png'
import html5 from '../images/icons/icons8-html-5-100.png'
import js from '../images/icons/icons8-javascript-100.png'
import nodejs from '../images/icons/icons8-nodejs-100.png'
import react from '../images/icons/icons8-react-100.png'
import reactNative from '../images/icons/icons8-react-native-100.png'
import git from '../images/icons/icons8-git-100.png'
import gitHub from '../images/icons/icons8-github-100.png'
import redux from '../images/icons/redux.png'
import insom from '../images/icons/insomnia.ico'
import vscode from '../images/icons/vsCode.ico'
import less from '../images/icons/lessIcon.png'
import netlify from '../images/icons/netlify.png'

import './about.scss'
const About = () => {
	return (
		<div>
		<div className="about-home">
			<div className="aboutMeCard">
				<div className='aboutMe'>

					<h1>About Me:</h1>
					<h3>
						My name is Iris Jitomo. I attended Lambda School's FullStack Web Development Program. I became a
						Team Lead for part-time students for cohorts below me. I have knowledge in Web
						Development/Coding in both front-end and back-end and knowledge in Computer Science. I'm in the
						process of adding more to my skill-set especially React Libraries. I'm always willing to learn
						and to put into practice whatever is required of me.
					</h3>
				</div>
				<div className='aboutMe'>
					<h1>Why Tech? Why Web Development?</h1>
					<h3>
						This industry is growing. I remember before attending Lambda School, there was this new craze or trend on Youtube
						which was coding/web development/computer science. Lots of self taught developers making videos about them 
						being successful in their careers. I wanted to be like them, I want to be in this industry. I self taught myself
						beginner code but I wanted to know more to be hireable, to be able to fit in this growing industry.
					</h3>
				</div>
			</div>

			<div className="skills-cards">
			<img src={html5} alt="html5" />
			<img src={js} alt="javascript" />
			<img src={css3} alt="css3" />
			<img src={less} alt="less-compiler" />
			<img src={nodejs} alt="nodeJS" />
			<img src={reactNative} alt="reactNative" />
			<img src={react} alt="react" />
			<img src={redux} alt='redux' />
			<img src={git} alt="git" />
			<img src={gitHub} alt="gitHub" />
			<img src={insom} alt="insomnia" />
			<img src={vscode} alt="vscode" />
			<img src={netlify} alt="netlify" />
			</div>
		</div>
		</div>
	);
};

export default About;
