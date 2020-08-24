import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import avatar from '../images/avatar.jpg';
import faker from 'faker';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& img': {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },
  },
  testimonial: {
    padding: '30px',
    color: theme.palette.grey[400],
  },
  name: {
    fontSize: '20px',
    textTransform: 'uppercase',
    margin: '20px 0',
  },
  stars: {
    color: theme.palette.primary.main,
    marginBottom: '20px',
  },
}));

export default function Testimonial() {
  const theme = useTheme;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.testimonial}>
        {/* <Card> */}
        <img src={faker.image.avatar()} alt="person" />
        <div className={classes.name}>{faker.name.firstName()}</div>
        <div className={classes.stars}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          labore consectetur iure delectus porro fugiat placeat doloremque
          possimus id laborum? Harum autem pariatur obcaecati quas numquam
          provident modi quo maiores.
        </p>
        {/* </Card> */}
      </Paper>
    </div>
  );
}
