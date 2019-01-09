import React from 'react';
import { Link } from 'react-router-dom';

class DNLNavbar extends React.Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		let profile = this.props.user === "empty"
			?
			<div className="row">
				<div className="col btn disabled">гость</div>
				<Link to="/login" className="col btn btn-primary">Войти</Link>
			</div>
			: <div className="btn-group" role="group">
				<Link to={"/user/" + this.props.user.id} className="btn btn-outline-primary">{this.props.user.first_name}</Link>
				<Link to="/" className="btn btn-primary" onClick={this.props.logout}>Выйти</Link>
			</div>
		return (
			<nav className="row navbar navbar-expand-md navbar-light bg-light dnl-navbar justify-content-around">
				<div className="col-1 col-md-2 col-lg-3">
				</div>
				<Link to="/" className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-8 navbar-brand btn btn-outline-primary text-primary"
					id="dnl-navbar-icon">
					<b className="display-4 text-dark">.NET</b> Learning
				</Link>
				<div className="col-2 justify-content-end">
					{profile}
				</div>
			</nav>
		);
	}
}

export default DNLNavbar;