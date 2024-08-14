import React from 'react'
import Layout from './Layout';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs'

const Landscaping = () => {
    return (
        <Layout business="landscape">
            <SectionOne />
            <AboutUs />
            <SectionTwo />
            <Services />
            <SectionThree />
            <ContactUs />
        </Layout>
    )
}

export default Landscaping