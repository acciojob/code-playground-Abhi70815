import React,{useState} from 'react'

const Login = (props) => {
 const handlelogin=()=>[
  props.setbtn(btn=>{
    if(btn=='Log In'){
      props.setLogin(true);
      props.message('Logged in, Now you can enter playground');
      return 'Log Out';
    }
    else{
      props.setLogin(false);
      props.message('You are not authenticated, Please login first');
      return 'Log In'
    }
  })
 ]
  return (
    <div>
      <p>Login</p>
      <button onClick={handlelogin}>{props.btn}</button>
    </div>
  )
}

export default Login