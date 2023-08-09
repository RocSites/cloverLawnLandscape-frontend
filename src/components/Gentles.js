import { Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

const withStyles = makeStyles(() => ({
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#00704a",
        padding: "15% 14% 5% 14%",
        margin: "auto",
        "@media(max-width: 600px)": {
            padding: "40% 14% 5% 14%",
        }
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
    servicesParagraph: {
        fontSize: "1.5rem",
        color: "white",
        textAlign: "center"
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
    contactUsButtonLink: {
        backgroundColor: "#000000",
        color: "white",
        borderRadius: "35px",
        height: "35px",
        margin: "auto",
        marginBottom: "50px",
        marginTop: "50px",
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
const Gentles = () => {

    const classes = withStyles();
    return (
        <div id="gentles" className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Gentles Farm Market</Typography>
            </div>
            <div className={classes.servicesDescriptionWrapper}>
                <Typography className={classes.servicesParagraph}>Selling local fresh fruits and vegetables for over 100 years.
                </Typography>
                <Button href="https://www.gentlesfarm.com/contact/" target="_blank" className={classes.contactUsButtonLink}>&nbsp; Come See Us! </Button>
            </div>
            <Button href="tel:(585) 385-9843" className={classes.contactUsButton}><PhoneIcon />&nbsp; (585) 385-9843 </Button>


        </div>
    )
}

export default Gentles