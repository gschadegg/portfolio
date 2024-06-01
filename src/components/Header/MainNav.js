import * as React from "react"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"

const MainNav = ({ mobileNavClickHandler }) => {
  return (
    <nav
      className={`flex justify-end ${
        mobileNavClickHandler ? "items-center" : "items-end"
      }`}
    >
      <Link
        className="mainNavLink "
        data-navlocation="about"
        to={"/"}
        state={{ hash: "about" }}
      >
        About
      </Link>
      <Link
        className="mainNavLink"
        data-navlocation="latestWork"
        to={"/"}
        state={{ hash: "latestWork" }}
      >
        Sandbox{/* Work */}
      </Link>
      <div className="navIcons hidden lg:flex flex ml-9">
        <Link
          aria-label="Contact Me"
          className="mainNavIcon rounded-full border-2 border-mainGray/40 p-1.5 group hover:border-mainGray focus:border-mainGray"
          data-navlocation="contact"
          to="/"
          state={{ hash: "contact" }}
        >
          <Icon
            className="text-mainGray/40 group-hover:text-mainGray group-focus:text-mainGray"
            icon="fluent:mail-48-filled"
            width="24"
          />
        </Link>
        <a
          aria-label="LinkedIn"
          className="mainNavIcon rounded-full border-2 border-mainGray/40 p-1.5 mx-6 group hover:border-mainGray focus:border-mainGray"
          href="https://www.linkedin.com/in/gretchen-schadegg/"
        >
          <Icon
            className="text-mainGray/40 group-hover:text-mainGray group-focus:text-mainGray"
            icon="ci:linkedin"
            width="24"
          />
        </a>
        <a
          aria-label="GitHub"
          className="mainNavIcon rounded-full border-2 border-mainGray/40 px-1 pt-1.5 group hover:border-mainGray focus:border-mainGray"
          href="https://github.com/gschadegg"
        >
          <Icon
            className="text-mainGray/40 group-hover:text-mainGray group-focus:text-mainGray"
            icon="teenyicons:github-solid"
            width="30"
          />
        </a>
      </div>
      {mobileNavClickHandler ? (
        <button
          aria-label="Open Mobile Navigation"
          onClick={mobileNavClickHandler}
          className="block lg:hidden group"
        >
          <Icon
            className="text-mainGray/60 group-hover:text-brightAccent group-focus:text-brightAccent"
            icon="system-uicons:menu-hamburger"
            width="48"
          />
        </button>
      ) : (
        ""
      )}
    </nav>
  )
}

export default MainNav
