import fetchDataGeneral from '../utilities/generalFetch';

export const setSelectedLeagueAction = (leagueData) => ({
  type: 'SET_SELECTED_LEAGUE',
  payload: leagueData,
});

export const setLeagueAction = (selectedLeagueName) => setSelectedLeagueAction(
  { selectedLeagueName },
);
