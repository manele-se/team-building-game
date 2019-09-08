import React from 'react';

import './App.css';
//import import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Answers from './components/Answers';
import Question from './components/Question';

function App() {
  return (
    <div>
      <Header gameTitle="The Author Quiz" />
      <Question question="Question " questionText="How many lives a cat has?"/>
      <Answers/>
      <Footer/>
    </div>
  );
}

export default App;
