import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import Navbar from '../components/Navbar'
import axios from 'axios'

const OrderItemPage = () => {
  const [items,setItems] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/products")
    .then(res=>{
      setItems(res.data)
    })
  },[])
  return (
    <div>
      <Navbar user="user"/>
      <OrderItem items={items} />
      </div>
  )
}

export default OrderItemPage