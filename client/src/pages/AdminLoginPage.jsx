import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';
import AdminLogin from "../components/AdminLogin"
const AdminLoginPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleLogin = async (data, event) => {
    try{    
      console.log("hi") 
      const res = await axios.post("http://localhost:8080/api/v1/users/login",{
          username:data.username,
          password:data.password
        })
        console.log(res)
        setToken({
          username:res.data.username,
          role:res.data.role
        })
        navigate('/admin/dashboard',{replace:true})
      }
     catch{
      setSubError('Invalid Credentials')
    }
  }

  return (
    <>
     
      <AdminLogin handleLogin={handleLogin} error = {subError} />
    </>
  );
};

export default AdminLoginPage;
