import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About</h1>
            <p>This is where the about page will show!</p>
            <p>Contact me <Link to="/contact">here!</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage