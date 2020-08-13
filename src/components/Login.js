import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Image from "../images/bg-1.jpg"

import { Link } from 'react-router-dom'

const useStyles = ({
  leftContainerStyles: {
    height: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backkgroundPosition: 'center'
  },
  rightContainerStyles: {
    height: '100vh',
    backgroundColor: '#FF8C22',
    textAlign: 'center',
    paddingTop: '10rem'
  },
  textInputs: {
    width: '50%',
    height: '2rem',
    marginBottom: '3rem',
    border: 'none',
    backgroundColor: '#F6F6F6',
    outline: 'none'
  },
  formStyles: {
    backgroundColor: 'white',
    borderRadius: '10px',
    minHeight: '20rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  buttonStyles: {
    width: '35%',
    minHeight: '2rem',
    border: 'none'
  }
})

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props
    return (
      <Grid container direction='column'>
        <Grid container item>
          <Grid className={classes.leftContainerStyles} item sm={6}></Grid>
          <Grid className={classes.rightContainerStyles} container item sm={6}>
           <Grid item sm={2}/>
           <Grid item sm={8}>
            <form className={classes.formStyles} onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <input className={classes.textInputs} name='username' value={username} onChange={this.handleChange} placeholder='username' />
                <input
                  className={classes.textInputs}
                  name='password'
                  type='password'
                  value={password}
                  onChange={this.handleChange}
                  placeholder='password'
                />
                <br/>
                <input className={classes.buttonStyles} type='submit'/>
                <p>Don't have an account? <span><Link to={'/signup'}>Click here</Link></span> to sign up</p>
              </form>
           </Grid>
           <Grid item sm={2}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (user) => dispatch(loginUser(user)) };
};

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Login));
