import React from 'react';
import {useContext} from "react";
import Banner from "./Banner";
import {Link} from "react-router-dom";
import GalleryContext from "../context/GalleryContext";

const Gallery = () => {

  const {images, galleryRef} = useContext(GalleryContext)

  return (
  <>
    <Banner />
    <div className={'gallery-container'} ref={galleryRef}>
      <h4>All Images</h4>
      <br/>
      <div className={'image-gallery'}>
        {images?.map(image => {
          return (
            <Link to={image?.id} key={image?.id} id={image?.id}>
              <div className={'image-preview'}>
                <img src={image?.download_url} alt=""/>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </>
  );
};


export default Gallery;
