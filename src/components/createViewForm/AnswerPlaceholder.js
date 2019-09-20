import React from "react";
import { MDBInput } from "mdbreact";

const AnswerPlaceholder = () => {
  return (
    <React.Fragment>
      <input
        type="text"
        className="form-control formStyle form-control-lg  cardAnswer"
        id="answer1"
        placeholder="Type here your answer..."
      />
    </React.Fragment>
  );
};

export default AnswerPlaceholder;
