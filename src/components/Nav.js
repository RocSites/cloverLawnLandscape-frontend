import React, { useState, useRef } from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
import CloverLogo from '../assets/clover_logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone';

const withStyles = makeStyles(() => ({
    navbarWrapper: {
        display: "flex",
        justifyContent: "space-between",
        background: "#ffffff",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "2",
    },
    navbarImage: {
        width: "200px",
        margin: "10px"
    },
    navbarMenuWrapper: {
        display: "flex",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    menuItem: {
        margin: "auto 15px auto 15px !important",
        borderRadius: "35px",
        "& span": {
            textTransform: "none",
            fontSize: "1rem"
        }
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
    contactUsButtonMobile: {
        "& span": {
            color: "white",
        }

    },
    navBarHamburgerDrawerWrapper: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex"
        }
    },
    hamburgerIcon: {
        margin: "20px",
        fontSize: "2.5rem",
        "@media(min-width: 601px)": {
            display: "none"
        }
    },
    drawerItem: {
        "&:hover": {
            backgroundColor: "#6db0a7",
            color: "black"
        },
        "&:selected:hover": {
            backgroundImage: "#6db0a7",
            color: "black"
        }
    },
    drawerItemLogin: {
        display: "flex",
        backgroundColor: "#004b32",
        padding: "8px 16px",
        width: "100%",
        borderRadius: "0px",
        "& span": {
            textTransform: "none",
            fontSize: "1rem",
            color: "#ffffff",
            justifyContent: "flex-start"
        },
        "&:hover": {
            backgroundColor: "#6db0a7",
            color: "black"
        },
        "&:selected:hover": {
            backgroundImage: "#6db0a7",
            color: "black"
        }

    },
    drawerItemContact: {
        fontSize: "1rem",
        padding: "8px 16px",
        "& span": {
            textTransform: "none"
        },
        "&:hover": {
            backgroundColor: "#6db0a7",
            color: "black"
        },
        "&:selected:hover": {
            backgroundImage: "#6db0a7",
            color: "black"
        }
    },
    list: {
        width: "250px"
    },

}));

const Nav = () => {

    const classes = withStyles();

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(drawerOpen => !drawerOpen)
    }

    const handleClick = (id) => {
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <div className={classes.navbarWrapper}>
            <div>
                <Button onClick={() => handleClick('#sectionOne')}>
                    <img
                        className={classes.navbarImage}
                        src={CloverLogo}
                        alt="company logo"
                    />
                </Button>
            </div>
            <div className={classes.navbarMenuWrapper}>
                {/* TODO update handleClick id to new section name */}
                <Button onClick={() => handleClick('#services')} className={classes.menuItem}>Services</Button>
                <Button onClick={() => handleClick('#nursery')} className={classes.menuItem}>Nursery</Button>
                <Button onClick={() => handleClick('#gallery')} className={classes.menuItem}>Gallery</Button>
                <Button onClick={() => handleClick('#aboutUs')} className={classes.menuItem}>About Us</Button>
                <Button href="tel:(585) 244-1626" className={classes.contactUsButton}><PhoneIcon />&nbsp; Contact Us</Button>
            </div>
            <div className={classes.navBarHamburgerDrawerWrapper}>
                <MenuIcon
                    className={classes.hamburgerIcon}
                    onClick={toggleDrawer}
                />
                <Drawer
                    open={openDrawer}
                    onClose={toggleDrawer}
                    anchor="right"
                    className={classes.drawerRoot}
                >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                    >
                        <List>
                            <ListItem
                                className={classes.drawerItem}
                                button
                                onClick={() => handleClick('#services')}
                            >
                                <ListItemText primary={"Services"} />
                            </ListItem>
                            <ListItem
                                className={classes.drawerItem}
                                button
                                onClick={() => handleClick('#nursery')}
                            >
                                <ListItemText primary={"Nursery"} />
                            </ListItem>
                            <ListItem
                                className={classes.drawerItem}
                                button
                                onClick={() => handleClick('#gallery')}
                            >
                                <ListItemText primary={"Gallery"} />
                            </ListItem>
                            <ListItem
                                className={classes.drawerItem}
                                button
                                onClick={() => handleClick('#aboutUs')}
                            >
                                <ListItemText primary={"About Us"} />
                            </ListItem>
                            <Button
                                className={classes.drawerItemLogin}
                                target="_blank" href=""
                            >
                                Contact Us
                            </Button>
                        </List>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Nav;
