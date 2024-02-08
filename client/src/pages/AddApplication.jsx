import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import axios from 'axios';
import { useState } from 'react';
import AddStudent from '../components/AddStudent';
import Navbar from '../components/Navbar';

const AddEvidencePage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [subError,setSubError] = useState()
  
  const handleNewStudent = async (data, event) => {
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/students/',
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        console.log(response.data)
        navigate('/listapplications/admin',{replace:true})
      
      
      
    } catch (error) {
      setSubError('Something went wrong')
    }
  }
  return (
    <>
    <Navbar/>
    <AddStudent handleNewStudent={handleNewStudent} error={subError}/>
    </>
  )
}

export default AddEvidencePage