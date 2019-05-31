import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from "@material-ui/icons/Code"
import BlogIcon from "@material-ui/icons/LibraryBooks"
import AboutIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import { primary } from "./Layout"
import Link from "./Link"
const styles = {
  root: {
    flexGrow: 1,
  },
   appBar: {
    color: "#000",
  },
  leftIcon: {
    marginRight: "10px",
    color: "#6c4600"

  },
  button: {
    color: "#6c4600",
    marginRight: "10px"
  },
  grow: {
    flexGrow: 1,
    fontWeight: 400,
    fontSize: "1.2em",
    boxShadow: "none",
    fontFamily: "Montserrat",
    color: "#000 !important",
  },
  lastButton: {
    marginRight: "0px !important"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar style={{ backgroundColor: primary}}>
          <span to="/" className={classes.menuButton} className={classes.grow}>
            <Link to="/">Lama Corp</Link>
          </span>
           <Button  color="inherit" className={classes.button}>
              <HomeIcon className={classes.leftIcon} />
              <Link to="/">Home</Link>
          </Button>
           <Button  color="inherit" className={classes.button}>
              <CodeIcon className={classes.leftIcon} />
              <Link to="/projects">              Projects
</Link>

          </Button>
           <Button  color="inherit" className={classes.button}>
              <AboutIcon className={classes.leftIcon} />
<Link to="/about">About</Link>
          </Button>
           <Button  color="inherit" className={classes.lastButton}>
              <BlogIcon className={classes.leftIcon} />
              <Link to="/blog">Blog</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);