import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../Components/variable.css';
import { parse } from 'querystring';
import Cookie from 'universal-cookie';

import Navbar from '../../Components/navbar/navbar';
import Page from '../../Components/page/page';


import Search from './search';
import Messages from './messages';
import Partners from './partners';
import Profile from './profile';
import Settings from './settings';



const App = ({ location }) => {

  const query = parse(location.search.substr(1));
  const cookie = new Cookie();
  if(typeof query.token !== 'undefined'){
    cookie.set('token', query.token, {});
  }

  console.log('token: '+cookie.get('token'));

  // confirm that token exists, if not do something
    //redirect to login page maybe or homepage - i need the name for that though

  //get user account information
  //get state of the user account, 3 states:
    //if profile isnt set
      //profile page
    //else
      //if(there are no partners)
        //search page
      //else
        //partners page






  return(
    <div>
    <Navbar />
    <Page>
      <Switch>
        <Route exact path='/store/' component={Profile} />
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
