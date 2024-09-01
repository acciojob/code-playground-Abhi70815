import React,{useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PlayGround from './PlayGround';
import Login from './Login';
import Error from './Error';

const PrivateRoute = () => {
  const [authenticate, setAuthenticate]=useState(false);

  return (
    <div className='main-container'>
       {authenticate ? <P>Logged in, Now you can enter Playground</P> : <p>You are not authenticated, Please login first</p>}

       <div>
      <ul>
        <li><Link to="/playground">PlayGround</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <Routes>
        <Route path='/playground' element={<PlayGround/>}/>
        <Route path='/login' element={<Login auth={authenticate} setAuth={setAuthenticate}/>}/>
        <Route path='/' element={<Error/>}/>
      </Routes>
    </div>
    </div>
  )


}

export default PrivateRoute