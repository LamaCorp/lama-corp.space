import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Link from "./Link"
import CodeIcon from "@material-ui/icons/Code"
import AboutIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { primary } from "./Layout"

const drawerWidth = 240
const styles = theme => ({
  list: {
    width: drawerWidth,
    backgroundColor: primary,
    height: "calc(100vh - 64px)",
  },
  fullList: {
    width: "auto",
  },
  root: {
    overflow: "hidden",
  },
  brandOnDesktop: {
    marginLeft: "32px !important",
  },
  brand: {
    fontWeight: 400,
    fontSize: "1.2em",
    boxShadow: "none",
    fontFamily: "Montserrat",
    color: "#000 !important",
  },
  appBar: {
    backgroundColor: primary,
    color: "#000",
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
  drawerHeader: {
    backgroundColor: primary,
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
})

class Layout extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props
    const { left } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={!left}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon/>
            </IconButton>
            <Link
              to="/"
              className={`${classes.brand} ${classes.menuButton}`}
            >
              Lama Corp
            </Link>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.toggleDrawer("left", false)}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <List className={classes.list}>
              <Link to="/">
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItem>
              </Link>
              <Link to="/projects">
                <ListItem button>
                  <ListItemIcon>
                    <CodeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Projects"/>
                </ListItem>
              </Link>
              <Link to="/about">
                <ListItem button>
                  <ListItemIcon>
                    <AboutIcon/>
                  </ListItemIcon>
                  <ListItemText primary="About"/>
                </ListItem>
              </Link>
              <Link to="/contact">
                <ListItem button>
                  <ListItemIcon>
                    <MailIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Contact"/>
                </ListItem>
              </Link>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Layout)
