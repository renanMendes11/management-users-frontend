import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DetailsUser from './pages/DetailsUser';
import NewUser from './pages/NewUser';

export default function routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/new" component={NewUser} />
            <Route path="/details" component={DetailsUser} />
        </Switch>
      </BrowserRouter>
  );
}
