import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class DNLRegister extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			about: '',
			password: '',
		}
	}

	onSubmit(e) {
		e.preventDefault();
		const { first_name, last_name, email, about, password } = this.state;
		axios.post('api/register', {
			first_name,
			last_name,
			email,
			about,
			password,
		})
			.then(response => {
				this.setState({ err: false });
			})
			.catch(error => {
				this.refs.first_name.value = "";
				this.refs.last_name.value = "";
				this.refs.password.value = "";
				this.refs.about.value = "";
				this.refs.email.value = "";
				this.setState({ err: true });
			});
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		if (this.state.err === false) {
			return <Redirect to="/" />
		}
		if (this.state.err === true) {
			return <p>Whoops!</p>
		}
		return (
			<form className="form-horizontal col-6 mt-4 dhl-content-main" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
				<div className="form-group">
					<label htmlFor="first_name" className="col-md-4 control-label">Имя</label>

					<div className="col-md-12 col-lg-8">
						<input id="first_name" type="text" className="form-control" ref="first_name" name="first_name" onChange={this.onChange.bind(this)} required autoFocus 
						placeholder="Введите имя"/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="last_name" className="col-md-4 control-label">Фамилия</label>

					<div className="col-md-12 col-lg-8">
						<input id="last_name" type="text" className="form-control" ref="last_name" name="last_name" onChange={this.onChange.bind(this)} required autoFocus 
						placeholder="Введите фамилию"/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="email" className="col-md-4 control-label">E-Mail</label>

					<div className="col-md-12 col-lg-8">
						<input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required 
						placeholder="Введите email"/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="about" className="col-md-4 control-label">About</label>

					<div className="col-md-12 col-lg-8">
						<textarea id="about" rows="5" type="text" className="form-control" ref="about" name="about" onChange={this.onChange.bind(this)} required 
						placeholder="Напишите о себе"/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password" className="col-md-4 control-label">Пароль</label>

					<div className="col-md-12 col-lg-8">
						<input id="password" type="password" className="form-control" ref="password" name="password" onChange={this.onChange.bind(this)} required 
						placeholder="Введите пароль"/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-12 col-lg-8 col-md-offset-4">
						<button type="submit" className="btn btn-primary">
							Зарегистрироваться
						</button>
					</div>
				</div>
			</form>
		)
	}
}

export default DNLRegister
