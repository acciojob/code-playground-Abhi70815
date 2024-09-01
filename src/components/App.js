
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Login from "./Login";
import PlayGround from "./PlayGround";
import { Link, Route, Routes } from "react-router-dom";
import Error from "./Error";


const App = () => {
  const [message,setmessage]=useState('You are not authenticated, Please login first');
  const [islogin,setislogin]=useState(false);
  const [path,setpath]=useState('/Login');
  const [btn,setbtn]=useState('Log In');
  useEffect(()=>{
    if (islogin) {
      setpath('/playground');
    }else{
      setpath('/login');
    }
 
  },[islogin]);
  return (
    <div className="main-container">
     <p>{message}</p>
     <ul>
      <li><a><Link to={path}>PlayGround</Link></a></li>
      <li><a><Link to="/login">Login</Link></a></li>
     </ul>
      {/* <a href={path}>PlayGround</a><br/>
      <a href="/login">Login</a> */}
      <Routes>
        <Route path="/login" element={ <Login btn={btn} setbtn={setbtn} islogin={islogin} setislogin={setislogin} message={setmessage} />} >Login</Route>
        <Route path="/playground" element={<PlayGround />}>PlayGround</Route>
        <Route path="*" element={<Error/>}>NotFound</Route>
        {/* <Route path="/NotFound" element={<NotFound />}>PlayGround</Route> */}
      </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App