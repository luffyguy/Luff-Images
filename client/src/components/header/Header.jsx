import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
} from "@material-ui/core";
import { Collections, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: "35px",
  },
  logoText: {
    paddingLeft: "15px",
    fontSize: "25px",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: "0 8px",
  },
  serchText: {
    color: "#fff",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ onTextChange }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.container}>
        <Box className={classes.logo}>
          <Collections className={classes.logoIcon} />
          <Typography className={classes.logoText} variant="h6">
            Luffy - Image
          </Typography>
        </Box>
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <Search />
          </Box>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(e) => onTextChange(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
