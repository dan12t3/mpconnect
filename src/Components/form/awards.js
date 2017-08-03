import React, { Component } from 'react';
import config from '../../config.js';


class award extends Component{

  componentWillMount(){

    const options = {
      credentials: 'include'
    }

    fetch(config.backend+'/profile/getProducts',options).then(res => {
      return res.json();
    }).then(myJson => {
      console.log(myJson);
    });

  }

  render(){
    return(
      <div>
      <label>Award Winning Products</label>
      <div className="row">
      <div className="input-field col s6">
          <input type="text" id="selectProduct" className="selectProduct" />
          <label htmlFor="selectProduct">Select Product(s)</label>
      </div>
      <div className="input-field col s6">
        <input type="text" id="productAwards" />
        <label htmlFor="productAwards">Award(s)</label>
      </div>
    </div>
    </div>

    );
  }
}


export default award;
