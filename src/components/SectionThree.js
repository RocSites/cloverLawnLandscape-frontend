import { Typography, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import FireplaceOne from '../assets/patio_fire_three.jpeg'
import RockWallOne from '../assets/wall_multch_three.jpeg'
import WalkwayOne from '../assets/walkway_three_white_house.jpeg'
import PaversOne from '../assets/walkway_one_house.jpeg'
import PaversTwo from '../assets/walkway_two.jpeg'
import RockWallTwo from '../assets/wall_three.jpeg'
import axios from "axios"

const withStyles = makeStyles(() => ({
  sectionThreeWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // background: "#00704a",
    padding: "5% 14% 5% 14%",
    margin: "auto",
    "@media(max-width: 600px)": {
      padding: "40% 14% 5% 14%",
    }
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
    color: "white",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "1em",
    width: "100%",
  },
  galleryImage: {
    width: "100%",
    height: "300px"
  }

}));
const SectionThree = () => {

  const classes = withStyles();

  const [response, setResponse] = useState([]);
  const [galleryUrls, setGalleryUrls] = useState([]);

  const baseURL = "https://clover-strapi-qxtpiid5ka-ue.a.run.app/api/gallary-cards?populate=*"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setResponse(response.data);
      if (response.data.data.length > 0) {
        formatImages(response.data)
      }
    });
  }, [])

  const formatImages = (resp) => {
    console.log(resp)
    console.log("format images function fired")
    let dataArr = resp.data.map(x => x.attributes.image.data);
    setGalleryUrls(dataArr.map(obj => obj.attributes.formats.small.url))
  }

  return (
    <div id="gallery" className={classes.sectionThreeWrapper}>
      <div className={classes.sectionThreeHeaderTextWrapper}>
        <Typography className={classes.sectionThreeHeader}>Recent Projects</Typography>
      </div>
      <div className={classes.galleryImageWrapper}>
        {galleryUrls.length > 0 ? galleryUrls.map(url => (
          <img className={classes.galleryImage} src={url} />
        ))  : null}

      </div>
    </div>
  )
}

export default SectionThree