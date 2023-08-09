import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const withStyles = makeStyles(() => ({
    footerWrapper: {
        backgroundColor: "#00704a",
        height: "75px",
        padding:"10px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "left"
    },
    cloverCopyright: {
        color: "white",
        textAlign: "left",
        marginLeft: "15px"
    },
    footerPhone: {
        textAlign: "left",
        padding: "10px 0",
        marginLeft: "15px",
        color: "white"
    }

}))

const Footer = () => {

    const classes = withStyles();
    return (
        <div className={classes.footerWrapper}>
            <Typography className={classes.cloverCopyright}> &copy; {new Date().getFullYear()} Clover Lawn & Landscape. All Rights Reserved.</Typography>
            <Typography className={classes.cloverCopyright}>485 N Landing Rd North, Rochester, NY 14625</Typography>
            <a className={classes.footerPhone} href="tel:(585) 244-1626">(585) 244-1626</a>
        </div>
    )
}

export default Footer;
