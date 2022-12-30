import {Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
    sectionFourWrapper: {
        display: "flex",
        height: "500px"
    }

}));
const SectionFour = () => {

  const classes = withStyles();
  return (
    <div className={classes.sectionFourWrapper}>About Us</div>
  )
}

export default SectionFour