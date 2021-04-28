import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/main.css';

function LoggedInMain() {
  const [userLeagues, setUserLeagues] = useState('');
  useEffect(() => {
    setUserLeagues(['NFL first league', 'NBA playoffer', 'this is my lg', 'never back down']);
  }, []);

  function userHasLeagues(lg) {
    return (
      <div>
        <div className="user-leagues-list" key={lg}>{lg}</div>
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
