import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

class DNLLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			user: {}
		}
	}

	onSubmit(e) {
		e.preventDefault();
		const { email, password } = this.state;
		axios.post('api/login', {
			email,
			password
		})
			.then(response => {
				if (response.data !== "error") {
					this.setState({ err: false, user: response.data.data });
					this.props.updateProfile(this.state.user);
				}
				else {
					this.setState({ err: true });
				}
			})
			.catch(error => {
				this.refs.email.value = "";
				this.refs.password.value = "";
				this.setState({ err: true });
			});
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		if (this.state.err === false && this.state.user !== "error") {
			return <Redirect to={{
				pathname: "/",
				state: { user: this.state.user }
			}} />
		}
		let error = this.state.err;
		let msg = (!error) ? 'Успешно' : 'Неверные данные';
		let name = (!error) ? 'alert alert-success' : 'alert alert-danger';
		return (
			<div className="col-6 pt-5">
				{error != undefined && <div className={name} role="alert">{msg}</div>}
				<form className="form-horizontal" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
					<div className="form-group">
						<label htmlFor="email" className="col-md-4 control-label">E-Mail</label>
						<div className="col-md-6">
							<input id="email" type="email" ref="email" className="form-control" name="email" onChange={this.onChange.bind(this)} required />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="col-md-4 control-label">Пароль</label>

						<div className="col-md-6">
							<input id="password" type="password" ref="password" className="form-control" name="password" onChange={this.onChange.bind(this)} required />
						</div>
					</div>
					<div className="form-group">
						<div className="col-md-8 col-md-offset-4">
							<button type="submit" className="btn btn-primary">
								Войти
							</button>
							<Link to="/register" className="btn btn-outline-primary">Регистарция</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default DNLLogin
