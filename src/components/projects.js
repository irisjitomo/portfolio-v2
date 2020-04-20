import React from 'react';
import Reunitr from '../images/reunitr.PNG';
import smurfsProject from '../images/smurfsRedux.PNG';
import pintereachDesktop from '../images/pintereachDesktop.PNG';
import pintereachMobile from '../images/pintereachMobile.PNG';

import css3 from '../images/icons/css3Black.svg'; //
import html5 from '../images/icons/html5Black.svg'; //
import js from '../images/icons/javascriptBlack.svg'; //
import nodejs from '../images/icons/nodeWhite.svg'; //
import react from '../images/icons/reactBlack.svg'; //
// import reactNative from '../images/icons/icons8-react-native-100.png';
import git from '../images/icons/gitBlack.svg'; //
import gitHub from '../images/icons/githubBlack.svg'; //
import redux from '../images/icons/reduxBlack.svg'; //
// import insom from '../images/icons/insomnia.ico';
import vscode from '../images/icons/vscodeBlack.svg';
import vscodeWhite from '../images/icons/vscodeWhite.svg';
import lessBlack from '../images/icons/lessBlack.svg';
import netlify from '../images/icons/netlify.svg';
import profilePic from '../images/profile.png';

import './projects.scss';

const Projects = () => {
	return (
		<div className="projects-home">
			<div className="subtitle">
				<h1>PROJECTS</h1>
			</div>
			<div className="route-project-card">
				<div className="project-block-1">
					<div className="project-name-img">
						<h1>Reunitr</h1>
						<img src={Reunitr} alt="Reunitr Project" />
					</div>

					<div className="links">
						<a href="https://github.com/BW-Miracle-Messages/Front-End" target="_blank">
							{/* <img src={gitHub} alt="gitHub" /> */}
							GITHUB
						</a>
						{/* <br /> */}
						<a href="https://buildweek-reunite.now.sh" target="_blank">
							{/* <img src={website} alt="site" /> */}
							LINK
						</a>
					</div>
				</div>

				<div className="project-block-2">
					<div className="description">
						<p>
							Working with a team of other React developers, I was the 'lead senior' developer. We built
							an app to display information of Homeless people. Volunteers can register and login in order
							to add, edit, delete cases. I took care of the Edit/Delete Cases Component and added
							functionality to Login and Register components with Authorization tokens.
						</p>
					</div>
					<div className="libraries">
						<p>Frameworks and Libraries used:</p>
						<div className="libraries-icons">
							<img src={react} alt="react" />
							<img src={redux} alt="redux" />
							<img src={git} alt="git" />
							<img src={gitHub} alt="gitHub" />
							<img src={vscode} alt="vscode" />
						</div>
					</div>
				</div>
			</div>

			<div className="route-project-card">
				<div className="project-block-1">
					<div className="project-name-img">
						<h1>Smurfs Form with Redux</h1>
						<img src={smurfsProject} alt="Smurfs Redux Project" />
					</div>
					<div className="links">
						<a
							href="https://github.com/irisjitomo/Sprint-Challenge-State-Management-Smurfs/tree/Iris-Jitomo"
							target="_blank"
						>
							{/* <img src={gitHub} alt="gitHub" /> */}
							GITHUB
						</a>
					</div>
				</div>
				<div className="project-block-2">
					<div className="description">
						<p>
							I built an app using Reudx within 3 hours that deals with forms and state management. Once
							the three form fields have been filled in, it will add to the smurfs array of objects. Once
							the object has been added to the smurfs array, it will automatically display to the DOM.
							Worked with reducers and actions in this project.
						</p>
					</div>
					<div className="libraries">
						<p>Frameworks and Libraries used:</p>
						<div className="libraries-icons">
							<img src={react} alt="react" />
							<img src={redux} alt="redux" />
							<img src={vscode} alt="vscode" />
						</div>
					</div>
				</div>
			</div>

			<div className="route-project-card">
				<div className="project-block-1">
					<div className="project-name-img">
						<h1>Pintereach: Landing Page/About Us Page</h1>
						<div className="pintereach-images">
							<img
								src={pintereachDesktop}
								alt="pintereach desktop landing page"
								className="pintereach-images-1"
							/>
							{/* <img
									src={pintereachMobile}
									alt="pintereach mobile landing page"
									className="pintereach-images-2"
								/> */}
						</div>
					</div>
					<div className="links">
						<a href="https://github.com/build-week-pintereach-2/Marketing-Page" target="_blank">
							{/* <img src={gitHub} alt="gitHub" /> */}
							GITHUB
						</a>
						<br />
						<a href="https://pintereach-buildweek-web22.netlify.com/index.html" target="_blank">
							{/* <img src={website} alt="site" /> */}
							LINK
						</a>
					</div>
				</div>

				<div className="project-block-2">
					<div className="description">
						<p>
							Working with a team of React and Backend developers, I was in charge of the
							marketing/landing page. I used pure HTML and CSS and used the LESS preprocessor. I used
							Google Font for images used on this landing page and Unsplash for the pictures. Overall, I
							found it very therapeutic to design a landing page in this way!
						</p>
					</div>
					<div className="libraries">
						<p>Frameworks and Libraries used:</p>
						<div className="libraries-icons">
							<img src={html5} alt="html5" />
							<img src={css3} alt="css3" />
							<img src={lessBlack} alt="less" />
							<img src={vscode} alt="vscode" />
							<img src={netlify} alt="netlify" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
