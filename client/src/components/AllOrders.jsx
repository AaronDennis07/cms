import React from 'react'
import { NavLink } from 'react-router-dom'

const AllOrders = ({orders}) => {
  console.log(orders)
  return (
    <div className='w-[100%]'> 
      <ul className="menu menu-lg bg-base-200 w-[60%] mx-auto rounded-box mt-10">
        {orders && orders?.map((order)=>(
          <li className=''>
          <NavLink to={`/order?id=${order.id}`}>Order #{order.id}</NavLink>
        </li>
        ))}
        
        
      </ul>
      
    </div>
  )
}

export default AllOrders