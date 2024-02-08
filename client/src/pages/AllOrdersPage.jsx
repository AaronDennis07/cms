import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import AllOrders from '../components/AllOrders';
import axios from 'axios';

const AllOrdersPage = () => {
  const [orders,setOrders] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/orders")
    .then((res)=>{
      setOrders(res.data)
      console.log(res.data);
    })
  },[])
  return (
    <div className='w-[100%]'>
      <Navbar user="admin"/>
      {orders.length===0 && <p>No orders yet</p>}
      {orders.length>0 && <AllOrders orders={orders}/>}
    </div>
  );
};

export default AllOrdersPage;
