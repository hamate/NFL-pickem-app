const initialState = {
  username: '',
  userid: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.payload.userName,
        userid: action.payload.userId,
      };
    default:
      return state;
  }
};

export default userReducer;
