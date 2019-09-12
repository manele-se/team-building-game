import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayerView from "./components/playerView/PlayerView";
import ScoreView from "./components/scoreView/ScoreView";
import ModalRight from "./components/playerView/questionElements/modals/ModalRight";
import WelcomeView from "./components/WelcomeView";
import TeamView from "./components/playerView/TeamView";

function App() {
  return (
    <Router>
      <Route exact path="/" component={WelcomeView} />
      <Route exact path="/play" component={PlayerView} />
      <Route exact path="/score" component={ScoreView} />
      <Route exact path="/modal" component={ModalRight} />
      <Route exact path="/team" component={TeamView} />
    </Router>
  );
}

export default App;
