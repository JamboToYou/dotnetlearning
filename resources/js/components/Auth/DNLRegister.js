import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class DNLRegister extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirmation: '',
		}
	}

	onSubmit(e) {
		e.preventDefault();
		const { name, email, password, password_confirmation } = this.state;
		axios.post('api/register', {
			name,
			email,
			password,
			password_confirmation
		})
			.then(response => {
				this.setState({ err: false });
				this.props.history.push("home");
			})
			.catch(error => {
				this.refs.name.value = "";
				this.refs.password.value = "";
				this.refs.email.value = "";
				this.refs.confirm.value = "";
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
		return (
			<form className="form-horizontal" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
				<div className="form-group">
					<label for="name" className="col-md-4 control-label">Name</label>

					<div className="col-md-6">
						<input id="name" type="text" className="form-control" ref="name" name="name" onChange={this.onChange.bind(this)} required autofocus />
					</div>
				</div>

				<div className="form-group">
					<label for="email" className="col-md-4 control-label">E-Mail Address</label>

					<div className="col-md-6">
						<input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required />
					</div>
				</div>

				<div className="form-group">
					<label for="password" className="col-md-4 control-label">Password</label>

					<div className="col-md-6">
						<input id="password" type="password" className="form-control" ref="password" name="password" onChange={this.onChange.bind(this)} required />
					</div>
				</div>

				<div className="form-group">
					<label for="password-confirm" className="col-md-4 control-label">Confirm Password</label>

					<div className="col-md-6">
						<input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation" onChange={this.onChange.bind(this)} required />
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-6 col-md-offset-4">
						<button type="submit" className="btn btn-primary">
							Register
						</button>
					</div>
				</div>
			</form>
		)
	}
}

export default DNLRegister
