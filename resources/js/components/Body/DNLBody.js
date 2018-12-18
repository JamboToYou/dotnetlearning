import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DNLBodyNav from './DNLBodyNav';
import DNLContentCourses from './Content/DNLContentCourses';

import getUser from '../../actions/getUser';

class DNLBody extends React.Component {

	constructor(...args) {
		super(...args);

		this.state = {
			user: {}
		}
	}

	componentWillMount() {
		this.setState({ user: getUser() });
		console.log(this.state);
	}

	render() {
		return (
			<div className="col content">
				<DNLBodyNav />
				<DNLContentCourses />
			</div>
		)
	}
}

export default DNLBody;