import React, { useEffect, useState } from 'react'
import ViewSingleOrder from '../components/ViewSingleOrder'
import Navbar from '../components/Navbar'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../provider/authProvider'

const ViewSingleOrderPage = () => {
  const [params,setParams] = useSearchParams()
  const id = params.get("id")
  const {token} = useAuth()
  const navigate = useNavigate() 
  const [order,setOrder] = useState([])
  const getOrder = async(id)=>{
    console.log(id)
   
        axios({
          method: 'get',
          url: `http://localhost:8080/api/v1/orders/${id}`,
        
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }).then((data)=>{
            const fetched = data.data
         
            setOrder(()=>fetched)
        })
}

useEffect(()=>{
    getOrder(id)
   
},[])

  return (
    <div>
      <Navbar user={token.role === 'ADMIN' ? 'admin' : 'user'}/>
      <ViewSingleOrder order={order}/>
    </div>
  )
}

export default ViewSingleOrderPage