import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import theme from '../themes/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import '../styles/main.css'

const useStyles = ({
    typographyStyles: {
        flex: 1,
        color: 'white'
    },
    buttonColor: {
        color: 'white'
    }
})

export class Nav extends Component {
    render() {
        const { classes } = this.props
        return (
            <ThemeProvider theme={theme}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h4' className={classes.typographyStyles}><a href='#'>Recipeme</a></Typography>
                        <Link to={'/login'}><Button className={classes.buttonColor}>Login</Button></Link>
                        <Link to={'/signup'}><Button className={classes.buttonColor}>Signup</Button></Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        )
    }
}

export default withStyles(useStyles)(Nav)
