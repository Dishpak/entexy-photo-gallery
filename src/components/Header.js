import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <header>
      <Link to={'/'}><h2>Lorem</h2></Link>
      <div className={'userBar'}>
        <span>{JSON.parse(localStorage.getItem('userName'))}</span>
        <span onClick={logOut}><img src="/images/logout_ico.png" alt="" className={'logout-ico'} />
        <span className={'logout-text'}>Logout</span></span>
      </div>
    </header>
  );
};

export default Header;
