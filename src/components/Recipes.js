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
        fetch('https://recipeme-api.herokuapp.com/api/v1/recipes')
        .then((res) => res.json())
        .then((data) => {
            data.map(item => {
                return item.user.id === this.props.user.id ? this.setState({
                    myRecipes: [...this.state.myRecipes, item]
                }) : null
            })
        })
    }

    removeFromList = (id) => {
        fetch(`https://recipeme-api.herokuapp.com/api/v1/recipes/${id}`, { method: 'DELETE'})
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.setState({
              myRecipes: this.state.myRecipes.filter(recipe => recipe.id !== id)
            })
        console.log(id)
      }
    )}

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
                                return <Grid item xs={12} sm={6} lg={4}>
                                    <MyRecipeCard removeFromList={this.removeFromList} recipes={this.state.myRecipes} recipe={recipe}/>
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