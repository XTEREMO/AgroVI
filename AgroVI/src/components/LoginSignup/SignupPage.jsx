/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import './LoginSignupStyle.css';
import userData from '../../../server/TempDatabase/userData'
import { useNavigate } from "react-router-dom";


const SignupPage = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const SignupSubmitForm = (e)=>{
    e.preventDefault();
    let result = userData.filter(obj => {
      return obj.userEmail === email 
    })
    
    if(result[0].length !== 1){
      userData.push({
        userName: name,
        userEmail: email,
        userPhone: phone,
        userPassword: password
      });
    }
    navigate('/login');
  }



  return (
    <>
      <div className="container-box signup-box">
        <form onSubmit={SignupSubmitForm}>
            <input type="text" placeholder="Name" id="username" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone No" id="phone" onChange={(e)=>setPhone(e.target.value)}/>
            <input type="password" placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)}/>

            <button className="login-btn">Sign UP</button>
              <div className="social">
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
              </div>
          </form>
      </div>
    </>
  );
};

export default SignupPage;
