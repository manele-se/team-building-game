import React from 'react';
import { Route } from 'react-router-dom';

const ContinueButton = (props) => {
  const { canContinue, continueUrl } = props;
  return (
    <Route
      render={({ history }) => (
        <button
          type="button"
          className={canContinue ? 'btn continueButton continueButtonOk' : 'btn continueButton'}
          onClick={() => {
            // TODO: Check canContinue before pushing the next url
            history.push(continueUrl);
          }}>
          Continue
        </button>
      )}
    />
  );
};

export default ContinueButton;
