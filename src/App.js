import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayerView from "./components/playerView/PlayerView";
import ScoreView from "./components/scoreView/ScoreView";

function App() {
  //state to refactor: TAKE IT AWAY , THIS IS JUST TO TEST UI

  return (
    <Router>
      <Route exact path="/play" component={PlayerView} />
      <Route exact path="/score" component={ScoreView} />
    </Router>
  );
}

export default App;
