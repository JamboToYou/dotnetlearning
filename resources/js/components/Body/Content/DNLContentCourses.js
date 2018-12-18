import React, { Component } from 'react';
import DNLContentCourse from './DNLContentCourse';
import getShortCourses from '../../../actions/getShortCourses';

class DNLContentCourses extends Component {

	constructor(...args) {
		super(...args);

		this.state = {
			courses: null
		};
	}

	componentDidMount() {
		getShortCourses(data =>
			{
				this.setState({ courses: data });
			});
	}

	render() {
		if (this.state.courses === null) {
			return <p>There is no courses</p>
		}
		else if (this.state.courses === "error")
			return <p>AnErrorOccuredWhileLoadingCourses</p>
		else
		{
			return (
				<div>
					{this.state.courses.map(course => <DNLContentCourse key={course.Id} course={course}/>)}
				</div>
			)
		}
	}
}


export default DNLContentCourses
