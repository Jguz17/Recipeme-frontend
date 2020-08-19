import React, { Component } from 'react'
import HomeNav from './HomeNav'
import { Grid } from '@material-ui/core'
import HomeHeader from './HomeHeader'
import SearchResults from './SearchResults'

export class Home extends Component {

    state = {
        recipe: [],
        recipeApiData: []
    }

    async handleSubmit(e) {
        e.preventDefault()
        let query = this.state.recipe
        let APP_ID = '8f62b8a0'
        let APP_KEY = 'cadd6f02ac63a9df7d0758ebcf5588f0	'
        let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`)
        let data = await response.json()
        // console.log(data)
        this.setState({
            recipeApiData: data.hits
        })
    }

    render() {
        return (
            <Grid container direction='column'>
                <Grid container item>
                    <HomeNav/>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <HomeHeader handleSubmit={(e) => this.handleSubmit(e)} recipe={this.state.recipe}/>
                    </Grid>
                    <Grid item container xs={12}>
                        <SearchResults recipes={this.state.recipeApiData}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home
