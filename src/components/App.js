import React from "react";
import { Container } from "react-bootstrap";
import SingUp from "./Signup";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Logout from "./Logout";
import Tutor from "./Tutor";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path={"/"} element={<Landing />} />
              <Route path={"/landing"} element={<Landing />} />
              <Route path={"/signup"} element={<SingUp />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/forgot-password"} element={<ForgotPassword />} />
              <Route path={"/logout"} element={<Logout />} />
              <Route path={"/tutor"} element={<Tutor />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
