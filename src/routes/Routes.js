import React from 'react';
import Index from '../pages/Index';
import { Switch, Route } from 'react-router-dom';
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/:code"
          component={(props) => (
            <Index {...props} key={window.location.pathname} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Routes;
