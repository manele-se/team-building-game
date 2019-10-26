import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlayerView from './components/playerView/PlayerView';
import ScoreView from './components/scoreView/ScoreView';
import WelcomeView from './components/WelcomeView';
import TeamView from './components/playerView/TeamView';
import CreateTeamView from './components/createViewForm/CreateTeamView';
import ChooseAvatar from './components/createViewForm/ChooseAvatar';
import CreatePlayerForm from './components/createViewForm/createPlayerForm';
import { Provider } from './context';
import * as ROUTES from '../src/routes';
import CongratulationView from './components/createViewForm/CongratulationView';
import PlayerCreated from './components/createViewForm/PlayerCreated';
import About from '../src/layouts/About';
import SubjectView from './components/scoreView/SubjectView';
import MasterView from './components/scoreView/MasterView';
import WinnerView from './components/scoreView/WinnerView';
import RightAnswerView from './components/modals/RightAnswerView';
import { GameEngineTestView } from './GameEngine';

function App() {
  return (
    <Provider>
      <Router>
        <Route exact path={ROUTES.HOME_VIEW} component={WelcomeView} />
        <Route exact path="/score/:gameId" component={ScoreView} />
        <Route exact path="/master/:gameId" component={MasterView} />
        <Route exact path="/team/:gameId" component={TeamView} />
        <Route exact path="/create/team" component={CreateTeamView} />
        <Route exact path="/play/:playerId" component={PlayerView} />
        <Route exact path="/:gameId" component={WelcomeView} />
        <Route exact path="/about/game/:gameId" component={About} />
        <Route exact path="/player/ready/:playerId" component={PlayerCreated} />
        <Route exact path="/subject/choosen/:playerId" component={SubjectView} />
        <Route exact path="/question/player/:playerId" component={CreatePlayerForm} />
        <Route exact path="/avatar/player/:playerId" component={ChooseAvatar} />
        <Route exact path="/team/created/:gameId" component={CongratulationView} />
        <Route exact path="/final/winner/:gameId" component={WinnerView} />
        <Route
          exact
          path="/test/rightanswerview"
          component={() => <RightAnswerView show question="Fråga" rightAnswers={[ 'a', 'b' ]} />}
        />
        <Route exact path="/test/gameengine/:gameId" component={GameEngineTestView} />
      </Router>
    </Provider>
  );
}

export default App;
