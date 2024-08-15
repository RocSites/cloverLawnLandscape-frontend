import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Nav business={props.business}/>
            <div>{props.children}</div>
            <Footer business={props.business}/>
        </>
    )
}

export default Layout;
