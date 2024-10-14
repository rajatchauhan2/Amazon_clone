import React, { useState } from 'react';
import "./signup.css";
import { NavLink } from "react-router-dom";

const Signin = () => {

  const [logdata,setData] = useState({
    email:"",
    password:""
  });

  console.log(logdata);
  

  const adddata = (e)=>{
    const {name,value} = e.target;

    setData(()=>{
      return{
        ...logdata,
        [name]:value
      }
    })
  }

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./logo.jpg" alt="logo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={adddata}
                value={logdata.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={adddata}
                value={logdata.password}
                placeholder="Enter your password"
              />
            </div>
            <button className='signin_btn'>Continue</button>
            
          </form>
        </div>
        <div className="create_accountinfo">
            <p>New to Shopper Hub</p>
           <NavLink to="/signup"> <button> Create your Shopper Hub account</button></NavLink>
        </div>
      </div>
    </section>
  );
};

export default Signin;
