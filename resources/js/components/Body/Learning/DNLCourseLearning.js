import React, { Component } from 'react';
import getCourseToLearn from '../../../actions/getCourseToLearn';

class DNLCourseLearning extends Component {

	constructor (...args) {
		super(...args);
		this.state = {
			course: {}
		}
	}

	componentDidMount () {
		getCourseToLearn(
			this.props.match.params.course_id,
			this.props.currentUser,
			data => {
				this.setState({
					course: data
				});
			}
		);
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default DNLCourseLearning
