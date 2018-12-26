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
import getUser from '../actions/getUser';

export default class DNLMain extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			courses: [],
			user: {}
		};
		console.log(this.props);
	}

	componentDidMount () {
		getUser(data => {
			this.setState({user: data});
		})
	}

	render() {
		return (
			<div className="container-fluid p-0 pt-2">
				<DNLNavbar />
				<div className="row justify-content-center position-relative">
					<DNLSidebar />
					<Route path="/" exact component={DNLBody} />
					<Route path="/login" render={(props) => <DNLLogin {...props} updateParent={this.setState} />} />
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
