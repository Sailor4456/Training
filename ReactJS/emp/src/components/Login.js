import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);
		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		let data = localStorage.getItem('register');
		let datalist={};
		if(data)
		{
			datalist=JSON.parse(data);
		}

		let email = datalist.find(x=>x.email === this.state.email);
		let password = datalist.find(x=>x.password === this.state.password);

		if(email && password)
		{
			console.log('You are logged in');
			console.log(this.state);
			this.setState({
				email: '',
				password: ''
			});
			window.location.href="/details";
		}
		else{

			alert('Wrong username or password');
		}
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default Login;
