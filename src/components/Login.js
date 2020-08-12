import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Image from "../images/bg-1.jpg"

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
    textAlign: 'center'
  },
  textInputs: {
    width: '50%',
    marginBottom: '3rem' 
  },
  formStyles: {
    marginTop: '20%'
  },
  // buttonStyles: {
  //   width: '50%'
  // }
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
          <Grid className={classes.rightContainerStyles} item sm={6}>
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
            </form>
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
