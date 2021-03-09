import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Route, Link, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Picker from '../components/Picker/Picker';
import './styles/loggedInMain.css';

function LoggedInMain() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <Header />
      <div className="main-frontpage">
        {/* <div className="main-side main-side-panel-left"></div>
        <div className="main-container">
          <div className="content-container"></div>
        </div>
        <div className="main-side main-side-panel-right"></div> */}
        <Picker />
      </div>
    </div>
  );
}

export default LoggedInMain;
