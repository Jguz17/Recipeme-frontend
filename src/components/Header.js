import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Image from "../images/bg-2.jpg"
import { withStyles } from '@material-ui/core/styles';

const useStyles = ({
    headerStyles: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
})

export class Header extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.headerStyles} item>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Header)
