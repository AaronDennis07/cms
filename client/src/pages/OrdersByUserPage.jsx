import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import OrdersByUser from '../components/OrdersByUser'
import Navbar from '../components/Navbar'

const OrdersByUserPage = () => {
  const [params,setParams] = useSearchParams()
  const id = params.get("id")
  const navigate = useNavigate()
    const [orders,setOrders] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8080/api/v1/orders?id=${id}`)
      .then((res)=>{
        setOrders(res.data)
        console.log(res.data);
      })
    },[])
    return (
      <div className='w-[100%]'>
        <Navbar user="user"/>
        {orders.length===0 && <p>No orders yet</p>}
      {orders.length>0 && <OrdersByUser orders={orders}/>}
      </div>
    );
 
}

export default OrdersByUserPage