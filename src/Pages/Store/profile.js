import React, { Component } from 'react';
import config from '../../config';
import Cookie from 'universal-cookie';

class Profile extends Component{

  componentWillMount(){
    //fetch request to db
    const cookie = new Cookie();

    const options ={
      credentials: 'include',
      method: 'GET',
      headers: {
        'token' : cookie.get('token'),
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(config.backend+'/profile/fetch',options).then((res) => {
      console.log(res);
      return res.json();

    }).then((myJson) => {
      console.log(myJson);

      return;
    })


  }

  render(){
    return(
      <div className="container">
        <h5>Store OnBoarding</h5>
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
          <label htmlFor="textarea1">Tell us a bit about your store!</label>
        </div>


      </div>
      <div className="row">
      <div className="input-field col s12">
  <select multiple>
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <label>Materialize Multiple Select</label>
</div>
      </div>

    </form>
  </div>
      </div>);
  }
}



export default Profile;
