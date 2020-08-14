import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import Header from './Header'
import { withStyles } from '@material-ui/styles'

const useStyles = ({
    labelOneStyles: {
        backgroundColor: '#FF8C22',
        textAlign: 'center',
        width: '45rem',
        margin: '0 auto',
        fontSize: '4rem',
        marginTop: '-2.5rem',
        color: 'white'
    }
})

class Main extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container direction='column'>
                <Grid item container>
                    <Nav/>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 className={classes.labelOneStyles}>FOOD FOR THOUGHT</h1>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Main)
