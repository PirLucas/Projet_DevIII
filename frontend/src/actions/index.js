export const login = (username, password) => async (dispatch) => {
    // Make a request to the server to authenticate the user
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    // Parse the response to get the data
    const data = await response.json();
    
    if (data.success) {
      // If the login was successful, dispatch an action to update the authentication state
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      // If the login was not successful, dispatch an action to show an error message
      dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
    }
  };
  