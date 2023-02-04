import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedProvider = ({ children }) => {
  const { user } = useAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return  <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedProvider;