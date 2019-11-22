import React from 'react';
import Reunitr from '../images/reunitr.PNG';
import smurfsProject from '../images/smurfsRedux.PNG';
import pintereachDesktop from '../images/pintereachDesktop.PNG';
import pintereachMobile from '../images/pintereachMobile.PNG';

import './projects.scss';

const Projects = () => {
	return (
		<div className="projects-home">
			<div className="overall-background-projects">
				<div className="route-project-card">
					<div className="project-block-1">
						<div className="project-name-img">
							<h1>Reunitr</h1>
							<img src={Reunitr} alt="Reunitr Project" />
						</div>

						<div className="links">
							<p>GitHub Repo: </p>
							<a href="https://github.com/BW-Miracle-Messages/Front-End" target="_blank">
								https://github.com/BW-Miracle-Messages/Front-End
							</a>
							<p>Deployed Site: </p>
							<a href="https://buildweek-reunite.now.sh" target="_blank">
								https://buildweek-reunite.now.sh
							</a>
						</div>
					</div>

					<div className="project-block-2">
						<div className="description">
							<p>
								Working with a team of other React developers, I was the 'lead senior' developer. We
								built as app to display information of Homeless people and where to find them and family
								members can add their own family members for a new case. Volunteers can also register
								and login in order to add, edit, delete cases. We also had a backend work with us. I
								delegated tasks such as, the home page component which displays cases, login/signin
								component to the other React Devs. I was in charge of various CRUD/axios requests. I
								took care of the Edit/Delete Cases Component. Added functionality to Login and Register
								components with Authorization tokens.
							</p>
						</div>
						<div className="libraries">
							<ul>
								<p>Frameworks and Libraries used:</p>
								<li>React</li>
								<li>Redux</li>
								<li>Axios</li>
								<li>React-Router-Dom</li>
							</ul>
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
							<p>GitHub Repo: </p>
							<a
								href="https://github.com/irisjitomo/Sprint-Challenge-State-Management-Smurfs"
								target="_blank"
							>
							https://github.com/irisjitomo/Sprint-Challenge-State-Management-Smurfs
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
							<ul>
								<p>Frameworks and Libraries used:</p>
								<li>React</li>
								<li>Redux</li>
								<li>Thunk</li>
							</ul>
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
							<p>GitHub Repo: </p>
							<a href="https://github.com/build-week-pintereach-2/Marketing-Page" target="_blank">
								https://github.com/build-week-pintereach-2/Marketing-Page
							</a>
							<p>Deployed Site: </p>
							<a href="https://pintereach-buildweek-web22.netlify.com/index.html" target="_blank">
								https://pintereach-buildweek-web22.netlify.com/index.html
							</a>
						</div>
					</div>

					<div className="project-block-2">
						<div className="description">
							<p>
								Working with a team of React and Backend developers, I was in charge of the
								marketing/landing page. I used pure HTML and CSS and used LESS pprepocessor. For the
								images I used google font, and unplash for pictures. Overall very theraputic designing a
								landing page.
							</p>
						</div>
						<div className="libraries">
							<ul>
								<p>Languages and resources used</p>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>LESS</li>
								<li>
									HUMAAANS<br />
									<a href="https://www.humaaans.com/" target="_blank">
										( https://www.humaaans.com/ )
									</a>
								</li>
								<li>
									Google Fonts<br />
									<a href="https://fonts.google.com" target="_blank">
										( https://fonts.google.com )
									</a>
								</li>
								<li>
									Netlify<br />
									<a href="https://www.netlify.com/" target="_blank">
										( https://www.netlify.com/ )
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
