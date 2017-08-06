import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
//import {EmbeddedApp} from '@shopify/polaris/embedded';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';

import reducers from './reducers';

import 'jquery/src/jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import './Pages/js/initialize.js';

import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(

    <BrowserRouter>
      <Provider store={ createStoreWithMiddleware(reducers) }>
      {routes}
      </Provider>
    </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
