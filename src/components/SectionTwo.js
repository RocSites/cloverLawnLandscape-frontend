import { Typography, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { clsx } from 'clsx';
import CloverIconWhite from '../assets/icon_clover_white.png'
import PatioFireThree from '../assets/patio_fire_three.jpeg'

const withStyles = makeStyles(() => ({
    sectionTwoWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5% 14% 5% 14%",
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
        gridGap: "50px",
        zIndex: "1"
    },
    sectionTwoHeaderTextWrapper: {
        display: "flex",
        margin: "0px 0 50px 0"
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
        transform: "translate(-50%, -50%)",
        width: "100%"
    },
    centerTextOverlay: {
        position: "absolute",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        background: "#aca3a3",
    },
    servicesListWrapper: {
        color: "black",
        textAlign: "left",
        marginBlockStart: 0,
        paddingInlineStart: "30px",
        "& li": {
            margin: "15px 0"
        }
    }

}));


const SectionTwo = () => {

    const classes = withStyles();

    const [showHardScapeText, setShowHardScapeText] = useState(false);
    const [showLandscapingText, setShowLandscapingText] = useState(false);
    const [showMaintenanceText, setMaintenanceText] = useState(false);

    // TODO - fix hover state mixup on second and third tiles
    // TODO - add clsx for when service details are displayed (add gray/white color and background). Add scroll up for this transition later
    const handleShowServicesDetail = (serviceName, enabled) => (e) => {
        console.log(serviceName);
        if (serviceName === "hardscaping") {
            setShowHardScapeText(enabled)
        } else if (serviceName === "landscaping") {
            setShowLandscapingText(enabled)
        } else if (serviceName === "maintenance") {
            setMaintenanceText(enabled)
        }
    }

    return (
        <div className={classes.sectionTwoWrapper}>
            <div className={classes.sectionTwoHeaderWrapper}>
                <div className={classes.sectionTwoHeaderTextWrapper}>
                    <Typography className={classes.sectionTwoHeader}>Transform your<span>&nbsp;Space</span></Typography>
                </div>
            </div>
            <div className={classes.sectionTwoContentWrapper}>
                <div className={classes.sectionTwoContentTextWrapper}
                    onMouseEnter={handleShowServicesDetail("hardscaping", true)}
                    onMouseLeave={handleShowServicesDetail("hardscaping", false)}
                    onClick={handleShowServicesDetail("hardscaping", true)}
                >
                    <img className={classes.sectionTwoImage} src={PatioFireThree} />
                    {showHardScapeText === false ? (
                        <div className={classes.centerText}>
                            <Typography className={classes.sectionTwoText}>Hardscaping</Typography>
                        </div>
                    ) : (
                        <div className={classes.centerTextOverlay}>
                            <ul className={classes.servicesListWrapper}>
                                <li>Flagstone and pavers of all styles</li>
                                <li>Patios and walks</li>
                                <li>Paver driveways</li>
                                <li>Retaining walls</li>
                                <li>Steps, stoops, and landings</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={classes.sectionTwoContentTextWrapper}
                    onMouseEnter={handleShowServicesDetail("landscaping", true)}
                    onMouseLeave={handleShowServicesDetail("landscaping", false)}
                    onClick={handleShowServicesDetail("landscaping", true)}
                >
                    <img id="landscaping" className={classes.sectionTwoImage} src={PatioFireThree} />
                    {showLandscapingText === false ? (
                        <div className={classes.centerText}>
                            <Typography className={classes.sectionTwoText}>Landscaping</Typography>
                        </div>
                    ) : (
                        <div className={classes.centerTextOverlay}>
                            <ul className={classes.servicesListWrapper}>
                                <li>Walkways</li>
                                <li>Permanent outdoor seating</li>
                                <li>Outdoor cooking areas</li>
                                <li>Grills/Fire pits</li>
                                <li>Swimming pools/Hot tubs</li>
                                <li>Sun/Shade areas</li>
                                <li>Water features</li>

                            </ul>
                            <ul className={classes.servicesListWrapper}>
                                <li>Bird watching</li>
                                <li>Screening</li>
                                <li>Wind breaks</li>
                                <li>Lawns</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={classes.sectionTwoContentTextWrapper}
                    onMouseEnter={handleShowServicesDetail("maintenance", true)}
                    onMouseLeave={handleShowServicesDetail("maintenance", false)}
                    onClick={handleShowServicesDetail("maintenance", true)}>
                    <img className={classes.sectionTwoImage} src={PatioFireThree} />
                    {showMaintenanceText === false ? (
                        <div className={classes.centerText}>
                            <Typography className={classes.sectionTwoText}>Landscaping</Typography>
                        </div>
                    ) : (
                        <div className={classes.centerTextOverlay}>
                            <ul className={classes.servicesListWrapper}>
                                <li>Seasonal mowing and plowing</li>
                                <li>Lawn fertilization and weed control</li>
                                <li>Bed maintenance and weeding</li>
                                <li>Tree and shrub pruning</li>
                                <li>Large tree take-downs and disposals</li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default SectionTwo