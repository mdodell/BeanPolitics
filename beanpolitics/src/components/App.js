import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Covfefe from './CovfefePage';
import VoterInfo from './VoterInfo';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return <div>
        <Router>
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/dashboard"/>
                )}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/covfefe" component={Covfefe} />
                <Route path="/voterInfo" component={VoterInfo} />
            </div>
        </Router>
    </div>;
  }
}

export default App;
