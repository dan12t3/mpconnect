import React from 'react';
import './navbar.css';
import Home from './icons/home.svg';
import Message from './icons/message.svg';
import User from './icons/user.svg';
import Settings from './icons/settings.svg';
import DropDown from './icons/drop-down3.svg';

const Navbar = () => {
  return(
    <div className="SideNav">
      <a className="Brand" href="#"></a>
      <a href="#"><img src={Home} /></a>
      <a href="#"><img src={Message} /></a>
      <a href="#"><img src={User} /></a>


        <label className="NavFoot">
          <input type="checkbox" id='collapse' />
          <a onClick={() => {
            var collapse = document.getElementById('collapse');
            collapse.focus();

          }}><img src={DropDown} /></a>
          <div className="FootBody">
            <a href="#"><img src={User} /></a>
            <a href="#"><img src={Settings} /></a>
          </div>

        </label>



    </div>
  );
}

export default Navbar;
