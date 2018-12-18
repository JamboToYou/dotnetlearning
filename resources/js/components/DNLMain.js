import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import DNLNavbar from './Navbar/DNLNavbar';
import DNLSidebar from './Sidebar/DNLSidebar';
import DNLBody from './Body/DNLBody';
import DNLLogin from './Auth/DNLLogin';
import DNLCourse from './Body/DNLCourse';
import DNLCourseLearning from './Body/DNLCourseLearning';
import DNLRegister from './Auth/DNLRegister';

export default class DNLMain extends Component {
	render() {
		return (
			<div className="container-fluid p-0 pt-2">
				<DNLNavbar />
				<div className="row justify-content-center position-relative">
					<Route path="/" render={() => <Link to="/home">Test</Link>} />
					<Switch>
						<Route path="/home" exact strict render={() =>
							<div>
								<DNLSidebar />
								<DNLBody />
							</div>
						} />
					</Switch>
					<Route path="/login" component={DNLLogin} />
					<Route path="/register" component={DNLRegister} />
					<Route path="/course/:courseId" component={DNLCourse} />
					<Route path="/course/learning/:courseId" component={DNLCourseLearning} />
				</div>
			</div>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render
		(
			<Router>
				<DNLMain />
			</Router>,
			document.getElementById('root')
		);
}
