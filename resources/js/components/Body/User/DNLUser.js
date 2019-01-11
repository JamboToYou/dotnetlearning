import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import getFullUser from '../../../actions/getFullUser';
import DNLContentCourses from '../Content/DNLContentCourses';

class DNLUser extends Component {

	constructor(...args) {
		super(...args);
		this.changePriority = this.changePriority.bind(this);
		this.state = {
			user: "empty",
			createdCourses: "empty",
			watchedCourses: "empty",
			error: ''
		}
	}

	componentDidMount() {
		getFullUser(this.props.match.params.userId, data => {
			this.setState({
				user: data,
				createdCourses: data.createdCourses,
				watchedCourses: data.watchedCourses
			});
		});
	}

	changePriority(role) {
		axios.post('/api/user/changeRole/' + this.state.user.id, {
			id: this.state.user.id,
			role
		})
			.then(data => {
				if (data.data !== "error")
					this.setState({
						error: false
					});
				else
					this.setState({
						error: true
					});
			})
			.catch(err => {
				this.setState({
					error: true
				});
			});
	}

	render() {
		let errorMessage = null;
		if (this.state.error === true) {
			errorMessage = <span className="alert alert-danger d-block m-auto">Возникла ошибка при смене роли</span>
		}
		if (this.state.error === false) {
			return <Redirect to ="/" />
		}
		return (this.state.user !== "empty" && this.state.user !== "error") && (
			<div className="row container-fluid dhl-container-main justify-content-center">
				<div className="card col-10 col-lg-7">
					{errorMessage}
					<div className="card-header row justify-content-around pt-3">
						<div className="col-5">
							<h1>Имя пользователя: {this.state.user.first_name + " " + this.state.user.last_name}</h1>
							<h5>E-mail: {this.state.user.email}</h5>
							<h5>Роль: {this.state.user.role}</h5>
							<h5>ID: {this.state.user.id}</h5>
						</div>
						{(this.props.currentUser.role === "admin") && (<div className="btn-group h-25 col">
							<button className={"btn btn-outline-primary" + (this.state.user.role === "admin" ? " disabled" : "")}
								onClick={() => this.changePriority("admin")}>admin</button>
							<button className={"btn btn-outline-primary" + (this.state.user.role === "tutor" ? " disabled" : "")}
								onClick={() => this.changePriority("tutor")}>tutor</button>
							<button className={"btn btn-outline-primary" + (this.state.user.role === "student" ? " disabled" : "")}
								onClick={() => this.changePriority("student")}>student</button>
						</div>)}
						<div className={(this.props.currentUser.role === "admin" ? "" : "offset-4 ") + "flex-left col"}>
							<img className="rounded-circle d-block m-auto" src={this.state.user.avatar} />
							{(this.state.user.id === this.props.currentUser.userId) && <Link to={"/user_customize/" + this.state.user.id} className="btn btn-primary d-block ml-auto mr-auto mt-4">Редактировать</Link>}
						</div>
					</div>
					<div className="card-body">
						<p>{this.state.user.about}</p>
					</div>
					<div className="card-footer row">
						<h5 className="col-4">Courses created: {this.state.createdCourses.length}</h5>
						<h5 className="col-4 offset-4">Courses watched: {this.state.watchedCourses.length}</h5>
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
								<DNLContentCourses courses={this.state.createdCourses} currentUser={this.state.user} />
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="watchedCourses">
							<h2 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#watchedCoursesData" aria-expanded="true"
									aria-controls="watchedCoursesData">
									Watched courses
									</button>
							</h2>
						</div>
						<div id="watchedCoursesData" className="collapse" aria-labelledby="watchedCourses" data-parent="#dnl-user-data-container">
							<div className="card-body">
								<DNLContentCourses courses={this.state.watchedCourses} currentUser={this.state.user} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default DNLUser
