import React, {useContext} from 'react';
import GalleryContext from "../context/GalleryContext";

const ToPictures = () => {

  const {galleryRef} = useContext(GalleryContext);

  const scrollToRef = () => {
    return galleryRef.current.scrollIntoView();
  }

  return (
    <div>
      <button className={'btn'} onClick={scrollToRef}>To Pictures</button>
    </div>
  );
};

export default ToPictures;
