import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getFullUser from '../../../actions/getFullUser';
import DNLContentCourses from '../Content/DNLContentCourses';

class DNLUser extends Component {

	constructor(...args) {
		super(...args);

		this.state = {
			user: "empty",
			createdCourses: "empty",
			completedCourses: "empty"
		}
	}

	componentDidMount() {
		getFullUser(this.props.match.params.userId, data => {
			this.setState({
				user: data,
				createdCourses: data.createdCourses,
				completedCourses: data.completedCourses
			});
		});
	}

	render() {
		return (this.state.user !== "empty" && this.state.user !== "error") && (
			<div className="row container-fluid dhl-container-main justify-content-center">
				<div className="card col-10 col-lg-7">
					<div className="card-header row justify-content-around pt-3">
						<div className="col-5">
							<h1>Имя пользователя: {this.state.user.first_name + " " + this.state.user.last_name}</h1>
							<h5>E-mail: {this.state.user.email}</h5>
							<h5>Роль: {this.state.user.role}</h5>
							<h5>ID: {this.state.user.id}</h5>
						</div>
						<div className="offset-4 flex-left col">
							<img className="rounded-circle" src={this.state.user.avatar} />
						</div>
					</div>
					<div className="card-body">
						<p>{this.state.user.about}</p>
					</div>
					<div className="card-footer row">
						<h5 className="col-4">Courses created: {this.state.createdCourses.length}</h5>
						<h5 className="col-4 offset-4">Courses completed: {this.state.completedCourses.length}</h5>
					</div>
				</div>
				<div id="dnl-user-data-container" className="accordion col-10 col-lg-7  m-0 p-0">
					<div className="card">
						<div className="card-header" id="createdCourses">
							<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#createdCoursesData" aria-expanded="true"
									aria-controls="createdCoursesData">
									Created courses
									</button>
							</h2>
						</div>
						<div id="createdCoursesData" className="collapse" aria-labelledby="createdCourses" data-parent="#dnl-user-data-container">
							<div className="card-body">
								<DNLContentCourses courses={this.state.createdCourses} currentUser={this.state.user}/>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="completedCourses">
							<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#completedCoursesData" aria-expanded="true"
									aria-controls="completedCoursesData">
									Completed courses
									</button>
							</h2>
						</div>
						<div id="completedCoursesData" className="collapse" aria-labelledby="completedCourses" data-parent="#dnl-user-data-container">
							<div className="card-body">
								<DNLContentCourses courses={this.state.completedCourses} currentUser={this.state.user}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default DNLUser
