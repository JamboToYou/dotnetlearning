import React, { Component } from 'react';
import { } from 'react-router-dom';
import getFullCourse from '../../actions/getFullCourse';

class DNLCourseLearning extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			course: null,
			currentLesson: 0
		}
	}

	componentDidMount() {
		getFullCourse(this.props.match.params.courseId, data => {
			this.setState({
				course: data,
				currentLesson: course.chapters.find(chapter =>
					chapter.lessons.find(lesson => lesson.status === "p") !== null).lessons.find(lesson =>
						lesson.status === "p").id
			})
		})
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default DNLCourseLearning
