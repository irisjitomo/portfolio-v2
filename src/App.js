import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import TopImage from './components/topImage';

function App() {


	return (
		<div className="App">
			<Header />
			<TopImage />
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
