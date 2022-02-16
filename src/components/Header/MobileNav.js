import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import { Icon } from "@iconify/react"
const MobileNav = ({
  mobileNavClickHandler,
  showMobileNav,
  closeMobileNav,
}) => (
  <div
    className={`mobileNav px-6 absolute inset-0 top-[-100vh] h-screen z-[10] flex-col flex 
                ${
                  showMobileNav ? "showMenu" : "hideMenu"
                } bg-overlay/95 lg:invisible lg:hidden`}
  >
    <div
      className={`container mx-auto mt-9 mb-7 flex items-center justify-between `}
    >
      <Link
        to={"/profile/"}
        className={`rounded-full border-2 border-slate-50/30 p-1.5 group hover:border-slate-50/50 focus:border-slate-50/50 imgWrap mobileProfileImg`}
      >
        {/* <Icon className='text-slate-50 opacity-0 absolute top-1/2 -left-1 -translate-y-2/4 z-0 group-hover:z-[5] group-focus:z-[5] group-hover:-left-9 group-focus:-left-9 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-150' icon="ic:sharp-keyboard-arrow-left" width='36'/> */}
        <StaticImage
          src="./../../images/profileImgSVG.svg"
          width={71}
          quality={71}
          formats={["auto", "webp", "avif"]}
          alt="profile portrait"
          style={{ zIndex: 1 }}
        />
        <Icon
          className="text-slate-50/90 opacity-0 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-0 group-hover:z-[5]  group-focus:z-[5] group-hover:opacity-100  group-focus:opacity-100 transition-all duration-150"
          icon="iconoir:profile-circled"
          width="36"
        />
      </Link>
      <button
        className={`text-slate-50/70 flex items-center hover:text-slate-50 focus:text-slate-50 `}
        onClick={mobileNavClickHandler}
      >
        {" "}
        Close <Icon className="ml-1 mr-2.5" icon="ep:close" width="28" />
      </button>
    </div>
    <div className="mobileNavLinkList flex mx-auto flex-col flex-1 items-center pt-10 ">
      <span>
        <Link
          className="mobileNavLink"
          onClick={closeMobileNav}
          data-navlocation="home"
          to="/"
          state={{ hash: "home" }}
        >
          Home
        </Link>
      </span>
      <span>
        <Link
          className="mobileNavLink"
          onClick={closeMobileNav}
          data-navlocation="about"
          to="/"
          state={{ hash: "about" }}
        >
          About
        </Link>
      </span>
      <span>
        <Link
          className="mobileNavLink"
          onClick={closeMobileNav}
          data-navlocation="latestWork"
          to="/"
          state={{ hash: "latestWork" }}
        >
          Work
        </Link>
      </span>
    </div>
    <div className="container mx-auto flex px-6 py-12 items-center justify-between max-w-md iconNav">
      <Link
        data-navlocation="contact"
        className="rounded-full border-2 border-slate-50/30 p-1.5 group hover:border-slate-50 focus:border-slate-50"
        onClick={closeMobileNav}
        to="/"
        state={{ hash: "contact" }}
      >
        <Icon
          className="text-slate-50/30 group-hover:text-slate-50 group-focus:text-slate-50"
          icon="fluent:mail-48-filled"
          width="32"
        />
      </Link>
      <a
        className="rounded-full border-2 border-slate-50/30 p-1.5 mx-6 group hover:border-slate-50 focus:border-slate-50"
        href="https://www.linkedin.com/in/gretchen-schadegg/"
      >
        <Icon
          className="text-slate-50/30 group-hover:text-slate-50 group-focus:text-slate-50"
          icon="ci:linkedin"
          width="32"
        />
      </a>
      <a
        className="rounded-full border-2 border-slate-50/30 px-1 pt-1.5 group hover:border-slate-50 focus:border-slate-50"
        href="https://github.com/gschadegg"
      >
        <Icon
          className="text-slate-50/30 group-hover:text-slate-50 group-focus:text-slate-50"
          icon="teenyicons:github-solid"
          width="36"
        />
      </a>
    </div>
  </div>
)

export default MobileNav
