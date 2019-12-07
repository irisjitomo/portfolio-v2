import React from 'react';
import Reunitr from '../images/reunitr.PNG';
import smurfsProject from '../images/smurfsRedux.PNG';
import pintereachDesktop from '../images/pintereachDesktop.PNG';
import pintereachMobile from '../images/pintereachMobile.PNG';

import redux from '../images/icons/redux.png';
import react from '../images/icons/icons8-react-100.png';
import git from '../images/icons/icons8-git-100.png';
import gitHub from '../images/icons/icons8-github-100.png';
import vscode from '../images/icons/vsCode.ico';
import css3 from '../images/icons/icons8-css3-100.png';
import html5 from '../images/icons/icons8-html-5-100.png';
import less from '../images/icons/lessIcon.png';
import netlify from '../images/icons/netlify.png';
import website from '../images/icons/icons8-website-80.png';

import './projects.scss';

const Projects = () => {
	return (
		<div className="projects-home">
			<div className="subtitle">
				<h1>Here are some of my projects...</h1>
			</div>
				<div className="route-project-card">
					<div className="project-block-1">
						<div className="project-name-img">
							<h1>Reunitr</h1>
							<img src={Reunitr} alt="Reunitr Project" />
						</div>

						<div className="links">
							<a href="https://github.com/BW-Miracle-Messages/Front-End" target="_blank">
								<img src={gitHub} alt="gitHub" />
							</a>
							{/* <br /> */}
							<a href="https://buildweek-reunite.now.sh" target="_blank">
								<img src={website} alt="site" />
							</a>
						</div>
					</div>

					<div className="project-block-2">
						<div className="description">
							<p>
								Working with a team of other React developers, I was the 'lead senior' developer. We
								built an app to display information of Homeless people and where to find them and family
								members can add their own family members for a new case. Volunteers can also register
								and login in order to add, edit, delete cases. We also had a backend work with us. I
								delegated tasks such as, the home page component which displays cases, login/signin
								component to the other React Devs. I was in charge of various CRUD/axios requests. I
								took care of the Edit/Delete Cases Component. Added functionality to Login and Register
								components with Authorization tokens.
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

				<div className="route-project-card-2">
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
								<img src={gitHub} alt="gitHub" />
							</a>
						</div>
					</div>
					<div className="project-block-2">
						<div className="description">
							<p>
								Using Redux, I built an app within 3 hours that deals with forms and state management.
								Once the three forms have been filled in, it will add to the smurfs array of objects.
								Once the object has been added to the smurfs array, it will automatically display to the
								DOM. Worked with reducers and actions in this project.
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

				<div className="route-project-card-3">
					<div className="project-block-1">
						<div className="project-name-img">
							<h1>Pintereach: Landing Page/About Us Page</h1>
							<div className="pintereach-images">
								<img
									src={pintereachDesktop}
									alt="pintereach desktop landing page"
									className="pintereach-images-1"
								/>
								<img
									src={pintereachMobile}
									alt="pintereach mobile landing page"
									className="pintereach-images-2"
								/>
							</div>
						</div>
						<div className="links">
							<a href="https://github.com/build-week-pintereach-2/Marketing-Page" target="_blank">
							<img src={gitHub} alt="gitHub" />
							</a>
							<br />
							<a href="https://pintereach-buildweek-web22.netlify.com/index.html" target="_blank">
							<img src={website} alt="site" />
							</a>
						</div>
					</div>

					<div className="project-block-2">
						<div className="description">
							<p>
								Working with a team of React and Backend developers, I was in charge of the
								marketing/landing page. I used pure HTML and CSS and used LESS preprocessor. For the
								images I used google font, and unsplash for pictures. Overall very therapeutic designing
								a landing page.
							</p>
						</div>
						<div className="libraries">
							<p>Frameworks and Libraries used:</p>
							<div className="libraries-icons">
								<img src={html5} alt="html5" />
								<img src={css3} alt="css3" />
								<img src={less} alt="less" />
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
