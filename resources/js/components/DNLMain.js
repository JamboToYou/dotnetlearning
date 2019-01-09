import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DNLNavbar from './Navbar/DNLNavbar';
import DNLSidebar from './Sidebar/DNLSidebar';
import DNLBody from './Body/DNLBody';
import DNLLogin from './Auth/DNLLogin';
import DNLCourse from './Body/DNLCourse';
import DNLCourseLearning from './Body/DNLCourseLearning';
import DNLRegister from './Auth/DNLRegister';
import DNLUser from './Body/User/DNLUser';
import DNLCourseCreating from './Body/CourseCreating/DNLCourseCreating';

export default class DNLMain extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			courses: [],
			user: "empty"
		};
	}

	updateState(data) {
		this.setState({
			user: data
		});
	}

	logout() {
		this.setState({
			user: "empty"
		});
	}

	render() {
		return (
			<div className="container-fluid p-0 pt-2">
				<DNLNavbar user={this.state.user}  logout={this.logout.bind(this)} />
				<div className="row justify-content-center position-relative">
					<Route path="/" exact render={(props) => <DNLBody {...props} currentUser={this.state.user} />} />
					<Route path="/login" render={(props) => <DNLLogin {...props} updateProfile={this.updateState.bind(this)} />} />
					<Route path="/register" component={DNLRegister} />
					<Route path="/course/create" exact strict render={(props) => <DNLCourseCreating {...props} currentUser={this.state.user} />} />
					<Route path="/course/learning/:courseId" component={DNLCourseLearning} />
					<Route path="/course::courseId" render={(props) => <DNLCourse {...props} currentUser={this.state.user} />} />
					<Route path="/user/:userId" render={(props) => <DNLUser {...props} currentUser={this.state.user} />}/>
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
