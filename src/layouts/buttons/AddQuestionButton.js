import React from "react";

const AddQuestionButton = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="btn btn-success btn-lg buttonStyle addButton ">
      Add question
    </button>
  );
};

export default AddQuestionButton;
