import React, { Component } from 'react';
import { TimeStamp, TimePeriod, TimeGreeting } from '../../utils/Time';

class Greeting extends Component {
   render() {
     const userName = "Ashley";
     
     return(
       <div className="Greeting">
         <div className="wrap">
           <div className="icon">
           </div>
           <div className="text">
             <h2>{TimeGreeting}, {userName}</h2>
             <div className="timestamp">{TimeStamp}</div>
           </div>
         </div>
       </div>
     );
   }
}

export default Greeting;