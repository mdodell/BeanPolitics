import React, { Component } from 'react';
import {Button} from 'antd';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Covfefe from './Covfefe';
import VoterInfo from './VoterInfo';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <Router>
            <div>
                <ul>
                    <li>
                        <Button type="primary"><Link to="/">Home</Link></Button>
                    </li>
                    <li>
                        <Button type="primary"><Link to="/covfefe">Covfefe</Link></Button>
                    </li>
                    <li>
                        <Button type="primary"><Link to="/voterInfo">Voter Info</Link></Button>
                    </li>
                </ul>
                <Route path="/covfefe" component={Covfefe} />
                <Route path="/voterInfo" component={VoterInfo} />
            </div>
        </Router>
    </div>;
  }
}

export default App;
