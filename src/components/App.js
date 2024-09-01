import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import PlayGround from './PlayGround'
import Error from './Error';


const App = () => {
    const [message, setMessage]=useState('you are not authenticated, Please login first');
    const [islogin, setLogin]= useState(false);
    const [path, setPath]= useState('/login');
    const [btn, setbtn]=useState('Log In');
    useEffect(()=>{
        if(islogin){
            setPath('/playground');
        }
        else{
            setPath('/login');
        }
    },[islogin]);
    console.log(islogin)

  return (
    <div className='main-container'>
 <p>{message}</p>
 <ul>
    <li><Link to={path}>PlayGround</Link></li>
    <li><Link to="/login">Login</Link></li>
 </ul>
 <Routes>
    <Route path='/login' element={<Login btn={btn} setbtn={setbtn} islogin={islogin} setLogin={setLogin} message={setMessage}/>}>Login</Route>
    <Route path='/playground' element={<PlayGround/>} >PlayGround</Route>
    <Route path='*' element={<Error/>}>NotFound</Route>
 </Routes>
    </div>
  )
}

export default App