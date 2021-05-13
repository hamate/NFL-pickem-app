import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLeagueAction } from '../actions/leagueActions';
import fetchDataGeneral from '../utilities/generalFetch';
import './styles/main.css';

function LoggedInMain() {
  const [userLeagues, setUserLeagues] = useState([]);
  const userId = useSelector((state) => state.user.userid);
  const dispatch = useDispatch();

  useEffect(async () => {
    const userLeaguesData = await fetchDataGeneral(`/userLeagues/${userId}`);
    const leagueNames = userLeaguesData.map((lg) => lg.league_name);
    setUserLeagues(leagueNames);
  }, []);

  function userHasLeagues(lg) {
    return (
      <div key={lg}>
        <Link onClick={() => dispatch(setLeagueAction(lg))} to={{ pathname: '/picker', leagueName: lg }} className="user-leagues-list">{lg}</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="main-frontpage">
        {/* <div className="main-side main-side-panel-left"></div>
        <div className="main-container">
          <div className="content-container"></div>
        </div>
        <div className="main-side main-side-panel-right"></div> */}
        <Link to="/createLeague" className="league-btn create-league-btn">Create league</Link>
        <Link to="/joinLeague" className="league-btn join-league-btn">Join league</Link>
        {userLeagues.length > 0
          ? (
            <div>
              <header>Your leagues</header>
              {userLeagues.map((lg) => userHasLeagues(lg))}
            </div>
          )
          : 'You haven\'t joined any league yet.'}
      </div>
    </div>
  );
}

export default LoggedInMain;
