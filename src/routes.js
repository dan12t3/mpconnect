import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/App/app.js'
import Store from './Pages/Store/app.js';
import Mp from './Pages/MP/app.js';

export default (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/store' component={Store} />
      <Route path='/marketplace' component={Mp} />
    </Switch>
);
