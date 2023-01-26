import React from 'react';
import ToPictures from "./ToPictures";
import bannerImg from '../images/banner-image.png'

const Banner = () => {
  return (
    <div className={'banner'}>
      <img src={bannerImg} alt=""/>
      <div className={'bannerText'}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <ToPictures/>
      </div>
    </div>
  );
};

export default Banner;
