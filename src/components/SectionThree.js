import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import FireplaceOne from '../assets/patio_fire_three.jpeg'
import RockWallOne from '../assets/wall_multch_three.jpeg'
import WalkwayOne from '../assets/walkway_three_white_house.jpeg'
import PaversOne from '../assets/walkway_one_house.jpeg'
import PaversTwo from '../assets/walkway_two.jpeg'
import RockWallTwo from '../assets/wall_three.jpeg'

const withStyles = makeStyles(() => ({
  sectionThreeWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // background: "#00704a",
    padding: "5% 14% 5% 14%",
    margin: "auto"
  },
  sectionThreeHeaderTextWrapper: {
    display: "flex",
    margin: "0px 0 50px 0",
    justifyContent: "center",
    color: "black"
  },
  sectionThreeHeader: {
    fontWeight: "bold",
    fontSize: "3rem",
    textTransform: "uppercase",
    "& > span": {
      color: "#00704a"
    },
    "@media(max-width: 600px)": {
      fontSize: "2rem"
    }
  },
  galleryImageWrapper: {
      display: "grid",
      justifyContent: "center",
      gridTemplateRows: "300px",
      gridTemplateColumns: "300px 300px 300px",
      gridGap: "50px",
      zIndex: "1",
  },
  galleryImage: {
    height: "300px",
    width: "300px"
  }

}));
const SectionThree = () => {

  const classes = withStyles();
  return (
    <div id="gallery" className={classes.sectionThreeWrapper}>
      <div className={classes.sectionThreeHeaderTextWrapper}>
        <Typography className={classes.sectionThreeHeader}>Recent Projects</Typography>
      </div>
      <div className={classes.galleryImageWrapper}>
        <img className={classes.galleryImage} src={FireplaceOne}/>
        <img className={classes.galleryImage} src={RockWallOne}/>
        <img className={classes.galleryImage} src={WalkwayOne}/>
        <img className={classes.galleryImage} src={PaversOne}/>
        <img className={classes.galleryImage} src={PaversTwo}/>
        <img className={classes.galleryImage} src={RockWallTwo}/>
      
      </div>
    </div>
  )
}

export default SectionThree