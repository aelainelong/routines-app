import React, { Component } from 'react';

import Greeting from '../../../components/home/Greeting';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <p>This is the home view.</p>
        <Greeting />
      </div>
    );
  }
}

export default Home;