import React from 'react';

class LoginForm extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.value);
		if (this.state.username && this.state.password) {
			this.props.handleLogin(e);
		}
	};

	handleInputChange = (e) => {
		// console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>
						Username
						<input
							id="username"
							name="username"
							type="text"
							value={this.state.username}
							onChange={this.handleInputChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							id="password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</label>
				</div>
				<div>
					<button type="submit">Log in</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;
