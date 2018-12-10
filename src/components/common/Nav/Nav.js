import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="Nav">
      <ul>
        <li><Link to="/home"><button>Home</button></Link></li>
        <li><Link to="/routines"><button>Routines</button></Link></li>
        <li><Link to="/products"><button>Products</button></Link></li>
        <li><Link to="/settings"><button>Settings</button></Link></li>
      </ul>
    </div>
  );
}

export default Nav;