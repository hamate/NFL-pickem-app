const initialState = {
  // selectedLeagueId: '',
  selectedLeagueName: '',
};

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_LEAGUE':
      return {
        ...state,
        selectedLeagueName: action.payload.selectedLeagueName,
        // selecedLeagueId: action.payload.selectedLeagueId,
      };
    default:
      return state;
  }
};

export default leagueReducer;
