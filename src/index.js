import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.css';
import './App.css';
import Main from './components/Main';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import cyan from '@material-ui/core/colors/cyan';

import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      // display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1e2a3a',
    color: theme.palette.grey[400],
    '& svg': {
      color: theme.palette.grey[400],
    },
  },
  menuListItem: {
    '& :hover': {
      // backgroundColor: theme.palette.common.white,
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
    color: '#000000',
    '& svg': {
      color: 'inherit',
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <Box display="flex" justifyContent="center" m={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ImportantDevicesIcon />}
        >
          Hire Me
        </Button>
      </Box>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Page
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Main />
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          // backgroundColor: '#ffffff',
          // backgroundColor: '#151e29',
          // backgroundColor: '#111821',
        },
      },
    },
  },
  palette: {
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    primary: {
      // main: deepPurple.A200,
      // main: cyan[500],
      main: cyan[500],
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      hover: '#111821',
    },
    background: {
      paper: '#1e2a3a',
      default: '#111821',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <ResponsiveDrawer />
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
