import React, { useEffect, useState } from 'react'
import AdminDashBoard from '../components/AdminDashBoard'
import Navbar from '../components/Navbar'
import axios from 'axios'

const AdminDashBoardPage = () => {
  const [items,setItems] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/products")
    .then((res)=>{
      setItems(res.data)
    })
  },[])
  const handleDelete = (id)=>{
    console.log("hit")
    axios.delete(`http://localhost:8080/api/v1/products/${id}`)
    .then((res)=>{
      setItems(res.data)
    })
  }
  const handleUpdate = (data,event)=>{
    axios.post(`http://localhost:8080/api/v1/products/${id}`,{
      name:data.name,
      price:parseFloat(data.price),
      image:file
    })
    .then((res)=>{
      setItems(res.data)
    })
  }
  return (
    <div>
      <Navbar user="admin"/>
      <AdminDashBoard items={items} handleDelete={handleDelete} /></div>
  )
}

export default AdminDashBoardPage