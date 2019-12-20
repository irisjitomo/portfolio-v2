import React from 'react';
import './contact.scss';

import gitHub from '../images/icons/icons8-github-100.png';
import email from '../images/icons/email-blk.png';
import linkedIn from '../images/icons/linkedIn-blk.jpg';

const Contact = () => {
	return (
		<div className="home-contact">
			<div className="contact-block-1">
				<div className="title">
					<h1>CONTACT</h1>
				</div>
			</div>
			<br />

			<div className="contact-block-2">
				<div className="contact-cards">
					<div className="contact-about-me-card">
						<a href="mailto:irisjitomo@yahoo.com" target="_blank">
							<img src={email} alt="send email" />
						</a>
                        <a href="mailto:irisjitomo@yahoo.com" target="_blank">
						<h3>Email</h3>

						</a>
					</div>
				</div>
				<div className="contact-cards">
					<div className="contact-about-me-card">
						<a href="https://www.linkedin.com/in/iris-jitomo-ab891b191/" target="_blank">
							<img src={linkedIn} alt="linkedIn" />
						</a>
                        <a href="https://www.linkedin.com/in/iris-jitomo-ab891b191/" target="_blank">
						<h3>LinkedIn</h3>
						</a>
					</div>
				</div>
                <div className="contact-cards">
					<div className="contact-about-me-card">
						<a href="https://github.com/irisjitomo" target="_blank">
							<img src={gitHub} alt="gitHub" />
						</a>
                        <a href="https://github.com/irisjitomo" target="_blank">
                        <h3>GitHub</h3>
						</a>
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
