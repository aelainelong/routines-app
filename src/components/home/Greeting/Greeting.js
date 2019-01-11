import React, { Component } from 'react';
import client from '../../../data';
import { TimeStamp, TimePhase, TimeGreeting } from '../../utils/Time';

class Greeting extends Component {
   render() {
     
     // Choose the AM or PM icon to display in the greeting
     const showTimeIcon = TimePhase => {
       let icon;
       if(TimePhase === "AM"){
         icon = `☀`;
       } else {
         icon = `☾`;
       }
       return icon;
     }
     
     return(
       <div className="Greeting">
         <div className="wrap">
           <div className="icon">
            {showTimeIcon(TimePhase)}
           </div>
           <div className="text">
             <h2>{TimeGreeting}, {client.user}</h2>
             <div className="timestamp">{TimeStamp}</div>
           </div>
         </div>
       </div>
     );
   }
}

export default Greeting;