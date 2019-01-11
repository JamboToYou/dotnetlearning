import React from 'react';
import getShortCourses from '../../actions/getShortCourses';
import DNLBodyNav from './DNLBodyNav';
import DNLContentCourses from './Content/DNLContentCourses';

class DNLBody extends React.Component {

	constructor(...args) {
		super(...args);

		this.state = {
			user: {},
			courses: []
		}
	}

	componentDidMount() {
		getShortCourses(data => {
			this.setState({ courses: data });
		});
	}

	render() {
		return (
			<div className="container-fluid content">
				<DNLBodyNav brand="Курсы" refs={this.state.courses.map(course => {return { refId: course.id, label: course.title }})} currentUser={this.props.currentUser} />
				<DNLContentCourses courses={this.state.courses} currentUser={this.props.currentUser} />
			</div>
		)
	}
}

export default DNLBody;