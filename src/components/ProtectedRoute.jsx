import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(ShopContext);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This is a good practice for user experience.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;