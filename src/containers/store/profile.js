import React, { Component } from 'react';
import { connect } from 'react-redux';

import Description from '../../Components/form/storedescription.js';
import TargetAge from '../../Components/form/age.js';
import TargetSex from '../../Components/form/sex.js';
import TargetLocation from '../../Components/form/location.js';
import FulfillmentTime from '../../Components/form/fulfillment.js';
import Awards from '../../Components/form/awards.js';




class Profile extends Component{



  render(){
    return(
      <div className="container">
        <h5>{this.props.profile.title}</h5>

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

function mapStateToProps(state) {
  console.log('state: ',state);
  return {
    profile : state.store.profile
  };
}



export default connect(mapStateToProps)(Profile);
