import React, { Component } from 'react';
import config from '../../config';
import Cookie from 'universal-cookie';

import Description from '../../Components/form/storedescription.js';
import TargetAge from '../../Components/form/age.js';
import TargetSex from '../../Components/form/sex.js';
import TargetLocation from '../../Components/form/location.js';
import FulfillmentTime from '../../Components/form/fulfillment.js';
import Awards from '../../Components/form/awards.js';




class Profile extends Component{

  componentWillMount(){
    //fetch request to db


  }


  render(){
    return(
      <div className="container">
        <h5>Store OnBoarding</h5>

    <form className="col s12">


      <div className="row">
        <div className="col s12">
          <Description />
        </div>
      </div>

      <div className="row">
        <div className="col s4">
          <TargetAge />
        </div>
        <div className="col s4">
          <TargetSex />
        </div>
        <div className="col s4">
          <TargetLocation />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <FulfillmentTime />
        </div>
      </div>

      <div className="row">
      <div className="col s12">
        <Awards />
      </div>
      </div>

    </form>
      </div>);
  }
}



export default Profile;
