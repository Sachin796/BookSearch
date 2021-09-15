import './App.css';

import MainSearchPage from './containers/MainSearchPage';
import SecondListingPage from './containers/SecondListingPage';
import ThirdBookDetailPage from './containers/ThirdBookDetailPage';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/">
            <MainSearchPage />
          </Route>
          <Route exact path="/secondListingPage">
            <SecondListingPage />
          </Route>
          <Route exact path="/thirdBookDetailPage">
            <ThirdBookDetailPage />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
