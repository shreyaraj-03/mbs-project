import { useState } from 'react'
import {useDispatch} from "react-redux";
import { loginFailure, loginSuccess, loginStart } from "../../Redux/userslice.js";
import { useNavigate } from "react-router-dom";
import './Login.css';
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async(e)=>{
    //it prevent refreshing of page on clicking signin button.
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await axios.post("/login", { username, password });
      dispatch(loginSuccess(res.data));
      navigate(`/`);
    }
    catch(err){
      dispatch(loginFailure(err));
    }
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Login submitted');
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   setUsername('');
  //   setPassword('');
  // };

  //Print username and password on console
  console.log('Username:', username);
  console.log('Password:', password);

  return (
    <>
      <div className='body'>
        <div className='left'>
          <h1 >Heading</h1>
          <h2>Sub-heading</h2>
        </div>
        <div className='right'>
          <div className='form-container'>
            <h2 className='form-title'>Welcome Back,</h2>
            <form className='login-form' onSubmit={handleLogin}>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={handleUsernameChange}
                placeholder='Enter Username' />
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='Enter Password' />
              <button type='submit'>Sign On</button>
              <p className='support-text'>In case of any issues, contact Tech Central support team for assistance.</p>
            </form>
          </div>
        </div>
      </div>
      <footer className='footer-container'>
        © 1999 - 2023 Wells Fargo. NMLSR ID 399801
      </footer>
    </>
  );
};

export default LoginForm;