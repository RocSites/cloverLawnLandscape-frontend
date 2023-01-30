import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
// import GrassBackground from '../assets/chang-qing-grass.jpg'
import GrassBackground from '../assets/petar-tonchev-c-5-QE5kBYk-unsplash.jpg'
const withStyles = makeStyles((theme) => ({
    sectionOneWrapper: {
        display: "flex",
        alignItems: "center",
        // background: "#ffffff",
        height: "100vh",
        marginTop: "40px",
        backgroundImage: `url(${GrassBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "90%",
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
        color: "white",
        textTransform: "uppercase",
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionOneHeaderLower: {
        fontSize: "2rem",
        textAlign: "left",
        marginBottom: "20px",
        color: "#00704a",
        fontWeight: "500",
        fontStyle: "italic"
    },
    sectionOneSubheader: {
        fontSize: "1.25rem",
        textAlign: "left",
        color: "green"
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
                <Typography className={classes.sectionOneHeader}>Award-Winning Landscaping
                </Typography>
                {/* <Typography  className={classes.sectionOneHeaderLower}>right around the corner</Typography> */}
                {/* <Typography className={classes.sectionOneSubheader}>Outdoor Spaces - designed and executed just for you by our talented team of landscape architects and construction professionals.</Typography> */}
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