import React from "react";
import { Container } from "react-bootstrap";
import StudentSingUp from "./Signup";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import StudentLogin from "./Login";
import StudentForgotPassword from "./ForgotPassword";
import ProtectedProvider from "./ProtectedProvider";
import Admin from "./Admin";
import TutorSignup from "./TutorSignup"
import StudentUpdateProfile from "./UpdateProfile";

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
              <Route path={"/"} element={<ProtectedProvider><Landing/></ProtectedProvider>}/>
              <Route path={"/landing"} element={<Landing />} />
              <Route path={"/signup"} element={<StudentSingUp />} />
              <Route path={"/login"} element={<StudentLogin />} />
              <Route path={"/forgot-password"} element={<StudentForgotPassword />} />
              <Route path={"/admin"} element={<Admin/>}/>
              <Route path={"/tutor/"} element={<TutorSignup/>} />
              <Route path={"/student/update-profile"} element={<StudentUpdateProfile/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
