import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';

const LoginPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleLogin = async (data, event) => {
    try{    
      console.log("hi") 
      const res = await axios.post("http://localhost:8080/api/v1/users/login",{
          username:data.username,
          password:data.password,
         
        })
        console.log(res)
        setToken({
          username:res.data.username,
          role:res.data.role,
          userId:res.data.id
        })
        navigate('/',{replace:true})
      }
     catch{
      setSubError('Invalid Credentials')
    }
  }

  return (
    <>
     
      <Login handleLogin={handleLogin} error = {subError} />
    </>
  );
};

export default LoginPage;
