import React from 'react'
import { Link } from "react-router-dom";
import '../Landing.css'
import PhoneIcon from '@mui/icons-material/Phone';
import CloverLogo from '../assets/clover_logo.png'
import CloverNurseryLogo from '../assets/clover_nursery_logo.png'

const Landing = () => {

    return (
        <div id="landing-area">
            <div id="box-left">
                <Link to="/nursery">
                    <img
                        class="cloverLogo"
                        src={CloverNurseryLogo}
                        alt="company logo"
                    />
                </Link>
                <Link to="/nursery">
                    <button class="landingButtonNursery">
                        Clover Nursery - Topsoil/Mulch Delivery
                    </button>
                </Link>
                <a href="tel:(585) 482-5372" class="phoneButton nurseryPhoneButton">
                    <PhoneIcon />&nbsp;
                    (585) 482-5372
                </a>
            </div>
            <div id="box-right">
                <Link to="/landscape">
                    <img
                        class="cloverLogo"
                        src={CloverLogo}
                        alt="company logo"
                    />
                </Link>
                <Link to="/landscape">
                    <button class="landingButton">Clover Landscape Division</button>
                </Link>
                <a href="tel:(585) 244-1626" class="phoneButton landscapePhoneButton">
                    <PhoneIcon />&nbsp;
                    (585) 244-1626
                </a>
            </div>
        </div>

    )

}


export default Landing