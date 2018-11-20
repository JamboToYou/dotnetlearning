import React from 'react';

class DNLNavbar extends React.Component {
	render() {
		return (
			<nav className="row navbar navbar-expand-md navbar-light bg-light dnl-navbar">
				<div className="col-1 col-md-4 col-lg-5">
					<button className="btn btn-light m-auto" type="button" data-toggle="collapse" data-target="#dhl-side_navigation"
						aria-controls="dhl-side_navigation" aria-expanded="false" aria-label="Toggle navigation">
						<h5>Navigation</h5>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<a href="index1.html" className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-8 navbar-brand btn btn-outline-primary text-primary"
					id="dnl-navbar-icon">
					<b className="display-4 text-dark">.NET</b> Learning
				</a>
			</nav>
		);
	}
}

export default DNLNavbar;