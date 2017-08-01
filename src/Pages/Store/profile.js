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
        <h1>Profile</h1>
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Textarea</label>
        </div>
      </div>
    </form>
  </div>
      </div>);
  }
}



export default Profile;
