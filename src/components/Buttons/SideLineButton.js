import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"

const SideLineButton = ({ nextHash }) => {
  const sideLineBtnSlide = e => {
    e.preventDefault()
    document.getElementById("sideLineButton")?.classList.add("slide")
  }
  const clearSideLineBtnSlide = e => {
    e.preventDefault()
    document.getElementById("sideLineButton")?.classList.remove("slide")
  }
  return (
    <div id="sideLineButton" data-pageplacement={"home"}>
      <div className="topLine dottedTrimDown "></div>
      <Link
        to={"/"}
        state={{ hash: nextHash }}
        className="btn_roundArrow group flex items-center justify-center"
        onMouseEnter={sideLineBtnSlide}
        onFocus={sideLineBtnSlide}
        onMouseLeave={clearSideLineBtnSlide}
        onBlur={clearSideLineBtnSlide}
      >
        <Icon
          className=""
          icon="eva:arrow-ios-downward-fill"
          width="32"
          inline={true}
        />
      </Link>
      <div className="bottomLine dottedTrimUp"></div>
    </div>
  )
}

SideLineButton.propTypes = {
  nextHash: PropTypes.string,
}

export default SideLineButton
