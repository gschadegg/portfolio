import React, { useState, useCallback } from "react"
import { Link } from "gatsby"

import NamePlate from "./NamePlate/NamePlate"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"
import MaskedLogo from "../MaskedLogo/MaskedLogo"
import { Icon } from "@iconify/react"

const Header = ({ standardHead = true, classes }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const mobileNavClickHandler = useCallback(() => {
    setShowMobileNav(prevState => !prevState)
  }, [])

  const closeMobileNav = useCallback(() => {
    setShowMobileNav(false)
  }, [])

  return (
    <header
      className={`container mx-auto px-6 mt-7 mb-7 flex items-center justify-between ${
        classes ? classes.join(" ") : ""
      }`}
    >
      <section id="leftHeader" className={`flex items-center justify-start`}>
        <Link
          id={standardHead ? "standardHeadLogo" : "altHeadLogo"}
          className={`flex hover:opacity-80 group ${
            !standardHead && "scale-50"
          }`}
          to={"/"}
          state={{ hash: "home" }}
        >
          {!standardHead ? (
            <Icon
              className="backArrow text-brightAccent transition-all absolute left-[-40px] top-[50%] translate-y-[-57%] group-hover:left-[-48px]"
              icon="bytesize:arrow-left"
              width="36"
            />
          ) : null}
          <MaskedLogo />
        </Link>
        {standardHead ? (
          <div
            id="logoDivider"
            className="font-normal text-2xl text-brightAccent/60"
          >
            /
          </div>
        ) : null}
        {standardHead ? (
          <NamePlate className="namePlate flex items-center justify-start" />
        ) : null}
      </section>
      <MainNav mobileNavClickHandler={mobileNavClickHandler} />
      <MobileNav
        showMobileNav={showMobileNav}
        mobileNavClickHandler={mobileNavClickHandler}
        closeMobileNav={closeMobileNav}
      />
    </header>
  )
}

export default Header
