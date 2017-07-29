import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../Components/variable.css';

import Navbar from '../../Components/navbar/navbar';
import Page from '../../Components/page/page';


import Search from './search';
import Messages from './messages';
import Partners from './partners';
import Profile from './profile';
import Settings from './settings';


const App = () => {
  return(
    <div>
    <Navbar />
    <Page>
      <Switch>
        <Route exact path='/store/' component={Search} />
        <Route path='/store/search' component={Search} />
        <Route path='/store/messages' component={Messages} />
        <Route path='/store/partners' component={Partners} />
        <Route path='/store/profile' component={Profile} />
        <Route path='/store/settings' component={Settings} />
      </Switch>
    </Page>
    </div>
  );
}

export default App;
