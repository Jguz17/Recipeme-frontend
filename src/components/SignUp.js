import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/user';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = ({
  formStyles: {
    textAlign: 'center'
  },
  formContainerStyles: {
    backgroundColor: '#FF8C22'
  }
})

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props
    return (
      <Grid container direction='column'>
        <Grid className={classes.formContainerStyles} container item>
          <Grid item sm={2}/>
          <Grid item sm={8}>
            <form className={classes.formStyles} onSubmit={this.handleSubmit}>
              <input name='username' value={username} onChange={this.handleChange} />
              <br/>
              <input name='password' type='password' value={password} onChange={this.handleChange} />
              <button type='submit'>Login</button>
            </form>
          </Grid>
          <Grid item sm={2}/>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { signUpUser: (user) => dispatch(signUpUser(user)) };
};

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(SignUp));