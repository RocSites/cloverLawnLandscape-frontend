import { Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const withStyles = makeStyles(() => ({
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
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
        color: "black",
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
        color: "black"
    },
    servicesListUl: {
        color: "black",
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
        backgroundColor: "#00704a",
        color: "white",
        borderRadius: "35px",
        height: "35px",
        margin: "auto",
        padding: "20px",
        marginRight: "10px",
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
        <div id="contactUs" className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Contact Us</Typography>
            </div>
            <Typography className={classes.servicesParagraph}>
                If you have any questions or would like to discuss a potential project, please feel free to give us a call or send us an email. Our experienced team is ready to assist you with all your landscaping needs and help transform your outdoor space into a stunning masterpiece. We look forward to hearing from you and providing exceptional service.
            </Typography>
            <br />
            <br />
            <div>
                <Button href="tel:(585) 244-1626" className={classes.contactUsButton}><PhoneIcon />&nbsp; Call Us</Button>
                <Button href="mailto:doug@clovernursery.com?subject=Website Inquiry" className={classes.contactUsButton}><EmailIcon />&nbsp; Email Us</Button>
            </div>
            <br />
            <br />
            <div className={classes.servicesDescriptionWrapper}>
                <Typography className={classes.servicesParagraph}>
                    We value your time and will try to provide you a timely response to your inquiry. Sometimes however, things get a little hectic around here, and try as we do, we might need to indulge your patience just a little. Thanks for your understanding! We look forward to serving you.
                </Typography>
            </div>
        </div>
    )
}

export default Nursery