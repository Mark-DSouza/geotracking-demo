import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        GeoTracking Demo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  displayNone: {
    display: 'none',
  },
  displayBlock: {
    display: 'block',
  }

}));

export default function SignIn(
  {
    args: 
      {
        latitude,
        longitude,
        email,
        password,
        userRegion,
        userRegionCode,
        errorMessage,
        handleChange,
        hasGeolocation,
      }
  }
) 
{
  // const {
  //   latitude,
  //   longitude,
  //   email,
  //   password,
  //   userRegion,
  //   userRegionCode,
  //   errorMessage,
  //   handleChange,
  //   hasGeolocation,
  // } = props.args;

  // const {
  //   latitude,
  //   longitude,
  //   email,
  //   password,
  //   userRegion,
  //   userRegionCode,
  //   errorMessage,
  //   handleChange,
  //   hasGeolocation,
  // } = props;
  
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon color={hasGeolocation ? "primary" : "secondary"}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus

            disabled={!hasGeolocation}
            error={!hasGeolocation}
            helperText={errorMessage}
            value={email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

            disabled={!hasGeolocation}
            error={!hasGeolocation}
            helperText={errorMessage}
            value={password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            disabled={!hasGeolocation}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.paper}>
        <h2>
          User's Geolocation Information
        </h2>
        {/* <button onClick={this.getLocation}>Get Coordinates</button> */}
        <h4>HTML5 Coordinates</h4>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <br />
        <h4>Google Maps Reverse Geocoding</h4>
        <p>Region: {userRegion}</p>
        <p>Region Code: {userRegionCode}</p>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
