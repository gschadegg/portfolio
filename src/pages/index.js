import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import './../styles/global.scss'
import Intro from './../components/Sections/Intro'
import About from "../components/Sections/About"
import Work from './../components/Sections/Work'
import Contact from './../components/Sections/Contact'

const IndexPage = () => {


 return ( 
    <Layout>
      <Seo title="Home" />
      <Intro />
      <About />
      <Work />
      <Contact />
    </Layout>
  )
}

export default IndexPage
