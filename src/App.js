import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, CalloutCard, Banner } from '@shopify/polaris';
import Logo from './logo.svg';


// make Component

class App extends Component {
  state = { storeURL: '' };


  render(){

    var shop = this.state.storeURL;
    const api_key = "84f3302b4c6a4c2f3ce6fd4aad2ff99c";
    const scopes = "read_reports,read_products,read_orders";
    const redirect_uri = "https://mp-connect.herokuapp.com/";
    const nonce = "123";

    return(
      <Banner
        title="Access MPConnect through your Shopify Store"
        action={{content: 'Continue', url: 'http://localhost:5000/access/store?name='+shop}}
        status="info"
        icon={{ Logo }}
        onDismiss={()=>{}}
      >
      <br />
        <TextField placeholder="Store URL" value={this.state.storeURL} onChange={(newValue) => this.setState({storeURL: newValue})}/>
      </Banner>

    );

  }
}



/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
