export const setErrorMessage = (message) => ({ type: 'SET_ERROR', error: message });

export const setLoginError = (errorMessage) => ({ type: 'LOGIN_FAILED', payload: errorMessage });
