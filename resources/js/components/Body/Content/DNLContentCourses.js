import React, { Component } from 'react';
import DNLContentCourse from './DNLContentCourse';
import getCourses from '../../../actions/getCourses';

class DNLContentCourses extends Component {
	
	constructor (...args) {
		super(...args);

		this.state = {
			courses: null
		};
	}

	async componentDidMount() {
		this.setState({ courses: await getCourses() })
	}

	render() {
		return (
			<div>
				{this.state.map(course => <DNLContentCourse course />)}
			</div>
		)
	}
}


export default DNLContentCourses
