import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Angryman from "../components/angryman"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About me</h1>
    <p>lite information om mig själv - Lorem ipsum dolor sit amet, sea id partiendo qualisque honestatis, ei similique incorrupte vis, ne his doctus accommodare. Mei ad partem comprehensam. Vide fastidii has ad, ad summo debet menandri eam, id cum dicat maiorum denique. His no nulla propriae, utinam accusamus te vim. Ei nisl vide per, pri no paulo intellegam, placerat torquatos nec cu.</p>
    
    <div style={{
    marginBottom: `1.45rem`,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '50px',
    
    }}>
    <Angryman />
    <div>
    <p>{`länk till github: `}<Link style={{textDecoration: 'none', color: 'black'}} to="https://github.com/">Github</Link></p>
    <p>{`Länk till LinkedIn: `}<Link style={{textDecoration: 'none', color: 'black'}} to="https://www.linkedin.com">Linkedin</Link></p>
    </div>

    </div>
    
  </Layout>
)

export default SecondPage
