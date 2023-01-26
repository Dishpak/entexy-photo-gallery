import React from 'react';
import ToPictures from "./ToPictures";

const Banner = () => {
  return (
    <div className={'banner'}>
      <img src="/src/images/banner-image.png" alt=""/>
      <div className={'bannerText'}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <ToPictures/>
      </div>
    </div>
  );
};

export default Banner;
