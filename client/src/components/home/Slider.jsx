import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  withStyles,
  makeStyles,
} from "@material-ui/core";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles({
  slider: {
    margin: "5vh 0",
    marginLeft: "25vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50vw",
  },
});

const CountSlider = ({ onCountChange }) => {
  const classes = useStyles();
  const [count, setCount] = useState(20);
  const updateCount = (e, value) => {
    setCount(value);
    onCountChange(count);
  };
  return (
    <Box>
      <Box className={classes.slider}>
        <Typography gutterBottom style={{ fontSize: "12px", fontWeight: 600 }}>
          Image Count
        </Typography>
        <PrettoSlider
          min={3}
          max={200}
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
          value={count}
          onChange={updateCount}
        />
      </Box>
    </Box>
  );
};

export default CountSlider;
