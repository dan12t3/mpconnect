import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
//import {EmbeddedApp} from '@shopify/polaris/embedded';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';

//import $ from 'jquery';
//import jquery from 'jquery';
import 'jquery/src/jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import './Pages/js/initialize.js';

import './index.css';

//var jQuery = require('jquery');

//window.$ = window.jQuery = jquery;

ReactDOM.render(
  <BrowserRouter>
  {routes}
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
