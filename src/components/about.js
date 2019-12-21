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
import vscodeWhite from '../images/icons/vscodeWhite.svg'
import less from '../images/icons/lessWhite.svg';
import netlify from '../images/icons/netlifyWhite.svg';
import profilePic from '../images/profile.png';

import './about.scss';
const About = () => {
	return (
		<div>
			<div className="about-home">
				<div className="aboutMeCard">
					<div className="image">
						<img src={profilePic} alt="profile picture" />
					</div>
					<div className="aboutMeCards">
						<div className="aboutMe">
							<h1>About Me:</h1>
							<h4>
								My name is Iris Jitomo. I attended Lambda School's FullStack Web Development Program. I
								became a Team Lead for part-time students for cohorts below me. I have knowledge in Web
								Development/Coding in both front-end and back-end and knowledge in Computer Science. I'm
								in the process of adding more to my skill-set especially React Libraries. I'm always
								willing to learn and to put into practice whatever is required of me.
							</h4>
						</div>
						<div className="aboutMe">
							<h1>Why Tech? Why Web Development?</h1>
							<h4>
								This industry is growing. I remember before attending Lambda School, there was this new
								craze or trend on Youtube which was coding/web development/computer science. Lots of
								self taught developers making videos about them being successful in their careers. I
								wanted to be like them, I want to be in this industry. I self taught myself beginner
								code but I wanted to know more to be hireable, to be able to fit in this growing
								industry.
							</h4>
						</div>
					</div>
				</div>
				<div className="skillsTitle" id="skills">
					<h1>SKILLS</h1>
				</div>
				<div className="skills-cards"  >
					<img src={html5} alt="html5" />
					<img src={js} alt="javascript" />
					<img src={css3} alt="css3" />
					<img src={less} alt="less-compiler" />
					<img src={nodejs} alt="nodeJS" />
					{/* <img src={reactNative} alt="reactNative" /> */}
					<img src={react} alt="react" />
					<img src={redux} alt="redux" />
					<img src={git} alt="git" />
					<img src={githubWhite} alt="gitHub" />
					<img src={vscode} alt="vscode" />
					<img src={netlify} alt="netlify" />
				</div>
			</div>
		</div>
	);
};

export default About;
