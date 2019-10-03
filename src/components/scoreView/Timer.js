import React, { Component } from 'react';
//import CountDown from "react-simple-countdown";
//kanske bättre att göra den som en function med props
//create  countdow from 5s
class Timer extends Component {
	state = {
		time: 6
	};

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
