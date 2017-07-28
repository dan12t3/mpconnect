//imports
import React, { Component } from 'react';
import { TextField, Banner } from '@shopify/polaris';


//structure
class banner extends Component{
  state = { storeName: '' };


  render(){

    var shop = this.state.storeName;


    return(
      <Banner
        title="Access MPConnect through your Shopify Store"
        action={{content: 'Continue', url: 'https://mpconnect-backend.herokuapp.com/auth/access?shop='+shop}}
        status="info"
        onDismiss={()=>{}}
      >
      <br />
        <TextField placeholder="Store Name" value={this.state.storeName} onChange={(newValue) => this.setState({storeName: newValue})}/>
      </Banner>

    );

  }


}



//export
export default banner;
