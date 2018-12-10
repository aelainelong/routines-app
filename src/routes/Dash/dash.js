import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './Dash.css';

import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';
import Home from './Home';
import Routines from './Routines';
import Products from './Products';
import Settings from './Settings';

const Dash = (props) => {
  return (
    <Router>
      <div className="Dash">
        <Header />
        <Route exact path={props.match.path} component={Home} />
        <Route exact path={props.path} component={Home} />
        <Route path="/routines" component={Routines} />
        <Route path="/products" component={Products} />
        <Route path="/settings" component={Settings} />
        <Nav />
      </div>
    </Router>
  );
}

export default Dash;