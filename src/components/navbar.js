import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "gatsby-link"
import CodeIcon from "@material-ui/icons/Code"
import MailIcon from "@material-ui/icons/Email"
import BlogIcon from "@material-ui/icons/LibraryBooks"
import AboutIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
const drawerWidth = 240
export const primary = "#ffa500"
const styles = theme => ({
  appBar: {
    backgroundColor: primary,
    color: "#000",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: primary,
    color: "#000",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  brand: {
    fontWeight: 800,
    fontSize: "1.2em",
  },
})

class PersistentDrawerLeft extends React.Component {
  state = {
    openNavbar: false,
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }
  handleDrawerOpen = () => {
    this.setState({ openNavbar: true })
  }

  handleDrawerClose = () => {
    this.setState({ openNavbar: false })
  }

  render() {
    const { classes } = this.props
    const { openNavbar } = this.state

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: openNavbar,
          })}
        >
          <Toolbar disableGutters={!openNavbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                openNavbar && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" className={classes.brand}>
              Lama Corp
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openNavbar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/projects">
              <ListItem button>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button>
                <ListItemIcon>
                  <AboutIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link to="/blog">
              <ListItem button>
                <ListItemIcon>
                  <BlogIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
            </Link>
            <Link to="/contact">
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        {this.props.noContainer === undefined ? (
          <div className={classes.drawerHeader} />
        ) : null}
      </div>
    )
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
