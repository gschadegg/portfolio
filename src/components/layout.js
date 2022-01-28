import React, { useRef, useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import MaskedLogo from "./MaskedLogo/MaskedLogo"
import { Icon } from "@iconify/react"
import SideLineButton from "./Buttons/SideLineButton"

const Layout = ({ children, mainLayout = true }) => {
  const [nextHashVal, setNextHashVal] = useState(0)
  const mainContentSections = useRef(["home", "about", "latestWork", "contact"])

  const findNextHash = useCallback(
    currentSection => {
      let idxcurrent = mainContentSections.current.indexOf(currentSection)
      let nextButton = document
        .getElementById("sideLineButton")
        ?.querySelector(".btn_roundArrow")

      if (idxcurrent === 3) {
        idxcurrent = 0
        nextButton?.classList.add("pointUp")
      } else {
        idxcurrent += 1
        nextButton?.classList.remove("pointUp")
      }
      setNextHashVal(idxcurrent)
    },
    [mainContentSections]
  )

  const inViewPort = useCallback(elem => {
    let distance = elem.getBoundingClientRect()
    return (
      distance.bottom >= 0 &&
      distance.left >= 0 &&
      distance.top <=
        (window.innerHeight - 200 || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    )
  }, [])

  const findMainSections = useCallback(() => {
    let foundSections = document.querySelectorAll(".mainContent")
    let currentSection
    foundSections?.forEach(element => {
      let valReturned = inViewPort(element)
      if (valReturned) {
        document
          .querySelectorAll(".activeNav")
          ?.forEach(el => el.classList.remove("activeNav"))
        element.classList.add("activeNav")
        document
          .querySelectorAll(`[data-navlocation=${element.id}]`)
          ?.forEach(el => el.classList.add("activeNav"))
        currentSection = element.id
        document.getElementById("sideLineButton").dataset.pageplacement =
          currentSection
        findNextHash(currentSection)
      }
    })
    if (currentSection === "home") {
      document.getElementById("leftHeader")?.classList.remove("show")
    } else {
      document.getElementById("leftHeader")?.classList.add("show")
    }
  }, [inViewPort, findNextHash])

  // If using standard header,track scrolling to mark nav
  useEffect(() => {
    if (mainLayout) {
      findMainSections()
      document
        .querySelector("main")
        .addEventListener("scroll", findMainSections)
    }
    return () => {
      if (mainLayout) {
        document
          .querySelector("main")
          .removeEventListener("scroll", findMainSections)
      }
    }
  }, [findMainSections, mainLayout])

  // siteTitle={data.site.siteMetadata?.title || `Title`}
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {mainLayout ? (
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto ">
            <section className="container mx-auto flex px-6">
              <SideLineButton
                nextHash={mainContentSections.current[nextHashVal]}
              />
              <div className="flex-1">{children}</div>
            </section>
          </main>
        </div>
      ) : (
        <div className="flex flex-col h-screen lg:flex-row lg:container lg:px-6 lg:mx-auto">
          <section className="mt-7 mb-7 hidden lg:flex lg:w-[100px] ">
            <Link
              id={""}
              className={`flex fixed hover:opacity-80 focus:opacity-80 scale-50 group`}
              to={"/"}
              state={{ hash: "home" }}
            >
              <Icon
                className="text-brightAccent transition-all absolute left-[-40px] top-[50%] translate-y-[-57%] group-hover:left-[-48px]"
                icon="bytesize:arrow-left"
                width="36"
              />
              <MaskedLogo />
            </Link>
          </section>
          <Header standardHead={false} classes={["lg:hidden"]} />
          <main className="container flex-1 flex flex-col mx-auto md:pr-6 lg:flex-row overflow-y-auto removeOverflowLG">
            {children}
          </main>
        </div>
      )}
      {/* © {new Date().getFullYear()} */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainLayout: PropTypes.bool,
  // mainLayout: PropTypes.node.isRequired,
}

export default Layout