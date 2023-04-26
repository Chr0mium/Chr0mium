import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css';
function SignUp() {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('')
    const [adress , setAdress] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [phoneNo , setPhoneNo] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setAdress('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNo();

        let userRecord=[];
        userRecord=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(userRecord.some((v)=>{return v.email===email}))
        {
           alert("duplicate data");
        }
        else
        {
           userRecord.push({
           "firstName": firstName,
           "lastName": lastName,
           "email": email,
           'adress': adress,
           "password":password,
           'confirmPassword': confirmPassword,
           'phoneNo': phoneNo

        })
            localStorage.setItem("users",JSON.stringify(userRecord));
            window.location.href="http://localhost:3000/"
        }
    }


  return (
    <div className='SignUp'>
      <div>
      <form className='SignUp-form signup-form-container'>
        
            <div className='name-feild'>
                {/* <label>First Name:</label> */}
                <input 
                 className='input-feild'
                 type='text'
                 value={firstName}
                 placeholder = 'First Name'
                 onChange={(e) => {setFirstName(e.target.value)}}
                />
            </div>
            <div className='name-feild'>
                {/* <label>Last Name:</label> */}
                <input 
                type='text'
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => {setLastName(e.target.value)}}
                />
            </div>
            <div className='email-feild'>
                {/* <label>Email:</label> */}
                <input
                 type='email'
                 value={email}
                 placeholder='Email'
                 onChange={(e) => {setEmail(e.target.value)}}
                 />
            </div>
            <div className='contact-feild'>
                {/* <label>Phone No.:</label> */}
                <input
                 type='number'
                 value={phoneNo}
                 placeholder='Contact Number'
                 onChange={(e) => {setPhoneNo(e.target.value)}}
                 />
            </div>
            <div className='adress-feild'>
                {/* <label>Adress:</label> */}
                <textarea
                placeholder='Adress'
                 type='text'
                 value={adress}
                 onChange={(e) => {setAdress(e.target.value)}}
                 />
            </div>
            <div className='paswword-feild'>
                {/* <label>Password:</label> */}
                <input
                placeholder='Password'
                 type='password'
                 value={password}
                 onChange={(e) => {setPassword(e.target.value)}}
                 />
            </div>
            <div>
                {/* <label>Confirm Password:</label> */}
                <input
                placeholder='Confirm Password'
                 type='password'
                 value={confirmPassword}
                 onChange={(e) => {setConfirmPassword(e.target.value)}}
                 />
            </div> 
            <button type='submit' onClick={handleSubmit}>Submit</button>  
        
      </form>
      </div>
      <Link  className='link-btn' to="/">Go back to login page</Link>
    </div>
  )
}

export default SignUp
