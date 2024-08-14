import React from 'react'
import {Link} from "react-router-dom";

const Landing = () => {

    return (
        <ul>
        <li>
          <Link to="/landscape">Landscape Division</Link>
        </li>
        <li>
          <Link to="/nursery">Nursery - Topsoil/Mulch Delivery</Link>
        </li>
      </ul>
    )

}


export default Landing