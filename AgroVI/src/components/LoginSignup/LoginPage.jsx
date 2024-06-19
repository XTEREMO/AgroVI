/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import './LoginSignupStyle.css'
import userData from '../../../server/TempDatabase/userData'
import status from '../../../server/userLoginStatus'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {



  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [errorEmail,setErrorEmail] = useState(false); 
  const [errorPassword,setErrorPassword] = useState(false); 


  const LoginSubmitForm = (e)=>{
    e.preventDefault();
    let result = userData.filter(obj => {
      return obj.userEmail === email 
    })
  
    if(result.length > 0 && result[0].userPassword === password){
      status.state = true;
      navigate('/')
    }
  }

  return (
    <>
      <div className="container-box login-box">
        <form onSubmit={LoginSubmitForm}>
            <input type="text" className={errorEmail?'red-border':''} placeholder="Email" id="username" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}/>

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
