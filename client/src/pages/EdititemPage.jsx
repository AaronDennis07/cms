import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import EditItem from '../components/EditItem'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'

const EdititemPage = () => {
  const [error,setSubError] = useState()
  const [params,setParams] = useSearchParams()
  const id = params.get("id")
  const navigate = useNavigate()
  const handleEditItem = async(data,event)=>{
   
    
    
    console.log(params.get("id")) 
    console.log(data)
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8080/api/v1/products/${id}`,
        data: JSON.stringify({
          name:data.name,
          price:parseFloat(data.price),
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
        console.log(response.data)
        navigate("/admin/dashboard")    
    } catch (error) {
      console.log(error)
      setSubError('Something went wrong')
    }
  
  }
  return (
    <div>
      <Navbar user="admin"/>
      <EditItem handleEditItem={handleEditItem} error={error} id={id}/>
    </div>
  )
}

export default EdititemPage