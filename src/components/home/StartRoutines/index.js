import React, { Component } from 'react';
import { TimePhase } from '../../utils/Time';
import client from '../../../data';

class StartRoutines extends Component {
  render (){

    // Get and build out the AM or PM routines based on the time phase
    const currentRoutines = client.getRoutinesByTime(TimePhase);
    const buildRoutines = currentRoutines.map(routine => {
      const stepsString = routine.steps.length > 1 ? `steps` : `step`;
      return <li><button>{routine.title}<br/>{routine.steps.length} {stepsString}</button></li>;
    });

    return(
      <div className="routines">
        <h3>My {TimePhase} Routines</h3>
        <ul>
          {buildRoutines}
        </ul>
      </div>
    )
  }
}

export default StartRoutines;
