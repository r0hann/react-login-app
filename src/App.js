import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const App = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const classes = useStyles();

  const handleChange = event => {
    const { target } = event;
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <main className='container'>
        <Card className={classes.card}>
          <TextField
            label='Email'
            name='email'
            className={classes.textField}
            value={data.username}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
          />
        </Card>
      </main>
    </React.Fragment>
  );
};

export default App;
