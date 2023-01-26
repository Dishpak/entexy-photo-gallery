import React, { createContext, useState, useEffect, useRef } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({children}) => {

  const [images, setImages] = useState([]);
  const galleryRef = useRef(null);
  const baseUrl = '/entexy-photo-gallery'


  const loadData = () => {
    fetch('https://picsum.photos/v2/list?page=1&limit=12')
      .then(response => response.ok ? response.json() : Promise.reject('failed to load images'))
      .then(data => {
        setImages(prev => [...prev, ...data])
      })
  }


  useEffect(() => {
    loadData();
  }, []);

    return(
      <GalleryContext.Provider value={{images, galleryRef, baseUrl}}>
        {children}
      </GalleryContext.Provider>
    )

}

export default GalleryContext;
