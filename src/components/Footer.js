import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const withStyles = makeStyles(() => ({
    footerWrapper: {
        backgroundColor: "#004b32",
        height: "75px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    educeCopyright: {
        color: "white",
        textAlign: "left",
        marginLeft: "15px"
    }

}))

const Footer = () => {

    const classes = withStyles();
    return (
        <div className={classes.footerWrapper}>
            <Typography className={classes.educeCopyright}> &copy; {new Date().getFullYear()} Clover Lawn & Landscape. All Rights Reserved.</Typography>
        </div>
    )
}

export default Footer;
