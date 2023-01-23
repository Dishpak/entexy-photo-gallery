import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import GalleryContext from "../context/GalleryContext";

const Header = () => {
  const {authorized} = useContext(GalleryContext)

  return (
    <header>
      <Link to={'/'}><h2>Lorem</h2></Link>
      {authorized ? <span>{JSON.parse(localStorage.getItem('loginDataName'))}</span> : <span>Sign in</span>}
    </header>
  );
};

export default Header;
