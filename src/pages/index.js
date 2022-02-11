import React from "react"
import { useScreenSize } from "./../hooks/hooks"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "./../components/Sections/Intro"
import About from "../components/Sections/About"
import Work from "./../components/Sections/Work"
import Contact from "./../components/Sections/Contact"

const IndexPage = () => {
  const isDesktop = useScreenSize()

  return (
    <Layout>
      <Seo title="Portfolio" />
      <Intro />
      <About />
      <Work />
      <Contact isDesktop={isDesktop} />
    </Layout>
  )
}

export default IndexPage
