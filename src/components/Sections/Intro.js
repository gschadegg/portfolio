import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"
import MaskedLogo from "../MaskedLogo/MaskedLogo"

const Intro = ({ location }) => {
  return (
    <article id="home" className={`mainContent container mx-auto min-h-screen`}>
      <section
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        className={`flex flex-col justify-center items-center min-h-[calc(100vh-300px)] text-center`}
      >
        <MaskedLogo size={250} />
        <h1 className="font-bold text-5xl text-headerText mb-5 mt-9">
          I'm Gretchen,
        </h1>
        <p className="text-lg text-darkText font-normal">
          A nomadic Full Stack Developer, <br /> who likes to build things
        </p>
      </section>
      <div
        data-sal="slide-down"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        className="flex justify-center items-center justify-self-end"
      >
        <Link
          to="/"
          state={{ hash: "about" }}
          className="flex flex-col items-center group"
        >
          <div className="relative h-[32px] w-[1px] dottedTrimDown opacity-50 group-hover:after:h-[33px]"></div>
          <div
            className="rounded-bl-full border-[16px] border-brightAccent/10 rotate-[136deg] transition-all
                        group-hover:border-brightAccent/40 group-focus:border-brightAccent/30 group-hover:translate-y-[10px]"
          >
            <Icon
              className="text-brightAccent transition-all translate-y-[-8px] translate-x-[8px] rotate-[45deg] group-hover:text-darkAccent"
              icon="ic:sharp-keyboard-arrow-up"
              width="48"
            />
          </div>
        </Link>
      </div>
    </article>
  )
}

export default Intro
