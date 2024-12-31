import React from "react";
import { useNavigate } from "react-router-dom";

const PublicPage = () => {
  const navigate = useNavigate();

  // sign in button
  const handleSignIn = () => {
     navigate("/protected")
  }

  return (
    <div>
      <h1>Welcome to the Public Page</h1>
      <p>This page is accessible to everyone.</p> <br/>
      <button onClick={handleSignIn} className="bg-red-400 p-2 m-2 mx-3 rounded-lg">Sign In</button>
    </div>
  );
};

export default PublicPage;
