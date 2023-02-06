import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";

const Logout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      alert("You have been logged out")
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <h1>Log Out</h1>
      {user ? (
        <>
          <h1>{user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h1>Not Logged In</h1>
      )}
    </div>
  );
};

export default Logout;
