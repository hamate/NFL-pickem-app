import generalDataFetch from '../utilities/generalDataFetch';

export const eventsServices = {
  async getRoundEvents(roundNum) {
    // have to enable below in produciton
    // const year = new Date().getFullYear().toString();
    const year = '2020';
    const URL = `https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=4391&r=${roundNum}&s=${year}`;
    const eventsFetch = await generalDataFetch(URL);
    const result = await eventsFetch.jsonData.events;
    const eventsResult = result.map((ev) => ({
      idEvent: ev.idEvent,
      strEvent: ev.strEvent,
      strHomeTeam: ev.strHomeTeam,
      strAwayTeam: ev.strAwayTeam,
      intHomeScore: ev.intHomeScore,
      intAwayScore: ev.intAwayScore,
      dateEventLocal: ev.dateEventLocal,
      strTime: ev.strTime,
      idHomeTeam: ev.idHomeTeam,
      idAwayTeam: ev.idAwayTeam,
    }));

    return eventsResult;
  },
  async getAllLeagues() {
    console.log('service1');
    const URL = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    const leaguesFetch = await generalDataFetch(URL);
    const result = await leaguesFetch.jsonData.leagues;
    const leaguesResult = result.map((lg) => ({
      idLeague: lg.idLeague,
      strLeague: lg.strLeague,
      strSport: lg.strSport,
    }));
    console.log('service2');
    return leaguesResult;
  },
};
