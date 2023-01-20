import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#00704a",
        height: "500px",
        padding: "5% 14% 5% 14%",
        margin: "auto"
    },
    servicesHeaderTextWrapper: {
        display: "flex",
        margin: "0px 0 50px 0",
        justifyContent: "center",
        color: "black"
    },
    servicesHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        color: "white",
        "& > span": {
            color: "#00704a"
        },
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    servicesDescriptionWrapper: {

    },
    servicesParagraph: {
        lineHeight: 2,
        color: "white"
    }

}));
const Services = () => {

    const classes = withStyles();
    return (
        <div className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Services</Typography>
            </div>
            <div className={classes.servicesDescriptionWrapper}>
                <p className={classes.servicesParagraph}>Many landscape companies provide select components of landscape services. Some mow lawns, some install walks and others just sell plants.
                    What makes Clover Lawn & Landscape unique is the ability to encompass all of your landscape needs under one company's management.
                    This helps to eliminate the need of coordinating three or four various companies to maintain your property. So from landscape design to plant selection
                    to construction to maintenance services, we've got your project covered; one call does it all. Our services include:
                </p>
            </div>
            <div> Services list - TODO
                <p>
                    Custom landscape design
                    Complete landscape renovations
                    Installations of walkways and patios (flagstone and all styles of pavers)
                    Retaining walls of all styles
                    Landscape lighting
                    Expert landscape installation
                    Custom water features
                    Sod installation Gardening and maintenance
                    Complete tree service
                    Fully staffed retail nursery and garden center
                    Grading and drainage systems
                </p>
            </div>
        </div>
    )
}

export default Services