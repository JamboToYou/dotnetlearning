import React, { Component } from 'react';
import DNLContentCourse from './DNLContentCourse';
import getShortCourses from '../../../actions/getShortCourses';

class DNLContentCourses extends Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		if (this.props.courses === null) {
			return <p>There is no courses</p>
		}
		else if (this.props.courses === "error")
			return <p>AnErrorOccuredWhileLoadingCourses</p>
		else
		{
			return (
				<div className="dhl-container-main row" data-spy="scroll" data-offset="0">
					{this.props.courses.map(course => <DNLContentCourse key={course.Id} course={course}/>)}
				</div>
			)
		}
	}
}


export default DNLContentCourses
