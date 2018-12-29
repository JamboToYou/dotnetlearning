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
		if (this.props.location.state != null) {
			if (this.props.location.state.user !== {}) {
				this.setState({ user: this.props.location.state.user });
			}
		}
	}

	render() {
		return (
			<div className="container-fluid content">
				<DNLBodyNav refs={this.state.courses.map(course => {return { refId: course.id, label: course.title }})} />
				<DNLContentCourses courses={this.state.courses} />
			</div>
		)
	}
}

export default DNLBody;