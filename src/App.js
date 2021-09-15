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

      
      {/* <div> */}
        <Router>
      {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
            <li>
              <Link to="/secondListingPage">SecondListingPage</Link>
            </li>
            <li>
              <Link to="/thirdBookDetailPage">ThirdBookDetailPage</Link>
            </li>
          </ul>
        </nav> */}

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
      {/* </div> */}
    </Router>
        {/* </div> */}

    </div>
  );
}

export default App;
