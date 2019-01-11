import React, { Component } from 'react';

import Greeting from '../../../components/home/Greeting';
import StartRoutines from '../../../components/home/StartRoutines';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <p>This is the home view.</p>
        <Greeting />
        <StartRoutines />
      </div>
    );
  }
}

export default Home;