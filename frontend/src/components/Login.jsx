import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loguer, setLoguer] = useState(false);

  
  async function handleSubmit(e){
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_URL}/login?`,
        {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                setCookie('jwt_test', data.token, {
                    expires: new Date(Date.now() + 600000), // 1 heure
                    secure: false, // Non limité aux connexions HTTPS => A CHANGER !!!
                    httpOnly: false // Inaccessible via JavaScript
                });
            }
        })
    console.log("loguer");
    setLoguer(true);
  }

  function setCookie(name, value, options = {}) {
      const { expires, secure, httpOnly } = options;
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

      if (expires) {
          if (expires instanceof Date) {
              cookieString += `; expires=${expires.toUTCString()}`;
          } else {
              throw new Error('Invalid "expires" parameter');
          }
      }

      if (secure) {
          cookieString += '; secure';
      }

      if (httpOnly) {
          cookieString += '; httpOnly';
      }

      document.cookie = cookieString;
  }

  if (loguer) {
    window.location.href = "/adminPanel";
  }
  else {
      return (
        <form onSubmit={handleSubmit}>
            <input required type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input required type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );}
}

export default Login;
