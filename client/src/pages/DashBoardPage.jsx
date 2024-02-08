import React, { useEffect, useState } from 'react';
import DashBoard from '../components/DashBoard';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import NavBar from "../components/Navbar"
const DashBoardPage = () => {
  const [student, setStudent] = useState({});
  
  const getStudentDetails = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/students/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data[0].usn);
    return response.data;
  };
  useEffect(() => {
    getStudentDetails().then((data) => {
      setStudent(data[0]);
      console.log(data[0]);
    });
  }, []);
  return (
    <div>
      <NavBar/>
    <DashBoard
      usn={student.usn}
      semester={student.semester}
      name={student.name}
      department={student.department}
      email={student.email}
      section={student.section}
    />
    </div>
  );

};

export default DashBoardPage;
