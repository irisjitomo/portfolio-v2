import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className="footer-info">
				<div className="footer-contact-card">
					<p>© Iris Jitomo 2019. All Rights Reserved.</p>
				</div>
                <div className="miscellaneous">
                <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Html 5</a>, <a target="_blank" href="/icons/set/css3" rel="noopener noreferrer">CSS3</a> and other icons by <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
                </div>
			</div>
		</footer>
	);
};

export default Footer;
