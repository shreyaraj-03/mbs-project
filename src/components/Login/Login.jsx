import { useState } from 'react'
import './Login.css' 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    console.log(`Username ${username}, Password: ${password}`);
    setPassword('');
    setUsername('');

  }
  console.log(`Username ${username}, Password: ${password}`);

  return (
    <div className='container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={username} onChange={handlePasswordChange} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;