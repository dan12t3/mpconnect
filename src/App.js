import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, CalloutCard, Banner } from '@shopify/polaris';
import Logo from './logo.svg';


// make Component

class App extends Component {
  state = { storeName: '' };


  render(){

    var shop = this.state.storeName;


    return(
      <Banner
        title="Access MPConnect through your Shopify Store"
        action={{content: 'Continue', url: 'https://localhost:5000/auth/access?shop='+shop}}
        status="info"
        icon={{ Logo }}
        onDismiss={()=>{}}
      >
      <br />
        <TextField placeholder="Store Name" value={this.state.storeName} onChange={(newValue) => this.setState({storeName: newValue})}/>
      </Banner>

    );

  }
}

///sanitize name - storeName


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
