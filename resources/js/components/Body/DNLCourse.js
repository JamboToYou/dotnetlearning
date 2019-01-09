import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCourse from '../../actions/getCourse';
import DNLBodyNav from '../Body/DNLBodyNav';
import removeCourse from '../../actions/removeCourse';
import removeChapter from '../../actions/removeChapter';

class DNLCourse extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			course: "",
			chapterRemove: "",
		}

	}

	componentDidMount() {
		getCourse(this.props.match.params.courseId, data => {
			this.setState({ course: data });
		})
	}

	removeCourseAction() {
		removeCourse(this.props.match.params.courseId, data => {
			this.setState({
				chapterRemove: data
			});
		});
	}

	removeChapterAction(id) {
		removeChapter(id, data => {
			this.setState({
				chapterRemove: data
			});
		});
	}

	render() {
		let owner = false;
		if (this.state.course !== "") {
			if (typeof this.props.currentUser !== "undefined") {
				if (this.props.currentUser.id === this.state.course.author_id) {
					owner = true;
				}
			}
		}

		let chapters = null;

		let currentCourse = this.state.course;
		if (currentCourse === "error") {
			return <p></p>
		}
		else if (currentCourse === null) {
			return <p>Course with ID: {this.props.match.courseId} doesn't exist</p>
		}

		if (typeof currentCourse.chapters !== 'undefined' && currentCourse.chapters.length > 0) {
			chapters = currentCourse.chapters.map(ch =>
				<li key={ch.orderValue} className="bg-light">
					<h4>{ch.id}</h4>
					<h5>{ch.title}</h5>
					<h5>{ch.description}</h5>
					<hr />
					{owner ? <Link to={"/course:" + this.props.match.params.courseId} className="btn btn-danger" onClick={() => this.removeChapterAction.bind(this)(ch.id)}><i className="fa fa-trash">r</i></Link> : null}
					<hr />
				</li>
			)
		}
		return (
			<div className="container-fluid content">
				<DNLBodyNav refs={null} />
				<div className="container dhl-container-main">
					<div className="card">
						<div className="card-header">
							<h1>Title: {currentCourse.title}</h1>
							<h2>ID: {currentCourse.id}</h2>
							<h4>Author: {currentCourse.author_id}</h4>
						</div>
						<div className="card-body">
							<h3>Description: {currentCourse.description}</h3>
						</div>
						{owner ? <Link to="/" className="btn btn-danger" onClick={this.removeCourseAction.bind(this)}><i className="fa fa-trash">r</i></Link> : null}
						<ul className="card-footer">
							{chapters}
							<Link className="btn btn-primary" to={"/course/learning/" + currentCourse.id}> Reach to course</Link>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default DNLCourse
