import React from 'react';
import {useAuth} from "../hooks/useAuth";

const Authorization = () => {

  const {handleSubmit, setUserName, setPassword, errorMessage} = useAuth();

  return (
    <main className={'login-layout'}>
      <div className={'login-bg'}>
        <img src="./images/bubbles.jpeg" alt="" />
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
  );
};

export default Authorization;
