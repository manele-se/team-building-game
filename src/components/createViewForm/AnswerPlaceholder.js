import React from "react";
import { MDBInput } from "mdbreact";

const AnswerPlaceholder = () => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row">
        <input
          type="text"
          className="form-control formStyle form-control-lg  cardAnswer"
          id="answer1"
          placeholder="Type here your answer..."
        />
        <MDBInput
          filled
          type="checkbox"
          id="checkbox1"
          className="checkBoxCustom "
        />
      </div>
    </React.Fragment>
  );
};

export default AnswerPlaceholder;
