import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {EmbeddedApp} from '@shopify/polaris/embedded';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';
import './index.css';

ReactDOM.render(
  <EmbeddedApp
  apiKey='84f3302b4c6a4c2f3ce6fd4aad2ff99c'
  shopOrigin='https://dan12t3devstore.myshopify.com'
  >
  <BrowserRouter>
  {routes}
  </BrowserRouter>

  </EmbeddedApp>, document.getElementById('root'));
registerServiceWorker();
