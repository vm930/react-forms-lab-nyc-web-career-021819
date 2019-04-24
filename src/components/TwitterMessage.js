import React from 'react';

class TwitterMessage extends React.Component {
	state = {
		message: '',
		count: this.props.maxChars
	};

	handleMessage = (e) => {
		this.setState({
			message: e.target.value,
			count: this.props.maxChars - e.target.value.length
		});
	};

	render() {
		return (
			<div>
				<strong>Your message:</strong>
				<input
					type="text"
					name="message"
					id="message"
					value={this.state.message}
					onChange={this.handleMessage}
				/>
				<div>{this.state.count}</div>
			</div>
		);
	}
}

export default TwitterMessage;
