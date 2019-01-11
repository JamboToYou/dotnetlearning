import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getFullUser from '../../../actions/getFullUser';
import getUser from '../../../actions/getUser';

class DNLUserCustomize extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			user: '',
			first_name: '',
			last_name: '',
			email: '',
			about: '',
			err: '',
			customizeSuccess: ''
		}
	}

	onSubmit(e) {
		e.preventDefault();
		const { first_name, last_name, email, about } = this.state;
		axios.post('/api/user/customize/' + this.props.match.params.userId, {
			id: this.props.currentUser.id,
			first_name,
			last_name,
			email,
			about,
		})
			.then(response => {
				if (response.data === "error") {
					this.setState({
						err: true,
						customizeSuccess: false
					});
				} else {
					this.setState({
						err: false,
						customizeSuccess: true
					});
				}
			})
			.catch(error => {
				this.refs.first_name.value = "";
				this.refs.last_name.value = "";
				this.refs.about.value = "";
				this.refs.email.value = "";
				this.setState({ err: true });
			});

		getUser(this.props.currentUser.id, data => {
			this.props.updateProfile(data);
		})
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	componentDidMount() {
		this.setState({
			first_name: this.props.currentUser.first_name,
			last_name: this.props.currentUser.last_name,
			about: this.props.currentUser.about,
			email: this.props.currentUser.email
		});
	}

	render() {
		let errorMessage = null;
		if (this.props.currentUser === "empty") {
			return <Redirect to="/" />
		}
		if (this.state.customizeSuccess === false || this.state.err === true) {
			errorMessage = <span className="alert alert-danger d-block">Неверные данные</span>
		}
		if (this.state.customizeSuccess) {
			return <Redirect to={"/user/" + this.props.currentUser.id} />
		}
		return (
			<form className="form-horizontal col-6 mt-4 dhl-content-main" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
				{errorMessage}
				<div className="form-group">
					<label htmlFor="first_name" className="col-md-4 control-label">Имя</label>

					<div className="col-md-12 col-lg-8">
						<input id="first_name" type="text" className="form-control" ref="first_name" name="first_name" onChange={this.onChange.bind(this)} required autoFocus
							placeholder="Введите имя" value={this.state.first_name} />
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="last_name" className="col-md-4 control-label">Фамилия</label>

					<div className="col-md-12 col-lg-8">
						<input id="last_name" type="text" className="form-control" ref="last_name" name="last_name" onChange={this.onChange.bind(this)} required autoFocus
							placeholder="Введите фамилию" value={this.state.last_name} />
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="email" className="col-md-4 control-label">E-Mail</label>

					<div className="col-md-12 col-lg-8">
						<input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required
							placeholder="Введите email" value={this.state.email} />
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="about" className="col-md-4 control-label">О себе</label>

					<div className="col-md-12 col-lg-8">
						<textarea id="about" rows="3" type="text" className="form-control" ref="about" name="about" onChange={this.onChange.bind(this)} required
							placeholder="Напишите о себе" value={this.state.about} />
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-12 col-lg-8 col-md-offset-4">
						<button type="submit" className="btn btn-primary">
							Сохранить
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default DNLUserCustomize
