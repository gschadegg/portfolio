import React, { useCallback, useState, useEffect } from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import './../styles/global.scss'
import Intro from "./../components/Sections/Intro"
import About from "../components/Sections/About"
import Work from "./../components/Sections/Work"
import Contact from "./../components/Sections/Contact"

const IndexPage = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  const checkScreenSize = useCallback(mediaCheck => {
    if (mediaCheck.matches) {
      setIsDesktop(false)
    } else {
      setIsDesktop(true)
    }
  }, [])

  //Checks for screen resize if desktop/mobile
  useEffect(() => {
    let mediaCheck = window.matchMedia("(max-width: 1024px)")
    checkScreenSize(mediaCheck)
    mediaCheck.addEventListener("change", checkScreenSize)
    return () => {
      mediaCheck.removeEventListener("change", checkScreenSize)
    }
  }, [checkScreenSize])

  return (
    <Layout>
      <Seo title="Home" />
      <Intro />
      <About />
      <Work />
      <Contact isDesktop={isDesktop} />
    </Layout>
  )
}

export default IndexPage
