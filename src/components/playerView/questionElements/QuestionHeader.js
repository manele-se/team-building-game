import React, { Component } from 'react';

class QuestionHeader extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <React.Fragment>
        <div className="jumbotron col-10 offset-1 board titleCard">
          <h2 className="questionNr">{title}</h2>
          <p className="textQuestion">{text}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default QuestionHeader;
