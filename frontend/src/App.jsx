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
import { setUserNameAction } from './actions/userActions';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  const tokenExists = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    dispatch(setSessionAction());
    dispatch(setUserNameAction())
  }, [dispatch]);

  function loggingOut() {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  }
  return (
    <Router>
      <div className="App">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
