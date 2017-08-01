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

      <div className="col s4">
        <label>Targetted Age</label>
        <p>
        <input type="checkbox" id="age1" />
        <label htmlFor="age1">less than 18</label>
        </p>
        <p>
        <input type="checkbox" id="age2" />
        <label htmlFor="age2">18 - 25</label>
        </p>
        <p>
        <input type="checkbox" id="age3" />
        <label htmlFor="age3">26 to 45</label>
        </p>
        <p>
        <input type="checkbox" id="age4" />
        <label htmlFor="age4">45 - 55</label>
        </p>
        <p>
        <input type="checkbox" id="age5" />
        <label htmlFor="age5">greater than 55</label>
        </p>


      </div>
      <div className="col s4">
      <label>Targetted Sex</label>
      <p>
        <input name="targetSex" type="radio" id="sex3" />
        <label htmlFor="sex3">Both</label>
      </p>
      <p>
        <input name="targetSex" type="radio" id="sex1" />
        <label htmlFor="sex1">Male</label>
      </p>
      <p>
        <input name="targetSex" type="radio" id="sex2" />
        <label htmlFor="sex2">Female</label>
      </p>

      </div>
      <div className="col s4">
      <label>Targetted Location</label>
      <div className="input-field col s12">
          <input type="text" id="autocomplete-input" className="autocomplete" />
          <label htmlFor="autocomplete-input">Autocomplete</label>
      </div>


      </div>


      </div>
      <div className="row">
      <div className="col s12">
      <label>Estimated Fulfilment Time (200+ orders)</label>
      <p>
        <input name="fulfilmentTime" type="radio" id="ftime1" />
        <label htmlFor="ftime1">less than 7 days</label>
      </p>
      <p>
        <input name="fulfilmentTime" type="radio" id="ftime2" />
        <label htmlFor="ftime2">7 - 14 days</label>
      </p>
      <p>
        <input name="fulfilmentTime" type="radio" id="ftime3" />
        <label htmlFor="ftime3">15 - 21 days</label>
      </p>
      <p>
        <input name="fulfilmentTime" type="radio" id="ftime4" />
        <label htmlFor="ftime4">greater than 21 days</label>
      </p>
      </div>

      </div>

    </form>
  </div>
      </div>);
  }
}



export default Profile;
