import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 32,
  },
  bio: {
    width: "80%",
    justifyContent: "center",
  },
  button: {
    marginTop: 2,
    border: "1",
    borderColor: "black",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="white" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} fontWeight={500}>
            sc
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={0} className={classes.bio}>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h6>
        <Paper elevation={0}>
          <Button className={classes.button}>Resume</Button>
          <Button>Contact me</Button>
        </Paper>
      </Paper>
    </React.Fragment>
  );
}

export default App;
