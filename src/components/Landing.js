import React from 'react'
import { Link } from "react-router-dom";
import '../Landing.css'

const Landing = () => {

    return (
        <div id="landing-area">
            <div id="box-left">
                <Link to="/nursery">
                    <button class="landingButton">
                        Nursery - Topsoil/Mulch Delivery
                    </button>
                </Link>
            </div>
            <div id="mobile-diagonal"></div>
            <div id="box-right">
                <Link to="/landscape">
                    <button class="landingButton">Landscape Division</button>
                </Link>
            </div>
        </div>

    )

}


export default Landing