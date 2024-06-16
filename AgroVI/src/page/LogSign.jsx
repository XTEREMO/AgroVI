/* eslint-disable no-unused-vars */
import React from 'react'
import './css/LogSign.css'



const LogSign = () => {
  return (
    <>
        <div className="logsing-body">
            <div className="sign">
                <h2 className="sign--tag">Sign Up</h2>
                <div className="sign--content">
                    <form>
                        <input type="email" className="eml inp"  placeholder="Enter your email id" />
                        <input type="password" className="pass inp" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="log">
                <h2 className="log--tag">log in</h2>
                <div className="log--content">
                    <form>
                        <input type="email" className="eml inp" placeholder="Enter your email id" />
                        <input type="password" className="pass inp" placeholder="Password" />
                        <button>Log In</button>
                        <a href="#">Forgotten password ?</a>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogSign