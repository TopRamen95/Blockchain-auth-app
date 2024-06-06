import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import Web3 from "web3";

function App() {
  const email = localStorage.getItem("email");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={email? <Navigate to="/Home" /> : <SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Home" element={email? <Home /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;