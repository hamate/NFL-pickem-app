import fetchDataGeneral from '../utilities/generalFetch';

export const setUserAction = (userData) => ({ type: 'SET_USER', payload: userData });
export const setUserAsyncAction = () => (async (dispatch) => {
  const method = 'GET';
  const endpoint = '/home';
  const results = await fetchDataGeneral(endpoint, method);
  return dispatch(setUserAction(results));
});

export const setUserNameAction = () => {
  const userName = localStorage.getItem('userName');
  return setUserAction({userName});
};
