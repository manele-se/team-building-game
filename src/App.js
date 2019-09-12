import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayerView from "./components/playerView/PlayerView";
import ScoreView from "./components/scoreView/ScoreView";
import ModalRight from "./components/playerView/questionElements/modals/ModalRight";
import WelcomeView from "./components/WelcomeView";
import TeamView from "./components/playerView/TeamView";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <Route exact path="/start/:id" component={WelcomeView} />
        <Route exact path="/play" component={PlayerView} />
        <Route exact path="/score" component={ScoreView} />
        <Route exact path="/team" component={TeamView} />
      </Router>
    </Provider>
  );
}

export default App;
