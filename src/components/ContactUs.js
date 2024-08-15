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
        margin: "15px auto",
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
    contactUsButtonNursery: {
        backgroundColor: "#1783c0",
        color: "white",
        borderRadius: "35px",
        height: "35px",
        margin: "15px auto",
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
    mapWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "40px"
    }

}));
const ContactUs = (props) => {

    const classes = withStyles();
    return (
        <div id="contactUs" className={classes.servicesWrapper}>
            <div className={classes.servicesHeaderTextWrapper}>
                <Typography className={classes.servicesHeader}>Contact Us</Typography>
            </div>
            {props.business === "landscape" ? (
                <>
                    <Typography className={classes.servicesParagraph}>
                        If you have any questions or would like to discuss a potential project, please feel free to give us a call or send us an email. Our experienced team is ready to assist you with all your landscaping needs and help transform your outdoor space into a stunning masterpiece. We look forward to hearing from you and providing exceptional service.
                    </Typography>
                    <br />
                    <br />
                    <div>
                        <Button href="tel:(585) 244-1626" className={classes.contactUsButton}><PhoneIcon />&nbsp; (585) 244-1626</Button>
                        <Button href="mailto:doug@clovernursery.com?subject=Website Inquiry" className={classes.contactUsButton}><EmailIcon />&nbsp; Email Us</Button>
                    </div>
                    <div className={classes.mapWrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11643.780747022722!2d-77.5287248!3d43.1476803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ca58ff1393df%3A0x550c3c4ac30e89e9!2sClover%20Lawn%20and%20Landscape.!5e0!3m2!1sen!2sus!4v1691610626147!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <br />
                    <br />
                    <div className={classes.servicesDescriptionWrapper}>
                        <Typography className={classes.servicesParagraph}>
                            We value your time and will try to provide you a timely response to your inquiry. Sometimes however, things get a little hectic around here, and try as we do, we might need to indulge your patience just a little. Thanks for your understanding! We look forward to serving you.
                        </Typography>
                    </div>
                </>
            ) : null}
            {props.business === "nursery" ? (
                <>
                    {/* <Typography className={classes.servicesParagraph}>
                        If you have any questions or would like to discuss a potential project, please feel free to give us a call or send us an email. Our experienced team is ready to assist you with all your landscaping needs and help transform your outdoor space into a stunning masterpiece. We look forward to hearing from you and providing exceptional service.
                    </Typography> */}
                    <br />
                    <br />
                    <div>
                        <Button href="tel: (585) 482-5372" className={classes.contactUsButtonNursery}><PhoneIcon />&nbsp;  (585) 482-5372</Button>
                        <Button href="mailto:doug@clovernursery.com?subject=Website Inquiry" className={classes.contactUsButtonNursery}><EmailIcon />&nbsp; Email Us</Button>
                    </div>
                    <div className={classes.mapWrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d93179.18073510446!2d-77.61068412331109!3d43.12868983673499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89d6cb37717aeced%3A0xe7c360450857f1a4!2s485%20S%20Landing%20Rd%2C%20Rochester%2C%20NY%2014625!3m2!1d43.1287194!2d-77.52828339999999!5e0!3m2!1sen!2sus!4v1723752755718!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                    <br />
                    <br />
                    <div className={classes.servicesDescriptionWrapper}>
                        <Typography className={classes.servicesParagraph}>
                            We value your time and will try to provide you a timely response to your inquiry. Sometimes however, things get a little hectic around here, and try as we do, we might need to indulge your patience just a little. Thanks for your understanding! We look forward to serving you.
                        </Typography>
                    </div>
                </>
            ) : null}


        </div>
    )
}

export default ContactUs