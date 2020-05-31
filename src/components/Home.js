import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import CheckIcon from '@material-ui/icons/Check';
import ListIcon from '@material-ui/icons/List';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} asdsdsad>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Heo Jun
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The site is based on basic health checkups.
              (Colonoscopy, gastroscopy, ultrasound of the upper abdomen, ultrasound of the lower abdomen)
              It is a page to predict inspection
            </Typography>
              <br /><br /><br />
            <Typography variant="h4" align="center" paragraph>
              <CheckIcon /> ToCheck&nbsp;&nbsp;<ArrowForwardIosIcon /> &nbsp;&nbsp;<ListIcon />View Result
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            
              It is divided into two order of progress. <br />
              #01&nbsp;&nbsp;<CheckIcon />Click to enter the number and register<br />
              &nbsp;&nbsp; #02&nbsp;&nbsp;<ListIcon />On click, the number you just entered and entered <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Based on this, it shows the predicted value.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="gray"
                  className={classes.submit}
                >
                Image Reset
                </Button>
              </Grid>
            </div>

            <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                BIT
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Data data relies on non-innovation (good doctor)!
              </Typography>
              <Copyright />
            </footer>
      
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}