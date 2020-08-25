import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // flex: 1,
    maxWidth: '47%',
    margin: '32px 0',
    color: theme.palette.grey[400],
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  // const theme = useTheme();
  const [hover, setHovering] = React.useState(false);

  return (
    <Card
      className={classes.root}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="280"
          // image="../images/simpsons-still.jpg"
          image={
            hover ? '../images/simpsons.gif' : '../images/simpsons-still.jpg'
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
  );
}
