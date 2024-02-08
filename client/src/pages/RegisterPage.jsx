import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleRegister = async (data, event) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/users/register',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      navigate('/login', { replace: true });
    } catch (error) {
      setSubError('Invalid Credentials')
    }
  };

  return (
    <>
      <Register handleRegister={handleRegister} error = {subError} />
    </>
  );
}

export default RegisterPage