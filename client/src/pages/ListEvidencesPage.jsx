import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import ListEvidences from '../components/ListEvidences';
import Navbar from '../components/Navbar';
const ListEvidencesPage = () => {
  const [evidences, setevidences] = useState([]);
  const handleDelete =async (id)=>{
    const response = await axios({
      method: 'delete',
      url: `http://localhost:8080/api/v1/evidence/${id}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setevidences(response.data)
  }
  const getAllApplications = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/evidence',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  };
  useEffect(() => {
    getAllApplications().then((data) => {
      setevidences(data);

    });
  }, []);
  return (
    <div>
      <Navbar/>
    <ListEvidences evidences={evidences} handleDelete={handleDelete}/>
    </div>
  )
}

export default ListEvidencesPage