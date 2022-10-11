import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleComponent } from 'react-google-location'
const API_KEY = "AIzaSyBy9ENPrZ1cyRUjLibIL1dRqZaUejisnXM"  // how to get key - step are below

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: '',
			phone: '',
			place: null,
			department: '',
			position: '',
			salary: '',
			errors: {
				fullname: '',
				email: '',
				password: '',
				phone: '',
				department: '',
				position: '',
				salary: ''
			}
		};

		this.handleChange = this.handleChange.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	componentWillMount() {
		if (this.props.match.params) {
			let email = this.props.match.params;
			let data = localStorage.getItem('register');
			let datalist = {};
			let registerData = [];
			if (data && email) {
				datalist = JSON.parse(data);
				registerData = datalist.find(x => x.email === email.email);
			}

			this.setState(registerData);

		}
	}


	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;
		let emailValid = this.state.email;
		let phoneValid = this.state.phone;
		let salaryValid = this.state.phone;

		switch (name) {
			case 'fullname':
				errors.fullname =
					value.length < 5
						? 'Full Name must be 5 characters long!'
						: '';
				break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				errors.email = emailValid ? '' : ' is invalid';
				break;

			case 'password':
				errors.password =
					value.length < 8
						? 'Password must be 8 characters long!'
						: '';
				break;
			case 'phone':
				phoneValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
				errors.phone = phoneValid ? '' : 'Entered Phone Number is invalid!!!';
				break;
			case 'department':
				errors.department =
					value.length < 1
						? 'Department is required to be entered!'
						: '';
				break;
			case 'position':
				errors.position =
					value.length < 1
						? 'Position is required to be entered!'
						: '';
				break;
				case 'salary':
					salaryValid = value.match(/^[0-9\b]+$/);
					errors.salary = salaryValid ? '' : 'Salary Should be in Numeric Values Only!!!';
					break;
			default:
				break;
		}
		this.setState({ errors, [name]: value }, () => {
			console.log(errors)
		})
	}

	// update(e) {
	// 	let name = e.target.name;
	// 	let value = e.target.value;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// }

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		let data = [];
		let localsr = localStorage.getItem('register');
		if (this.props.match.params.email) {
			let registerData = localsr;
			let email = this.props.match.params.email;
			let datalist = {};
			if (registerData) {
				datalist = JSON.parse(registerData);
			}

			let registerDataTemp = datalist.filter(x => {
				return x.email !== email
			});
			registerDataTemp.push(this.state);
			localStorage.setItem('register', JSON.stringify(registerDataTemp));
			this.setState({
				fullname: '',
				email: '',
				password: '',
				phone: '',
				place: '',
				department: '',
				position: '',
				salary: ''
			});
			alert("updated successfully !!");
			window.location.href = "/details";
		}
		else {
			if (localsr) {
				data = JSON.parse(localStorage.getItem('register'));
			}

			data.push(this.state);
			localStorage.setItem('register', JSON.stringify(data));
			this.setState({
				fullname: '',
				email: '',
				password: '',
				phone: '',
				place: '',
				department: '',
				position: '',
				salary: ''
			});
			alert("registred successfully !!");
		}
	}

	render() {
		console.warn("result", this.state.place);
		const { errors } = this.state;
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.fullname}</span>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.email}</span>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.password}</span>
					</div>
					<div className="phone">
						<input
							type="text"
							placeholder="Contact Number"
							name="phone"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.phone}</span>
					</div>
					<div>
						<GoogleComponent
							key={API_KEY}
							language={'en'}
							country={'country:in'}
							onChange={(e) => { this.setState({ place: e }) }} />
						<span style={{ color: "red" }}>{errors.place}</span>
					</div>

					<div className="department">
						<input
							type="text"
							placeholder="Your Department"
							name="department"
							value={this.state.department}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.department}</span>
					</div>
					<div className="position">
						<input
							type="text"
							placeholder="Position"
							name="position"
							value={this.state.position}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.position}</span>
					</div>
					<div className="Salary">
						<input
							type="text"
							pattern="[0-9]*"
							placeholder="Salary"
							name="salary"
							value={this.state.salary}
							onChange={this.handleChange}
						/>
						<span style={{ color: "red" }}>{errors.salary}</span>
					</div>
					<input type="submit" value={this.props.match.params.email ? 'Update' : 'Register'} />
				</form>
				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
