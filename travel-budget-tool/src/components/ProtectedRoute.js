import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

// This component will ensure that the user is authenticated before accessing protected routes
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If no user is logged in, redirect them to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the children (protected page)
  return children;
};

export default ProtectedRoute;
