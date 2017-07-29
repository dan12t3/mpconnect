import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';
import Search from './icons/search.svg';
import Message from './icons/message.svg';
import User from './icons/user.svg';
import Settings from './icons/settings.svg';
import DropDown from './icons/drop-down.svg';

const Navbar = () => {
  return(
    <div className="SideNav">
      <NavLink to="/store" className="Brand" ></NavLink>
      <NavLink to="/store/search" activeClassName="active">

      <img alt="search-icon" src={Search} />

      </NavLink>
      <NavLink to="/store/messages" activeClassName="active"><img alt="message-icon" src={Message} /></NavLink>
      <NavLink to="/store/partners" activeClassName="active"><img alt="partners-icon" src={User} /></NavLink>


        <label className="NavFoot">
          <input type="checkbox" id='collapse' />
          <a onClick={() => {
            var collapse = document.getElementById('collapse');
            collapse.focus();

          }}><img alt="dropdown-icon" src={DropDown} /></a>
          <div className="FootBody">
            <NavLink to="/store/profile" activeClassName="active"><img alt="profile-icon" src={User} /></NavLink>
            <NavLink to="/store/settings" activeClassName="active"><img alt="settings-icon"src={Settings} /></NavLink>
          </div>

        </label>



    </div>
  );
}

export default Navbar;
