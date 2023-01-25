import {useState} from "react";
import {useNavigate} from 'react-router-dom'

export const useAuth = () => {
  const [loginData, setLoginData] = useState(null)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userDb = [
    {
      name: 'Hire Me',
      password: 'Password'
    }
  ]

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    if (userDb.find((user) => user.name === userName) && userDb.find((user) => user.password === password)) {
      setLoginData({
        name: userName,
        password: password
      })
      localStorage.setItem('userName', JSON.stringify(userName))
      navigate('/gallery')
    } else {
      setErrorMessage('Wrong name or password. Please try again');
    }
  }

  return {
    loginData,
    handleSubmit,
    setUserName,
    setPassword,
    errorMessage
  }
}
