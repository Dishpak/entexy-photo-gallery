import React, { createContext, useState, useEffect, useRef } from "react";
// import Authorization from "../components/Authorization";

const GalleryContext = createContext();

export const GalleryProvider = ({children}) => {

  const [loginData, setLoginData] = useState(false)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const userDb = [
    {
      name: 'Hire Me',
      password: 'Password'
    }
  ]

  const galleryRef = useRef(null);


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



  const handleSubmit = (event) => {
    event.preventDefault()
    if (userDb.find((user) => user.name === userName) && userDb.find((user) => user.password === password)) {
      setLoginData({
        name: userName,
        password: password
      })
      localStorage.setItem('userName', JSON.stringify(userName))
    } else {
      setErrorMessage('Wrong name or password. Please try again');
    }
  }

  const logedIn = localStorage.getItem('userName');

  if(logedIn) {
    return(
      <GalleryContext.Provider value={{images, galleryRef}}>
        {children}
      </GalleryContext.Provider>
    )
  }

  return (
    <main className={'login-layout'}>
      <div className={'login-bg'}>
        <img src="/images/bubbles.jpeg" alt="" />
      </div>
      <div className={'login-form'}>
        <form onSubmit={handleSubmit} className={'authForm'}>
          <h2>Log in</h2>
          <input type="text" placeholder={'Enter your name'} name={'username'} minLength={4}
                 onChange={({target}) => setUserName(target.value)}/>
          <input type="password" placeholder={'Enter password'} name={'password'} minLength={4}
                 onChange={({target}) => setPassword(target.value)}/>
          <span className={'errorMessage'}>{errorMessage && errorMessage}</span>
          <button type="submit" className={'btn'}>Continue</button>
        </form>
      </div>
    </main>
  )
}

export default GalleryContext;
