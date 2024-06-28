import React from 'react';
import "./login.css";

const Login = () => {
  return (
    <div className='login_page'>
        <div className="login_container">
            <div className='login_container_left'>
                <h1>Logo</h1>
                <div>
                    <h1>Welcome to our chat app</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iste impedit saepe voluptate, at doloribus eveniet totam iure optio quibusdam eaque ipsa.
                         Ea amet necessitatibus consequatur quidem. Optio, quaerat. Exercitationem, quod?</p>
                </div>

                <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className='login_container_right'>
                <div>
                    <h1>Login Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username'/>
                        </div>
                        <div>
                        <label htmlFor="pwd">Password</label>
                        <input type="password" name='pwd'/>
                        </div>
                        <div>
                        <input type="checkbox" name='ckb'/>
                        <label htmlFor="ckb">Stay loggen in</label>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
