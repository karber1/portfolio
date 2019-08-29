import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
    <h1>Min Portfolio</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div style={{
    marginBottom: `1.45rem`,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '50px',
    
    }}>
      <Image />
    <p>Lite information om mig själv osv osv osv osv</p>
    </div>
    
  </Layout>
)

export default IndexPage
