import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Turkey from "./Turkey";

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={Turkey}/>
    <Route path='/roster/:number' component={DetailTurkey}/>
  </Switch>
)


export default Roster
