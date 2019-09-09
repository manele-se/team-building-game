import React, { Component } from "react";

class ScoreBoard extends Component {
  render() {
    return (
      <div className="container card card-body mb-3 p-4 col-10 offset-1 ">
        <div className="progress ">
          <div
            className="progress-bar-striped bg-success card py-2 "
            style={{
              width: "5%"
            }}
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar-striped bg-success card "
            role="progressbar"
            style={{
              width: "25%"
            }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar-striped bg-success card "
            role="progressbar"
            style={{
              width: "100%"
            }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
