import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
// import OrganizeOne from '../assets/organizationPeace.svg'

const withStyles = makeStyles((theme) => ({
    sectionOneWrapper: {
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        height: "650px",
        marginTop: "40px",
        padding: "0px 14% 0 14%",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            paddingTop: "100px"
        }
    },
    sectionOneHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        marginBottom: "20px",
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionOneSubheader: {
        fontSize: "1rem",
        textAlign: "left"
    },
    sectionOneJoinButton: {
        // background: theme.palette.primary.main,
        background: "#00704a",
        color: "white",
        borderRadius: "20px",
        width: "200px",
        height: "50px",
        margin: "20px 0 20px 0",
        fontSize: "1.125rem",
        "& > span": {
            textTransform: "none",
        },
        "&:hover": {
            backgroundColor: "#6db0a7",
        },
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    bannerImage: {
        width: "53vw",
        "@media(max-width: 600px)": {
            minWidth: "80vw"
        }
    },
    bannerContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "32vw"
    },
    bannerImageWrapper: {
        display: "flex",
    }

}));



const SectionOne = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionOneWrapper}>
            <div className={classes.bannerContentWrapper}>
                <Typography className={classes.sectionOneHeader}>Award-winning Landscaping 
                </Typography>
                <Typography className={classes.sectionOneSubheader}>Outdoor spaces, designed and executed just for you by our talented team of landscape architects and construction professionals.</Typography>
                {/* TODO - add phone icon if single contact number, if multiple numbers (need client clarification) then scroll to "Contact Us" section */}
                <Button target="_blank" href="" className={classes.sectionOneJoinButton}>Contact Us</Button>
            </div>
            <div className={classes.bannerImageWrapper}>
                {/* <img className={classes.bannerImage} src={OrganizeOne} /> */}
            </div>
        </div>
    )
}

export default SectionOne