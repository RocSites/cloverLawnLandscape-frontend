import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
  sectionThreeWrapper: {
    display: "flex",
    flexDirection: "column",
    background: "#00704a",
    height: "500px",
    padding: "5% 14% 5% 14%",
    margin: "auto"
  },
  sectionThreeHeaderTextWrapper: {
    display: "flex",
    margin: "0px 0 50px 0",
    justifyContent: "center",
    color: "white"
  },
  sectionThreeHeader: {
    fontWeight: "bold",
    fontSize: "3rem",
    "& > span": {
      color: "#00704a"
    },
    "@media(max-width: 600px)": {
      fontSize: "2rem"
    }
  },
  galleryImageWrapper: {

  }

}));
const SectionThree = () => {

  const classes = withStyles();
  return (
    <div className={classes.sectionThreeWrapper}>
      <div className={classes.sectionThreeHeaderTextWrapper}>
        <Typography className={classes.sectionThreeHeader}>Some of Our Work</Typography>
      </div>
      <div className={classes.galleryImageWrapper}>
          Picture Grid Placeholder
      </div>
    </div>
  )
}

export default SectionThree