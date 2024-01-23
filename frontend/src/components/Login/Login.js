import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Navbar from "../home/Navbar";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";


 function Login(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name , email , password})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
 return (
  <div>
          <Navbar/>

    <div className={loginstyle.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <p className={basestyle.error}></p>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=>setPassword(e.target.value)}

                    />
                </div>
                <button className={basestyle.button_common} type="submit" >
                    Register
                </button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0">
              Login
            </Link>
        </div>

    </div>
    
  );
};
export default Login;