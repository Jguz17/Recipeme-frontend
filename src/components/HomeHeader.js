import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Image from "../images/bg-7.jpg"
import { withStyles } from '@material-ui/core/styles';

const useStyles = ({
    headerStyles: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    textInputStyles: {
        height: '3rem',
        width: '100%',
        border: 'none',
        outline: 'none',
        marginTop: '15rem'
    },
    formStyles: {
        margin: '0 auto',
        width: '75%'
    }
})

export class HomeHeader extends Component {

    handleChange = (e) => {
        this.props.recipe.shift()
        this.props.recipe.push(e.target.value)
    }
    
    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.headerStyles} container item>
                <Grid item sm={2}/>
                <Grid container item sm={8}>
                    <form className={classes.formStyles} onSubmit={this.props.handleSubmit}>
                        <input className={classes.textInputStyles} onChange={(e) => this.handleChange(e)} type="text" placeholder='Search...'></input>
                    </form>
                </Grid>
                <Grid item sm={2}/>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(HomeHeader)
