const initialState = {
  message: '',
  loginError: '',
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        message: action.message,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loginError: action.payload,
      };
    case 'LOGIN_STARTED':
      return {
        ...state,
        loginError: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginError: '',
      };
    default:
      return state;
  }
}
