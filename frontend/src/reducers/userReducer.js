const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.payload.userName,
      };
    default:
      return state;
  }
};

export default userReducer;
