import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear()
    navigate('/login')
  }


  return (
    <header>
      <Link to={'/'}><h2>Lorem</h2></Link>
      <div className={'userBar'}>
        <span>{JSON.parse(localStorage.getItem('userName'))}</span>
        <span onClick={logOut}><img src="/src/images/logout_ico.png" alt="" className={'logout-ico'} />
        <span className={'logout-text'}>Logout</span></span>
      </div>
    </header>
  );
};

export default Header;
