import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import faker from 'faker';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& img': {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },

    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
  // const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.root} align="center" my={4}>
      <Paper className={classes.testimonial}>
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
      </Paper>
    </Box>
  );
}
