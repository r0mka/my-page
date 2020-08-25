import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ComputerIcon from '@material-ui/icons/Computer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectCard2 from './ProjectCard2';
import Testimonial from './Testimonial';
import js from '../images/logos/vanilajs.svg';
import html from '../images/logos/html.svg';
import css from '../images/logos/css.svg';
import reactLogo from '../images/logos/react-logo.svg';
import node from '../images/logos/nodejs.svg';
import materialUi from '../images/logos/material-ui.svg';
import bootstrap from '../images/logos/bootstrap.svg';
import typescript from '../images/logos/typescript.svg';
import aws from '../images/logos/aws.svg';
import BackgroundHeader from '../images/background/1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
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
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  hero: {
    padding: 64,
    // backgroundColor: theme.palette.grey[200],
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0)), url(' +
      BackgroundHeader +
      ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#ff0000',
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  nameHeading: {
    fontSize: '32px',
  },

  intro: {
    // width: '500px',
    [theme.breakpoints.up('sm')]: {
      width: '550px',
      fontSize: '18px',
    },
  },
  subtitle: {
    fontSize: 24,
    color: theme.palette.primary.main,
  },

  sectionTitle: {
    fontSize: 32,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    paddingLeft: '16px',
    margin: '2rem 0',
  },

  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  article: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '64px 0',
    padding: 0,
    '& > *': {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  skillCard: {
    margin: '16px 0',
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container className={`${classes.hero}`}>
        <Typography variant="h2" gutterBottom className={classes.nameHeading}>
          Roman Nikolaenkov
        </Typography>
        <Typography className={classes.subtitle} gutterBottom>
          Software Engineer
        </Typography>
        <Typography paragraph gutterBottom className={classes.intro}>
          I'm a software engineer specialised in frontend and backend
          development for complex scalable web apps. Want to know how I may help
          your project? Check out my project portfolio and online resume.
        </Typography>
        <Box my={5}>
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
        </Box>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          What I do
        </Typography>
        <Typography paragraph>
          Below is a quick overview of my main technical skill sets and
          technologies I use. Want to find out more about my experience? Check
          out my online resume and project portfolio.
        </Typography>

        <Box className={classes.article}>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" heigh="100px" src={js} alt="javascript" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  JAVASCRIPT
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" height="100px" src={html} alt="html" />
                <img width="100px" height="100px" src={css} alt="css" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  HTML CSS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              //   justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="155px" height="155px" src={reactLogo} alt="react" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  REACT.JS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" height="100px" src={node} alt="node" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  NODE.JS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={materialUi}
                  alt="material-ui"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  MATERIAL-UI
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={bootstrap}
                  alt="bootstrap"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  BOOTSTRAP
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={typescript}
                  alt="typescript"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  TYPESCRIPT
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={aws}
                  alt="amazon web services"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  AWS
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
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
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          Testimonials
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Testimonial />

          <Testimonial />

          <Testimonial />
        </Box>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          Featured Projects
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <ProjectCard2 />
          <ProjectCard2 />
        </Box>
      </Container>
    </main>
  );
}
