import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import faker from 'faker';

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="280"
          image={faker.image.image()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus minus ab veritatis voluptatibus facilis dolorum. Harum
            rem sit doloribus esse dolores quas, facilis in, voluptates incidunt
            amet tempore necessitatibus!
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
