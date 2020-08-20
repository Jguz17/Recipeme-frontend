import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundColor: '#ff8c22',
      color: 'white',
      marginBottom: '3rem'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    buttonStyles: {
      width: '70%',
      margin: '0 auto'
    }
  }),
);

function RecipeCard(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeFromList = (id) => {
    fetch(`http://localhost:3000/api/v1/lists/${id}`, { method: 'DELETE'})
    .then((res) => res.json())
    .then((data) => console.log(data))

    fetch(`http://localhost:3000/api/v1/recipes/${id}`, { method: 'DELETE'})
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // props.recipes.filter(recipe => recipe.id !== data.id)
      // console.log(data)
    })
  }

  // console.log(props)

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.recipe.name}
      />
      <CardMedia
        className={classes.media}
        image={props.recipe.image}
        title={props.recipe.name}
      />
      <CardActions disableSpacing>
        <button onClick={() => removeFromList(props.recipe.id)} className={classes.buttonStyles}>
          Delete
        </button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography variant='h4'>
              Ingredients:
            </Typography>
            {props.recipe.ingredients.map(ingredient => {
              return(
                  <p>{ingredient}</p>
              )
            })}
            <Typography>
              <a href={props.recipe.source}><b>Link To Article</b></a>
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, null)(RecipeCard)