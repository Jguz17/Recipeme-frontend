import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import { withStyles } from '@material-ui/styles'
import { findAllByDisplayValue } from '@testing-library/react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme'
import Image1 from "../images/bg-4.jpg"
import Image2 from "../images/bg-5.jpg"
import Image3 from "../images/bg-6.jpg"
import { Link } from 'react-router-dom'

import '../styles/main.css'

const useStyles = ({
    questionOneStyles: {
        textAlign: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem'
    },
    mainContainerStyles: {
        justifyContent: 'space-evenly',
    },
    root: {
        maxWidth: 345,
        backgroundColor: '#FF8C22',
      },
      media: {
        height: 140,
      },
      whiteTextForCards: {
          color: 'white'
      },
      imageContainerStyles1: {
          backgroundImage: `url(${Image1})`,
          backgroundRepeat: 'no-repeat',
          minHeight: '30rem'
      },
      imageContainerStyles2: {
        backgroundImage: `url(${Image2})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '30rem'
    },
    imageContainerStyles3: {
        backgroundImage: `url(${Image3})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '30rem'
    },
      contentDescription1: {
          alignSelf: 'center',
          lineHeight: '3rem',
      }
})

class Main extends Component {
    render() {
        const { classes } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Grid container direction='column'>
                    <Grid item container>
                        <Nav/>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12}>
                            <Header/>
                        </Grid>
                        <Grid className='labelOneStyles' item xs={false} sm={12}>
                            <h1 className='labelOneHeaderStyles'>FOOD FOR THOUGHT</h1>
                        </Grid>
                        <Grid item xs={false} xs={12}>
                            <h2 className={classes.questionOneStyles}>Why You Should Cook More Often:</h2>
                        </Grid>
                        <Grid className={classes.mainContainerStyles} item container xs={12}>
                            <Grid item>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography className={classes.whiteTextForCards} gutterBottom variant="h5" component="h2" >
                                            You Save Money
                                        </Typography>
                                        <Typography className={classes.whiteTextForCards} variant="body2" color="textSecondary" component="p">
                                            The most obvious reason why you should cook more often is because you will save more money!
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography className={classes.whiteTextForCards} gutterBottom variant="h5" component="h2">
                                            Gain A New Skill
                                        </Typography>
                                        <Typography className={classes.whiteTextForCards} variant="body2" color="textSecondary" component="p">
                                            Another good reason why you should cook more often is to learn a new skill, plus, you will have fun along the way.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography className={classes.whiteTextForCards} gutterBottom variant="h5" component="h2">
                                            Ingredients
                                        </Typography>
                                        <Typography className={classes.whiteTextForCards} variant="body2" color="textSecondary" component="p">
                                            One of the most important reasons is that you can see and choose what ingredients to use for your dish.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <h2 className={classes.questionOneStyles}>Convinced? Click Here To Find Your Next Recipe</h2>
                            </Grid>
                            <Grid className='labelOneStyles' item xs={false} sm={12}>
                                <h1 className='labelOneHeaderStyles'>STILL NOT ENOUGH?</h1>
                            </Grid>
                            <Grid item xs={false} sm={12}>
                                <h2 className={classes.questionOneStyles}>Here Are Some Of The Many Tasty Foods In Our Recipe Book:</h2>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={1}/>
                                <Grid className={classes.imageContainerStyles1} item xs={10} sm={4}/>
                                <Grid item xs={0} lg={2}/>
                                <Grid className={classes.contentDescription1} style={{'textAlign': 'center'}} item xs={12} sm={4}>
                                    For breakfast, we have an amazing french toast recipe. Great for something light and easy in the morning.
                                </Grid>
                                <Grid item xs={1}/>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={1}/>
                                <Grid className={classes.contentDescription1} id='image-content-2' style={{'textAlign': 'center'}} item xs={0} sm={4}>
                                    Delicious salmon with veggies and sauce for lunch. Perfect if you want something a little fancy at home.
                                </Grid>
                                <Grid item xs={0} lg={2}/>
                                <Grid className={classes.imageContainerStyles2} item xs={10} sm={4}/>
                                <Grid className={classes.contentDescription1} id='image-content-2-after' style={{'textAlign': 'center'}} item xs={12} sm={0}>
                                    Delicious salmon with veggies and sauce for lunch. Perfect if you want something a little fancy at home.
                                </Grid>
                                <Grid item xs={1}/>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={1}/>
                                <Grid className={classes.imageContainerStyles3} item xs={10} sm={4}/>
                                <Grid item xs={0} lg={2}/>
                                <Grid className={classes.contentDescription1} style={{'textAlign': 'center'}} item xs={12} sm={4}>
                                    Dinner. Perhaps one of the most enjoyable meals: a t-bone steak. Great if you have some time to cook this bad boy and enjoy your masterpiece.
                                </Grid>
                                <Grid item xs={1}/>
                            </Grid>
                            <Link to={'/signup'}>
                                <Grid className='labelThreeStyles' item xs={false} sm={12}>
                                    <h1 className='labelThreeHeaderStyles'>VIEW RECIPES</h1>
                                </Grid>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Footer/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}

export default withStyles(useStyles)(Main)
