import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard'

const useStyles = ({

    header1styles: {
        margin: '0 auto',
        fontSize: '2rem'
    }
})

export class SearchResults extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid item container>
                <Grid item sm={1}/>
                <Grid container item sm={10}>
                    <Typography className={classes.header1styles}>
                        Your Results will appear below
                    </Typography>
                    <Grid style={{'textAlign': '-webkit-center'}} item container xs={12}>
                        {this.props.recipes.map(recipe => {
                            return <Grid item xs={4}>
                                <RecipeCard recipe={recipe}/>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                <Grid item sm={1}/>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(SearchResults)
