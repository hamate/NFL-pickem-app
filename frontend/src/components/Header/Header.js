import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import { logoutAction } from '../../actions/sessionAction';
import { setUserAction } from '../../actions/userActions';

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.username);

  function loggingOut() {
    dispatch(logoutAction());
    dispatch(setUserAction(''))
    const keysToRemove = ['token', 'userName'];
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
  }

  const loggedInLinks = [{ text: 'Logout', path: '/login' }];
  const loggedOutLinks = [
    { text: 'Login', path: '/login' },
    { text: 'Register', path: '/register' },
  ];
  let currentStatus = loggedOutLinks;

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  if (userName) {
    currentStatus = loggedInLinks;
  }
  return (
    <div className="header" key="header">
      <Link className="headerMain" to="/main" style={linkStyle}>
        Hello {userName}
      </Link>
      <div>
        {currentStatus.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            style={linkStyle}
            className="link"
            onClick={() => {
              if (item.text === 'Logout') {
                loggingOut();
              }
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {
  loggingOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

export default Header;
