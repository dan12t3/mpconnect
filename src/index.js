import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {EmbeddedApp} from '@shopify/polaris/embedded';

ReactDOM.render(
  <EmbeddedApp
  apiKey='84f3302b4c6a4c2f3ce6fd4aad2ff99c'
  shopOrigin='https://dan12t3devstore.myshopify.com'
  >
  <App />
  </EmbeddedApp>, document.getElementById('root'));
registerServiceWorker();
