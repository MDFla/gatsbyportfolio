import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>My name is Maurice, I am a Front-End Developer from San Antonio Texas.</h2>
            <p>Want to reach out to me? <Link to="/contact">Reach out</Link></p>
        </Layout>
    )
}

export default IndexPage