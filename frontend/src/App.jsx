import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { logoutAction, setSessionAction } from './actions/sessionAction';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import LoggedInMain from './pages/LoggedInMain';
import CreateLeague from './pages/CreateLeague';
import JoinLeague from './pages/JoinLeague';
import { setUserNameAction } from './actions/userActions';
import Header from './components/Header/Header';
import Picker from './components/Picker/Picker';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  console.log(isAuthenticated);
  const tokenExists = () => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token');
      return true;
    }
    return false;
  };
  useEffect(() => {
    dispatch(setSessionAction());
    dispatch(setUserNameAction());
  }, [dispatch]);

  function loggingOut() {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  }
  return (
    <Router>
      <div className="App">
        {window.location.pathname !== '/register' && window.location.pathname !== '/login' ? <Header /> : null}
        <Switch>
          <Route exact path="/">
            {tokenExists() ? (
              <Redirect to="/main" loggingOut={loggingOut} />
            ) : (
              <Redirect to="/home" />
            )}
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={LoggedInMain} />
          <Route exact path="/createLeague" component={CreateLeague} />
          <Route exact path="/joinLeague" component={JoinLeague} />
          <Route exact path="/makePicks" component={Picker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
