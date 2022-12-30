import {Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
    sectionThreeWrapper: {
        display: "flex",
        background: "#00704a",
        height: "500px"
    }

}));
const SectionThree = () => {

  const classes = withStyles();
  return (
    <div className={classes.sectionThreeWrapper}>Gallery</div>
  )
}

export default SectionThree