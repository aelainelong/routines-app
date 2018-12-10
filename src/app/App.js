import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';

import Dash from '../routes/Dash';
import Login from '../routes/Login';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedIn: true
    }
  }
  render() {
    const { loggedIn } = this.state;
    
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => (loggedIn ? ( <Dash path="/home" {...props} /> ) : ( <Login /> ))} />
        </div>
      </Router>
    );
  }
}

export default App;
