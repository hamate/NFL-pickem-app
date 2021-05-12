import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import fetchDataGeneral from '../utilities/generalFetch';
import './styles/main.css';

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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CreateLeague() {
  const classes = useStyles();
  const [leagueName, setLeagueName] = useState('');
  const [sportId, setSportId] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [availableSports, setAvailableSports] = useState([]);
  const [password, setPassword] = useState('');
  const history = useHistory();
  // const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userid);

  useEffect(async () => {
    const allLeaguesData = await fetchDataGeneral('/allLeagues');
    // to control available sports
    const filteredLeagues = allLeaguesData.filter(
      (lg) => lg.strLeague === 'NFL' || lg.strLeague === 'NBA',
    );
    setAvailableSports(filteredLeagues);
  }, []);
  console.log(userId);

  const onLeagueNameChange = (e) => {
    e.preventDefault();
    setLeagueName(e.target.value);
  };

  const onSportIdChange = (e) => {
    e.preventDefault();
    setSportId(e.target.value);
  };

  const onMaxUsersChange = (e) => {
    e.preventDefault();
    setMaxUsers(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = '/addLeague';
    const method = 'POST';
    const leagueData = {
      userId,
      leagueName,
      sportId,
      maxUsers,
      password,
    };
    console.log(leagueData);
    await fetchDataGeneral(endpoint, method, leagueData);
    history.push({
      pathname: '/main',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <header>Create league</header>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="leagueName"
                label="League Name"
                type="leagueName"
                id="leagueName"
                onChange={onLeagueNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="league-select-label">Sport</InputLabel>
              <Select
                labelId="league-select-label"
                id="league-select"
                value={sportId}
                onChange={onSportIdChange}
              >
                {availableSports.map((sport) => (
                  <MenuItem key={sport.idLeague} value={sport.idLeague}>
                    {sport.strLeague}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="maxUsers"
                label="Max Users"
                type="maxUsers"
                id="maxUsers"
                onChange={onMaxUsersChange}
              />
            </Grid>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
