import React, { Component } from 'react'
import HomeNav from './HomeNav'
import { Grid, Typography } from '@material-ui/core'
import MyRecipeCard from './MyRecipeCard'
import { connect } from 'react-redux'

export class Recipes extends Component {

    state = {
        myRecipes: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/recipes')
        .then((res) => res.json())
        .then((data) => {
            data.map(item => {
                return item.users[0].id === this.props.user.id ? this.setState({
                    myRecipes: [...this.state.myRecipes, item]
                }) : null
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <Grid container direction='column'>
                <Grid container item>
                    <HomeNav/>
                </Grid>
                <Grid item container>
                    <Grid item sm={1}/>
                    <Grid container item sm={10}>
                        <Typography style={{'margin': '0 auto'}} variant='h3'>
                            My Recipes
                        </Typography>
                        <Grid style={{'textAlign': '-webkit-center'}} item container xs={12}>
                            {this.state.myRecipes ? this.state.myRecipes.map(recipe => {
                                return <Grid item xs={4}>
                                    <MyRecipeCard recipes={this.state.myRecipes} recipe={recipe}/>
                                </Grid>
                            }) : null}
                        </Grid>
                    </Grid>
                    <Grid item sm={1}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps, null)(Recipes)