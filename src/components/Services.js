import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#00704a",
        padding: "5% 14% 5% 14%",
        margin: "auto"
    },
    servicesHeaderTextWrapper: {
        display: "flex",
        justifyContent: "center",
        color: "black"
    },
    servicesHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        color: "white",
        textTransform: "uppercase",
        "& > span": {
            color: "#00704a"
        },
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    servicesDescriptionWrapper: {
        textAlign: "left"
    },
    servicesParagraph: {
        lineHeight: 2,
        color: "white"
    },
    servicesListUl: {
        color: "white",
        textAlign: "left",
        fontFamily: "Nunito",
        "& li": {
            margin: "15px 0"
        }
    },
    servicesListWrapper: {
        display: "flex",
        // justifyContent: "center"
    }

}));
const Services = () => {

    const classes = withStyles();
    return (
        <div id="services" className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Our Services</Typography>
            </div>
            <div className={classes.servicesDescriptionWrapper}>
                <Typography className={classes.servicesParagraph}>Many landscape companies provide select components of landscape services. Some mow lawns, some install walks and others just sell plants.
                    What makes Clover Lawn & Landscape unique is the ability to encompass all of your landscape needs under one company's management.
                    This helps to eliminate the need of coordinating three or four various companies to maintain your property. So from landscape design to plant selection
                    to construction to maintenance services, we've got your project covered; one call does it all.
                </Typography>
            </div>
            <div className={classes.servicesListWrapper}>
                <ul className={classes.servicesListUl}>
                    <li>Custom landscape design</li>
                    <li>Complete landscape renovations</li>
                    <li>Installations of walkways and patios (flagstone and all styles of pavers)</li>
                    <li>Retaining walls of all styles</li>
                    <li>Landscape lighting</li>
                    <li>Expert landscape installation</li>
                </ul>
                <ul className={classes.servicesListUl}>
                    <li>Custom water features</li>
                    <li>Sod installation Gardening and maintenance</li>
                    <li>Complete tree service</li>
                    <li>Fully staffed retail nursery and garden center</li>
                    <li>Grading and drainage systems</li>
                </ul>
            </div>
        </div>
    )
}

export default Services