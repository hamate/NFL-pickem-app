import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../pages/styles/register.css';
import PasswordStrengthMeter from './PasswordStrengthMeter/PasswordStrengthMeter';
import fetchDataGeneral from '../utilities/generalFetch';
import {
  loginStartedAction,
  loginSuccessAction,
} from '../actions/sessionAction';
import { setLoginError } from '../actions/errorActions';
import { setUserAction, setUserAsyncAction } from '../actions/userActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={`${process.env.REACT_APP_FRONTEND}/login`}>
        crypto-site
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form(props) {
  const { formType } = props;
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.error.loginError);

  const onUsernameChange = (e) => {
    if (loginError) {
      dispatch(setLoginError(''));
    }
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    if (loginError) {
      dispatch(setLoginError(''));
    }
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    if (loginError) {
      dispatch(setLoginError(''));
    }
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    dispatch(loginStartedAction());

    const endpoint = '/login';
    const method = 'POST';
    const loginData = {
      username,
      password,
    };

    try {
      const loginResponse = await fetchDataGeneral(endpoint, method, loginData);
      window.localStorage.token = loginResponse.token;
      window.localStorage.userName = loginResponse.username;
      dispatch(setUserAction({userName: loginResponse.username}));
      setPassword('');
      setUsername('');
      history.push('/main');
      return dispatch(loginSuccessAction(loginResponse.token));
    } catch (error) {
      return dispatch(setLoginError(error.message));
    }
  };

  const registerUser = async () => {
    dispatch(loginStartedAction());

    const endpoint = '/register';
    const method = 'POST';
    const registData = {
      username,
      email,
      password,
    };

    try {
      await fetchDataGeneral(
        endpoint,
        method,
        registData,
      );
      history.push({
        pathname: '/login',
      });
    } catch (error) {
      dispatch(setLoginError(error.message));
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'login') {
      if (!username || !password) {
        dispatch(setLoginError('All the input fields are required'));
        return null;
      }
      loginUser();
    }
    if (formType === 'register') {
      if (!username || !email || !password) {
        dispatch(setLoginError('All the input fields are required'));
        return null;
      }
      registerUser();
    }
    return null;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {formType === 'login' ? (
          <h1 className="welcome-text">Welcome to the crypto-site, please sign in!</h1>
        ) : (
          <h1 className="welcome-text">Welcome to the crypto-site, please sign up!</h1>
        )}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete="current-username"
                onChange={onUsernameChange}
              />
            </Grid>
            {formType === 'register' ? (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onEmailChange}
                />
              </Grid>
            ) : null}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onPasswordChange}
              />
            </Grid>
            {formType === 'register' && (
              <PasswordStrengthMeter password={password} />
            )}
            {loginError && (
              <div className="error-message">
                <p>{loginError}</p>
                <i className="fas fa-exclamation-triangle" />
              </div>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {formType === 'register' ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {formType === 'register' ? (
                <Link
                  href={`${process.env.REACT_APP_FRONTEND}/login`}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              ) : (
                <Link
                  href={`${process.env.REACT_APP_FRONTEND}/register`}
                  variant="body2"
                >
                  Don&apos;t have an account yet? Sign up
                </Link>
              )}
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                  href={`${process.env.REACT_APP_FRONTEND}/main`}
                  variant="body2"
                >
                  Continue without account
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

Form.propTypes = {
  formType: PropTypes.string.isRequired,
  loginError: PropTypes.string.isRequired,
};
