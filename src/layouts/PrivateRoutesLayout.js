import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import {auth} from '../firebase';

const PrivateRoutesLayout = () => {
    const location = useLocation();

  return auth.currentUser ? (<Outlet/>) : (
    <Navigate to="/authentication" state={{from: location}}
    replace/>
  )
};

export default PrivateRoutesLayout
