import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Picker from '../components/Picker/Picker';
import './styles/loggedInMain.css';

function LoggedInMain() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <div className="main-frontpage">
        {/* <div className="main-side main-side-panel-left"></div>
        <div className="main-container">
          <div className="content-container"></div>
        </div>
        <div className="main-side main-side-panel-right"></div> */}
        <header>Your leagues</header>
        <Link to="/createLeague" className="league-btn">Create league</Link>
        <Link to="/joinLeague" className="league-btn">Join league</Link>
        <Picker />
      </div>
    </div>
  );
}

export default LoggedInMain;
