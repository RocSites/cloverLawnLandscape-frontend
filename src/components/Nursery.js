import React from 'react'
import Layout from './Layout';
import NurseryDetail from './NurseryDetail';
import ContactUs from './ContactUs'


const Nursery = () => {
    return (
        <Layout business="nursery">
            <NurseryDetail/>
            <ContactUs business="nursery"/>
        </Layout>
    )
}

export default Nursery