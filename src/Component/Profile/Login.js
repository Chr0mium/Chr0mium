import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        setEmail('');
        setPassword('');
        
          let userRecord=[];
          userRecord=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
          if(userRecord.some((v)=>{return v.email===email && v.password===password}))
          {
             alert("Login Successful");
            let currentUser=userRecord.filter((v)=>{return v.email===email && v.password===password})[0]
            localStorage.setItem('name',currentUser.name);
            localStorage.setItem('email',currentUser.email);
            window.location.href="http://localhost:3000/Home"
          }
         else
          {
             alert('Login Fail');
          }
    } 

  return (
    <div className='Login Login-container'>
      <form className='Login-form'>
        <fieldset>
        <h1>Sign In</h1>
            <div>
                {/* <label>Email:</label> */}
                <input
                 type='email'
                 value={email}
                 placeholder='email'
                 onChange={(e) => {setEmail(e.target.value)}}
                 />
            </div>
            <div>
                {/* <label>Password:</label> */}
                <input
                 type='text'
                 value={password}
                 placeholder='Password'
                 onChange={(e) => {setPassword(e.target.value)}}
                 />
            </div>
            <button type='submit' onClick={handleLogin}>LogIn</button>
        </fieldset>
        <Link className='link-btn' to="signup">Don't have account, Signup here.</Link>
      </form>
      
    </div>
  )
}

export default Login
