import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
  aboutUsWrapper: {
    display: "flex",
    flexDirection: "column",
    background: "#00704a",
    padding: "5% 14% 5% 14%",
    "@media(max-width: 600px)": {
      padding: "40% 8% 5% 8%",
  }
  },
  aboutUsHeader: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    textTransform: "uppercase",
    "@media(max-width: 600px)": {
      fontSize: "2rem",
      textAlign: "center",
      marginBottom: "30px"
  }
  },
  aboutHeaderWrapper: {
    display: "flex", 
    flexDirection: "column",
  },
  aboutUsParagraph: {
    textAlign: "left",
    lineHeight: 2,
    color: "white",
    margin: "10px 0"
  }

}));
const AboutUs = () => {

  const classes = withStyles();
  return (
    <div id="aboutUs" className={classes.aboutUsWrapper}>
      <div className={classes.aboutHeaderWrapper}>
        <Typography className={classes.aboutUsHeader}>A Family-Owned Business</Typography>
        <Typography className={classes.aboutUsHeader}>Serving Rochester</Typography>
      </div>
      <div>
        <div>
          <Typography className={classes.aboutUsParagraph}>At Clover Lawn & Landscape, we strive to create gardens that dazzle the eye and nurture the soul. We accomplish our mission by being attentive to our
            client's needs and desires. Utilizing our horticultural knowledge,  creative design capabilities, and our attention to details.</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography className={classes.aboutUsParagraph}>
            In 1978 the Lechner family of Rochester, NY decided they wanted to enroll their sons in Brighton's Mcquaid Jesuit School. As a way to offset the tuition,
            Tom, Pat, Doug and Geoff started mowing neighborhood lawns for extra income. As time went on the number of lawn mowing accounts began to blossom. Opportunities
            within the landscape area increased with the request to do various other projects for their clients. An entrepreneurial spirit began to develop among the brothers.
            With each job the need to learn more about landscaping industry grew.
          </Typography>
          <Typography className={classes.aboutUsParagraph}>After 30+ years in business, we pride ourselves on the fact that a high percentage of our work is repeat requests from past clients and referrals.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default AboutUs