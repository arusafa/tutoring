import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Landing() {
  return (
    <div>
      <div className="block">
        <div className="header">
          <p>Online Tutorial Web Application</p>
        </div>
        <Link className="a" to={"/logout"}>
          Logout
        </Link>
      </div>
      <div className="main2">
        Web app that has features to promote collaboration between. 3 main
        features would be, video group chat, resources for learning, person blog
        for showing personal achievements and to find friends that like similar
        things, Whiteboard that helps the session with tutor by giving them
        tools for communication of concepts.
      </div>
      <div className="link_wrapper">
        <Link className="a" to={"#"}>
          About
        </Link>
        <Link className="a" to={"#"}>
          Features
        </Link>
        <Link className="a" to={"#"}>
          Price
        </Link>
        <Link className="a" to={"#"}>
          Benefits
        </Link>
        <Link className="a" to={"/tutor"}>
          Become Tutor
        </Link>
        <Link className="a" to={"/signup"}>
          Sign Up
        </Link>
        <Link className="a" to={"/login"}>
          Log In
        </Link>
      </div>
    </div>
  );
}
