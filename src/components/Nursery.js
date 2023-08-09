import { Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';


const withStyles = makeStyles(() => ({
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#000000",
        padding: "15% 14% 5% 14%",
        margin: "auto",
        "@media(max-width: 600px)": {
            padding: "40% 14% 5% 14%",
        }
    },
    servicesHeaderTextWrapper: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        marginBottom: "5%"
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
    },
    contactUsButton: {
        backgroundColor: "#1783c0",
        color: "white",
        borderRadius: "35px",
        height: "35px",
        margin: "auto",
        marginBottom: "50px",
        padding: "20px",
        "&:hover": {
            backgroundColor: "#6db0a7",
        },
        "& span": {
            textTransform: "none",
            fontSize: "1rem;"
        }
    },

}));
const Nursery = () => {

    const classes = withStyles();
    return (
        <div id="nursery" className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Nursery & Garden Center</Typography>
            </div>
            <Button href="tel:(585) 482-5372" className={classes.contactUsButton}><PhoneIcon />&nbsp; Nursery & Garden Center </Button>

            <div className={classes.servicesDescriptionWrapper}>
                <Typography className={classes.servicesParagraph}>
                    Tucked away like a hidden jewel in the town of Brighton, the Clover Nursery & Garden Center contains four acres of hand selected growth, allowing us to have complete control over the quality and availability of every plant, shrub and tree that goes into your landscape project
                </Typography>
            </div>
            <br/>
            <div className={classes.servicesDescriptionWrapper}>
                <Typography className={classes.servicesParagraph}>
                    We realized long ago that the only way to truly provide the very best landscaping services possible was to own and operate our own nursery. Founded in 1928, it's the oldest nursery in Monroe County, and we've opened our doors to the public 7 days a week. We invite you call us at <a href="tel:(585) 482-5372">(585) 482-5372</a> , or just stop in to experience all that this unique nursery has to offer, including:</Typography>
            </div>

            <div className={classes.servicesListWrapper}>
                <ul className={classes.servicesListUl}>
                    <li>Thousands of varieties of perennials, annuals and spring bulbs</li>
                    <li>A great selection of small and large trees and shrubs</li>
                    <li>A huge assortment of seeds</li>
                    <li>A variety of natural and man-made materials for buiding your own patio, walls or walkways</li>
                    <li>A wide assortment of horticultural products to help your lawn or garden grow</li>
                    <li>A dedicated and knowledgeable staff to assist you with all of your horticultural needs</li>
                    <li>Bulk mulch delivery available</li>
                </ul>
            </div>
        </div>
    )
}

export default Nursery