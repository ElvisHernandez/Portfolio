import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HttpIcon from '@material-ui/icons/Http';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import FaceIcon from '@material-ui/icons/Face';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import styles from './Nav.module.css'

const drawerWidth = "160px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: '50px',
      marginLeft: drawerWidth,
      background:'#1e1d1d'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background:'#1e1d1d',
    // color:'whitesmoke'

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const GlobalCSS = withStyles({
    "@global" : {
        ".MuiSvgIcon-root": {
            color: "#228B22"
        },
        ".MuiListItemText-primary": {
            color: 'whitesmoke',
            "&:hover": {
                color:'#00FFFF'
            }
        },
        ".MuiToolbar-gutters": {
          background: '#1e1d1d',
        }, 
        "#httpIcon": {
          transform: 'scale(4)',
          marginTop: '1rem'
        },
        "#drawerList": {
          marginTop:'10rem',
        },
        "#externalLinks": {
          marginTop: '3rem'
        }
    }
})(() => null)

const iconHash = {
  0: [<HomeIcon />,'#particles-js'],
  1: [<CodeIcon />, '#'],
  2: [<PermMediaIcon />, '#'],
  3: [<FaceIcon />, '#'],
  4: [<LinkedInIcon />, "https://www.linkedin.com/in/elvis-hernandez-9669a618a/"],
  5: [<GitHubIcon />, 'https://github.com/ElvisHernandez']
}

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.drawer}>
      <HttpIcon id="httpIcon"/>
      <div className={classes.toolbar} />
      <Divider />
      <List id="drawerList">
        {['Home', 'Skills', 'Projects', 'About'].map((text, index) => (
          <a className={styles.links} href={iconHash[index][1]} target='_blank'>
            <ListItem button key={text}>
              <ListItemIcon className={styles.icons}>{iconHash[index][0]}</ListItemIcon>
              <ListItemText className={styles.text} primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List id="externalLinks">
        {['LinkedIn', 'Github'].map((text, index) => (
          <a className={styles.links} href={iconHash[index+4][1]} target='_blank'>
            <ListItem button key={text}>
              <ListItemIcon>{iconHash[index+4][0]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <GlobalCSS />
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Elvis' Portfolio Site
          </Typography> */}
        </Toolbar>
      </AppBar>



      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer 
            container={container}
            variant="temporary"
            // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
    </div>
  );
}

export default ResponsiveDrawer;