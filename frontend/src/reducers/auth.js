function reducer(state = { isAuthenticated: false, errorMessage: null }, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true };
      case 'LOGIN_FAILURE':
        return { ...state, isAuthenticated: false, errorMessage: action.payload };
      default:
        return state;
    }
  }
  
  export default reducer;