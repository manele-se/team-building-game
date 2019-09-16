import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayerView from "./components/playerView/PlayerView";
import ScoreView from "./components/scoreView/ScoreView";
import WelcomeView from "./components/WelcomeView";
import TeamView from "./components/playerView/TeamView";
import CreateTeamView from "./components/createViewForm/CreateTeamView";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <Route exact path="/" component={WelcomeView} />
        <Route exact path="/score/:gameId" component={ScoreView} />
        <Route exact path="/team/:gameId" component={TeamView} />
        <Route exact path="/create/team" component={CreateTeamView} />
        <Route exact path="/play/:playerId" component={PlayerView} />
        <Route exact path="/:gameId" component={WelcomeView} />
      </Router>
    </Provider>
  );
}

export default App;
