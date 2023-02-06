import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { Navigate } from "react-router-dom";

const AuthReducer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  if (!isLoggedIn) {
    return <div>You are not logged in</div>;
  }

  return <Navigate to="/landing" />;
};

export default AuthReducer;
