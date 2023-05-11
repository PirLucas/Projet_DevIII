import React from "react";
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...props }) {
  const { isAuthenticated } = useSelector(state => state.auth);

  return isAuthenticated ? <Route {...props} element={element} /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
