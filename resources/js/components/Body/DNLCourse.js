import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCourse from '../../actions/getCourse';

class DNLCourse extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			course: null
		}
		console.log(this.props.match.params.courseId);
	}

	componentDidMount() {
		getCourse(this.props.match.params.courseId, data => {
			console.log(data);
			this.setState({ course: data });
		})
	}

	render() {
		let currentCourse = this.state.course;
		if (currentCourse === "error") {
			return <p>AnErrorOcurredWhileLoadingCourse</p>
		}
		else if (currentCourse === null) {
			return <p>Course with ID: {this.props.match.courseId} doesn't exist</p>
		}
		return (
			<div>
				<h1>Title: {currentCourse.title}</h1>
				<h2>ID: {currentCourse.id}</h2>
				<h3>Description: {currentCourse.description}</h3>
				<h4>Author: {currentCourse.author_id}</h4>
				{currentCourse.chapters.map(ch =>
					<div key={ch.orderValue}>
						<h5>{ch.title}</h5>
						<h5>{ch.description}</h5>
						<hr />
					</div>
				)}
				<Link className="btn btn-primary" to = { "/course/learning/" + currentCourse.id }> Reach to course</Link>
			</div>
		)
	}
}

export default DNLCourse
