import React, { Component } from "react";
//import CountDown from "react-simple-countdown";
//kanske bättre att göra den som en function med props
//create  countdow from 5s
class Timer extends Component {
  state = {
    isFinished: false,
    time: 5
  };

  startCouter = (time, isFinished) => {
    if (time !== 0) {
      time--;
      console.log(time);
    } else {
      isFinished = true;
    }
  };

  render() {
    const { time, isFinished } = this.state;
    return (
      <div
        onStart={() => {
          this.startCounter(time, isFinished);
        }}
      />
    );
  }
}

export default Timer;
