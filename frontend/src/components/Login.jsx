import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/index';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the login action with the username and password
    dispatch(login(username, password));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
