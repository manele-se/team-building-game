import React from "react";
import Spinner from "../images/spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={Spinner}
        alt="Loading..."
        style={{
          width: "15rem",
          margin: "auto",
          display: "block",
          padding: "2rem"
        }}
      />
    </div>
  );
};
