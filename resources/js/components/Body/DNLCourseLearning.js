import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import getCourseToLearn from '../../actions/getCourseToLearn';
import addUserProgress from '../../actions/addUserProgress';

class DNLCourseLearning extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			course: "",
			currentLesson: "",
			userProgress: "",
			redirectLaunched: false
		}
	}

	componentWillMount() {
		getCourseToLearn(
			this.props.match.params.courseId,
			this.props.currentUser.id,
			data => {
				console.log(data);
				this.setState({
					course: data,
					currentLesson: data.chapters.find(chapter =>
						chapter.id === data.user_progress.chapter_id).lessons.find(lesson =>
							lesson.id === data.user_progress.lesson_id),
					userProgress: data.user_progress
				});
			});
	}

	updateCurrentLesson(lesson) {
		this.setState({
			currentLesson: lesson
		});
	}

	render() {
		if (this.props.currentUser === "empty") {
			return <Redirect to="/" />;
		}

		var chapters = "";

		if (this.state.course !== "") {
			if (this.state.course.hasOwnProperty('chapters')) {
				if (this.state.course.chapters.length > 0) {
					chapters = this.state.course.chapters.map(chapter =>
						<li key={chapter.id} id={chapter.id + "_chapter_acc"} className="accordion card">
							<button className="list-group-item btn btn-link card-header" id={chapter.id + "_chapter"}
								type="button" data-toggle="collapse" data-target={"#" + chapter.id + "_chapter_lessons"} aria-expanded="true"
								aria-controls={chapter.id + "_chapter_lessons"}>
								{chapter.title}
							</button>
							<div id={chapter.id + "_chapter_lessons"} className="collapse" aria-labelledby="headingOne" data-parent={"#" + chapter.id + "_chapter_acc"}>
								<div className="card-body">
									<ul className="list-group">
										{chapter.lessons.map(lesson => <button className="list-group-item-link btn btn-light" onClick={() => this.updateCurrentLesson.bind(this)(lesson)}>{lesson.title}</button>)}
									</ul>
								</div>
							</div>
						</li>)
				}
			}
		}

		return (
			<div className="dhl-content-main container-fluid pt-2 row">
				<ul id={this.state.course.id + "_chapters"} className="col-3 list-group">
					{chapters}
				</ul>
				<div className="card col">
					<div className="card-header">
						{this.state.currentLesson.title}
					</div>
					<div className="card-body">
						{this.state.currentLesson.lesson_body}
					</div>
					<div className="card-footer">
					</div>
				</div>
			</div>
		)
	}
}

export default DNLCourseLearning
