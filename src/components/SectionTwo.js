import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import CloverIconWhite from '../assets/icon_clover_white.png'
import PatioFireThree from '../assets/patio_fire_three.jpeg'

const withStyles = makeStyles(() => ({
    sectionTwoWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 14% 0 14%",
        margin: "auto",
        background: "black",
        height: "500px",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            height: "auto"
        }
    },
    sectionTwoHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        "& > span": {
            color: "#00704a"
        },
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionTwoText: {
        fontSize: "1.75rem",
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    sectionTwoHeaderWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "40%",
        color: "white",
        maxHeight: "500px"
    },
    sectionTwoImage: {
        width: "100%"
    },
    sectionTwoContentWrapper: {
        display: "grid",
        gridTemplateRows: "300px 300px 300px",
        gridTemplateColumns: "300px 300px 300px",
        gridGap: "50px"
    },
    sectionTwoHeaderTextWrapper: {
        display: "flex",
        margin: "0px 0 20px 0"
    },
    sectionTwoContentTextWrapper: {
        position: "relative",
        textAlign: "center",
        color: "white",
        display: "flex"
    },
    centerText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    servicesListWrapper: {
        color: "white"
    }

}));


const SectionTwo = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionTwoWrapper}>
            <div className={classes.sectionTwoHeaderWrapper}>
                <div className={classes.sectionTwoHeaderTextWrapper}>
                    <Typography className={classes.sectionTwoHeader}>Transform your<span>&nbsp;Space</span></Typography>
                </div>
            </div>
            <div className={classes.sectionTwoContentWrapper}>
                <div className={classes.sectionTwoContentTextWrapper}>
                    <img className={classes.sectionTwoImage} src={PatioFireThree} />
                    <div className={classes.centerText}>
                        <Typography className={classes.sectionTwoText}>Hardscaping</Typography>
                    </div>
                    {/* put this in a click slide up or hover TBD */}
                    {/* <ul className={classes.servicesListWrapper}>
                        <li>Flagstone and pavers of all styles</li>
                        <li>Patios and walks</li>
                        <li>Paver driveways</li>
                        <li>Retaining walls</li>
                        <li>Steps, stoops, and landings</li>
                    </ul> */}
                </div>
                <div className={classes.sectionTwoContentTextWrapper}>
                    <img className={classes.sectionTwoImage} src={PatioFireThree} />
                    <div className={classes.centerText}>
                        <Typography className={classes.sectionTwoText}>Landscaping</Typography>
                    </div>
                    {/* put this in a click slide up or hover TBD */}
                    {/* <ul className={classes.servicesListWrapper}>
                        <li>Flagstone and pavers of all styles</li>
                        <li>Patios and walks</li>
                        <li>Paver driveways</li>
                        <li>Retaining walls</li>
                        <li>Steps, stoops, and landings</li>
                    </ul> */}
                </div>
                <div className={classes.sectionTwoContentTextWrapper}>
                    <img className={classes.sectionTwoImage} src={PatioFireThree} />
                    <div className={classes.centerText}>
                        <Typography className={classes.sectionTwoText}>Maintenance</Typography>
                    </div>
                    {/* put this in a click slide up or hover TBD */}
                    {/* <ul className={classes.servicesListWrapper}>
                        <li>Flagstone and pavers of all styles</li>
                        <li>Patios and walks</li>
                        <li>Paver driveways</li>
                        <li>Retaining walls</li>
                        <li>Steps, stoops, and landings</li>
                    </ul> */}
                </div>

            </div>

        </div>
    )
}

export default SectionTwo