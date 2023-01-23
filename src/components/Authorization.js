import React, {useContext, useState} from 'react';
import GalleryContext from "../context/GalleryContext";

const Authorization = () => {

  const {userDb, setAuthorized, loginData, setLoginData} = useContext(GalleryContext);
  const [errorMessage, setErrorMessage] = useState('');

  const checkLoginData = (e) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value]
      }
    })
    setErrorMessage('')
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (userDb.find((user) => user.name === loginData.username[0]) && userDb.find((user) => user.password === loginData.password[0])) {
      setAuthorized(true);
      } else {
        setErrorMessage('Wrong name or password. Please try again');
      }
  }

  console.log(loginData);


  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={'Enter your name'} name={'username'} minLength={4} onChange={checkLoginData}/>
        <input type="password" placeholder={'Enter password'} name={'password'} minLength={4} onChange={checkLoginData}/>
        {errorMessage && errorMessage}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Authorization;
