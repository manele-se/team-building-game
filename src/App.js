import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayerView from "./components/playerView/PlayerView";
import ScoreView from "./components/scoreView/ScoreView";
import WelcomeView from "./components/WelcomeView";
import TeamView from "./components/playerView/TeamView";
import CreateTeamView from "./components/createViewForm/CreateTeamView";
import ChooseAvatar from "./components/createViewForm/ChooseAvatar";
import CreatePlayerForm from "./components/createViewForm/createPlayerForm";
import { Provider } from "./context";

import * as ROUTES from "../src/routes";
import CongratulationView from "./components/createViewForm/CongratulationView";
import About from "../src/layouts/About";

function App() {
  return (
    <Provider>
      <Router>
        <Route exact path={ROUTES.HOME_VIEW} component={WelcomeView} />
        <Route exact path="/score/:gameId" component={ScoreView} />
        <Route exact path="/team/:gameId" component={TeamView} />
        <Route exact path="/create/team" component={CreateTeamView} />
        <Route exact path="/play/:playerId" component={PlayerView} />
        <Route exact path="/:gameId" component={WelcomeView} />
        <Route exact path="/about/the/game" component={About} />
        <Route
          exact
          path="/question/player/:playerId"
          component={CreatePlayerForm}
        />
        <Route exact path="/avatar/player/:playerId" component={ChooseAvatar} />
        <Route
          exact
          path="/team/created/:gameId"
          component={CongratulationView}
        />
      </Router>
    </Provider>
  );
}

export default App;
