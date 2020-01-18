import React from 'react';
import {
  Route, Switch, Redirect
} from 'react-router-dom';
import Surveys from '../surveys';
import Survey from '../survey';


export const Component = () => (
  <Switch>
    <Route 
      exact
      path="/surveys"
      component={Surveys}
    />
    <Route 
      path="/surveys/:id"
      component={Survey}
    />
    <Redirect from="*" to="/surveys" />
  </Switch>
);

export default Component;
