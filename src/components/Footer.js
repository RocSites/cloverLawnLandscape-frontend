import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const withStyles = makeStyles(() => ({
    footerWrapper: {
        backgroundColor: "#00704a",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    footerWrapperNursery: {
        backgroundColor: "#1783c0",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    cloverCopyright: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: "15px"
    },
    footerPhone: {
        textAlign: "center",
        padding: "10px 0",
        margin: "15px",
        color: "white",
        textDecoration: "none",
        backgroundColor: "black",
        borderRadius: "35px",
        padding: "10px 15px"
    },
    rocsitesText: {
        fontSize: "0.9rem",
        color: "white",
        fontFamily: "Nunito",
        "@media(max-width: 600px)": {
            fontSize: "0.75rem"
        }
    },
    rocsitesLink: {
        color: "white"
    }

}))

const Footer = (props) => {

    const classes = withStyles();
    return (
        <>
            {props.business === "landscape" ? (
                <div className={classes.footerWrapper}>
                        <Typography className={classes.cloverCopyright}> &copy; {new Date().getFullYear()} Clover Lawn & Landscape. All Rights Reserved.</Typography>
                        <Typography className={classes.cloverCopyright}>485 N Landing Rd North, Rochester, NY 14625</Typography>
                        <a className={classes.footerPhone} href="tel:(585) 244-1626">(585) 244-1626</a>
                        <p className={classes.rocsitesText}>Website created and maintained by <span><a className={classes.rocsitesLink} href="https://www.rocsites.com/" target="_blank">RocSites</a></span></p>
                </div>

            ) : null}
            {props.business === "nursery" ? (
                <div className={classes.footerWrapperNursery}>

                        <Typography className={classes.cloverCopyright}> &copy; {new Date().getFullYear()} Clover Nursery. All Rights Reserved.</Typography>
                        <Typography className={classes.cloverCopyright}>485 N Landing Rd North, Rochester, NY 14625</Typography>
                        <a className={classes.footerPhone} href="tel:(585) 482-5372">(585) 482-5372</a>
                        <p className={classes.rocsitesText}>Website created and maintained by <span><a className={classes.rocsitesLink} href="https://www.rocsites.com/" target="_blank">RocSites</a></span></p>
                </div>

            ) : null}
        </>

    )
}

export default Footer;
