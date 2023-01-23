import { createContext, useState, useEffect } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({children}) => {

  const [authorized, setAuthorized] = useState(false);
  const [loginData, setLoginData] = useState([])
  const [images, setImages] = useState([]);
  const userDb = [
    {
      name: 'Hire Me',
      password: 'Password'
    }
  ]


  const loadData = () => {
    fetch('https://picsum.photos/v2/list?page=1&limit=12')
      .then(response => response.ok ? response.json() : Promise.reject('failed to load images'))
      .then(data => {
        setImages(prev => [...prev, ...data])
      })
  }


    localStorage.setItem('loginDataName', JSON.stringify(loginData?.username))
  useEffect(() => {
    loadData();
  }, []);

   return(
     <GalleryContext.Provider value={{images, userDb, authorized, setAuthorized, loginData, setLoginData}}>
       {children}
     </GalleryContext.Provider>
   )
}

export default GalleryContext;
