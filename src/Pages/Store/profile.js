import React, { Component } from 'react';
import config from '../../config';
import Cookie from 'universal-cookie';

class Profile extends Component{

  componentWillMount(){
    //fetch request to db
    const cookie = new Cookie();
    console.log(cookie.get('connect.sid'));
    const options ={
      method: 'GET',
      headers: {
        'token' : cookie.get('token'),
        'Content-Type': 'application/json'
      }
    }
    fetch(config.backend+'/profile/fetch',options).then((res) => {
      res.json();
    }).then((myJson) => {
      console.log(myJson);
    })


  }

  render(){
    return(<p>Profile</p>);
  }
}



export default Profile;
