import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { setUserAsyncAction } from '../actions/userActions';
import './styles/home.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={`${process.env.REACT_APP_FRONTEND}/login`}>
        Your Website
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
    margin: theme.spacing(3, 2, 2),
  },
}));

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserAsyncAction());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Container className="main-page-container" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1 className="welcome-text">
          Welcome to the NFL pick'em site!
        </h1>
        <h2 className="welcome-text">
          Please Sign In or Register!
        </h2>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="main-button"
          href={`${process.env.REACT_APP_FRONTEND}/login`}
        >
          Sign In
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="main-button"
          href={`${process.env.REACT_APP_FRONTEND}/register`}
        >
          Register
        </Button>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;
