import React from 'react';
import ToPictures from "./ToPictures";

const Banner = () => {
  return (
    <div className={'banner'}>
      <img src="/images/macbook_mockup.png" alt=""/>
      <h1>Lorem ipsum dolor sit amet</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
      <ToPictures />
    </div>
  );
};

export default Banner;
