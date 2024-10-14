import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    Mobile: "",
    password: "",
    Cpassword: ""
  });

  console.log(udata);
  

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(()=>{
      return{
        ...udata,
        [name]: value
        }
        })
        }
   

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./logo.jpg" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="Name">Your Name</label>
              <input type="name" name="name" id="name"
              onChange={adddata}
              value={udata.name} 
              placeholder="Enter your name" />
            </div>
            <div className="form_data">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={adddata}
                value={udata.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Mobile">Mobile Number</label>
              <input
                type="Mobile"
                name="Mobile"
                id="Mobile"
                onChange={adddata}
                value={udata.Mobile}
                placeholder="+91 1234567891"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={adddata}
                value={udata.password}
                placeholder="Enter your password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Cpassword ">Confirm Password</label>

              <input
                type="Cpassword"
                name="Cpassword"
                id="Cpassword"
                onChange={adddata}
                value={udata.password}
                placeholder="Confirm Password"
              />
            </div>
            <button className="signin_btn">Continue</button>
            <div className="signin_info">
              <p>Already have an account</p>
              <NavLink to="/signin">Signin</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
