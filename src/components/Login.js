import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        alert("You have been logged in");
        navigate("/landing");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>Log In</h1>
      {currentUser ? <h1>{currentUser.email}</h1> : null}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="w-100 text-center mt-2">
        Create a new account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
