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
    return(<p>Profile</p>);
  }
}



export default Profile;
