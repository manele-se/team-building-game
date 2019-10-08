import React, { Component } from 'react';

class Timer extends Component {
	state = {
		time: 5
	};

	constructor(props) {
		super(props);
		this.state.time = props.seconds || 5;
	}

	componentDidMount = () => {
		this.startCounter();
	};

	startCounter = () => {
		const { time } = this.state;
		if (time !== 0) {
			this.setState({
				time: time - 1
			});
			setTimeout(this.startCounter, 1000);
		} else if (this.props.onFinished) {
			this.props.onFinished();
		}
	};

	render() {
		const { time } = this.state;
		return <div>{time}</div>;
	}
}

export default Timer;
