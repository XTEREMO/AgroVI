/* eslint-disable no-unused-vars */
import React,{useState,useContext} from "react";
import './LoginSignupStyle.css'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const LoginPage = () => {

  const navigate = useNavigate();

  const [loginData,setLoginData] = useState({ email:"", password:"" })
  const [error,setError] = useState( {email:false,password:false})

  const {appState,dispatch} = useContext(AppContext);


  const setInput =(e)=>{
    const {name,value} = e.target;
    setLoginData({...loginData,[name]:value})
  }

  const LoginSubmitForm = async(e)=>{
    e.preventDefault();
    await fetch('http://localhost:8000/login',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    }).then( response=>response.json()).then(data=> {
      dispatch({ type: "LOGIN_STATUS", value: true });
      navigate('/crop-recommendation');
    })
  }

  return (
    <>
      <div className="container-box login-box">
        <form onSubmit={LoginSubmitForm}>
            <input type="email" name="email" className={error.email?'red-border':''} placeholder="Email" onChange={setInput}/>
            <input type="password" name="password"  className={error.password?'red-border':''} placeholder="Password" onChange={setInput}/>

            <button className="login-btn">Log In</button>
              <div className="social">
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
              </div>
          </form>
      </div>
    </>
  );
};


export default LoginPage;
