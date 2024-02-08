import React from 'react';
import { useAuth } from '../provider/authProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({user}) => {
  const {token,setToken} = useAuth()
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={user=="user" ? '/' : '/admin/dashboard'}>Home</NavLink>
            </li>
            <li>
            {user=="user" ? <NavLink to="/summary">Cart</NavLink> : <NavLink to="/admin/addItem">Add item</NavLink>}
            {user=="admin" && <NavLink to="/admin/allOrders">All Orders</NavLink>}  
            {user=="user" && <NavLink to={`/orders?id=${token.userId}`}> My Orders</NavLink>}  
            </li>
            
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn  text-xl">Tech Tracker</a>
      </div>
      <div className="navbar-end">
        <button className="btn text-lg btn-primary" onClick={()=>{
          setToken(false)
          navigate('/login')
        }}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
