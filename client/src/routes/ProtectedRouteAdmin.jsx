import React from 'react'
import { useAuth } from '../provider/authProvider';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteAdmin = () => {
  const { token } = useAuth();
  console.log(token.role)
  
  if (!token || token.role.localeCompare("ADMIN") !== 0) {

    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
}

export default ProtectedRouteAdmin