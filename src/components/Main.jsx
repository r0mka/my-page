import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PageviewIcon from '@material-ui/icons/Pageview';
import DescriptionIcon from '@material-ui/icons/Description';
import StarIcon from '@material-ui/icons/Star';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ComputerIcon from '@material-ui/icons/Computer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import avatar from '../images/avatar.jpg';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';
import ProjectCard3 from './ProjectCard3';
import Testimonial from './Testimonial';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    color: theme.palette.grey[400],
    '& h2': {
      color: theme.palette.common.white,
    },
    // padding: theme.spacing(3),
    // backgroundColor: theme.palette.common.white,
  },
  container: {
    padding: 64,
  },
  hero: {
    padding: 64,
    // backgroundColor: theme.palette.grey[200],
  },
  subtitle: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 32,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    paddingLeft: '16px',
    margin: '1rem 0',
  },

  button: {
    margin: theme.spacing(1),
  },

  article: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '64px 0',
    padding: 0,
    '& > *': {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container className={`${classes.hero}`}>
        <Typography variant="h2">Roman Nikolaenkov</Typography>
        <Typography paragraph className={classes.subtitle}>
          Software Engineer
        </Typography>
        <Typography paragraph>
          I'm a software engineer specialised in frontend and backend
          development for complex scalable web apps. I write about software
          development on my blog. Want to know how I may help your project?
          Check out my project portfolio and online resume.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ComputerIcon />}
        >
          View Portfolio
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<DescriptionIcon />}
        >
          View Resume
        </Button>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3">
          What I do
        </Typography>
        <Typography paragraph gutterBottom>
          I have more than 10 years' experience building software for clients
          all over the world. Below is a quick overview of my main technical
          skill sets and technologies I use. Want to find out more about my
          experience? Check out my online resume and project portfolio.
        </Typography>
        <Container className={`${classes.article}`}>
          <Paper elevation={3} />
          <Paper elevation={3} />
          <Paper elevation={3} />
          <Paper elevation={3} />
        </Container>
        <Box align="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ImportantDevicesIcon />}
          >
            Hire Me
          </Button>
        </Box>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3">
          Testimonials
        </Typography>

        <div className="testimonials">
          <div className="inner">
            <div className="row">
              <div className="col">
                <Testimonial />
              </div>
              <div className="col">
                <Testimonial />
              </div>
              <div className="col">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3">
          Featured Projects
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {/* <ProjectCard2 />
          <ProjectCard2 />
          <ProjectCard2 /> */}
          <ProjectCard2 />
          <ProjectCard2 />
        </Box>
      </Container>
    </main>
  );
}
