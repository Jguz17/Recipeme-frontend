import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
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



const useStyles = ({
    labelOneStyles: {
        backgroundColor: '#FF8C22',
        textAlign: 'center',
        width: '45rem',
        margin: '0 auto',
        fontSize: '4rem',
        marginTop: '-2.5rem',
        color: 'white'
    },
    mainContainerStyles: {
        justifyContent: 'space-evenly',
        marginTop: '4rem'
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
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
                        <Grid item xs={false} sm={12}>
                            <h1 className={classes.labelOneStyles}>FOOD FOR THOUGHT</h1>
                        </Grid>
                        <Grid className={classes.mainContainerStyles} item container xs={12}>
                            <Grid item>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}

export default withStyles(useStyles)(Main)
