
import React,{useState} from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";


const App = () => {
  const [authenticated, setAuthenticated]= useState(false);
  const handleLogin=()=>{
    setAuthenticated(!authenticated);
  }
  return (
    <BrowserRouter>
        <div className="main-container">
          <ul>
            {authenticated ? "logged in, Now you can enter PlayGround": "you are not authenticated, Please login first"}

            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <button onClick={handleLogin}>
            {authenticated ? "Log Out" : "Log In"}
          </button>

          <Routes>
            <Route path="/" element={authenticated?(<Navigate to="/playground"/>):(<Navigate to="/login"/>)}/>

            <Route path="/login" element={
              authenticated ? (<Navigate to="/playground"/>):(
                <div>
                  <p>Login</p>
                </div>
              )
            }/>
          <Route path="/playground" 
          element={authenticated ? <div>Hi Welcome to Code PlayGround</div>:<Navigate to="/login"/>}
          />
          </Routes>
        </div>
              
       </BrowserRouter>
  )
}

export default App
