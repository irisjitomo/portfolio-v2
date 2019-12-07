import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './footer.scss';

import gitHub from '../images/icons/icons8-github-100.png';
import email from '../images/icons/email.png';
import linkedIn from '../images/icons/linkedin.png';

const Footer = () => {
	return (
		<footer>
			<div className="footer-info">
				<div className="footer-contact-card">
					<p>© Iris Jitomo 2019. All Rights Reserved.</p>
				</div>
				<div className="contact-cards-info">
					<a href="mailto:irisjitomo@yahoo.com" target="_blank">
						<img src={email} alt="send email" />
					</a>
					<a href="https://github.com/irisjitomo" target="_blank">
						<img src={gitHub} alt="gitHub" />
					</a>
					<a href="https://www.linkedin.com/in/iris-jitomo-ab891b191/" target="_blank">
						<img src={linkedIn} alt="linkedIn" />
					</a>
				</div>
                <br />
                <div className="miscellaneous">
                <a target="_blank" href="/icons/set/html-5">Html 5</a>, <a target="_blank" href="/icons/set/css3">CSS3</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
			</div>
		</footer>
	);
};

export default Footer;
