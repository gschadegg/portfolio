import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"

const SideLineButton = ({ nextHash }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      id="sideLineButton"
      data-pageplacement={"home"}
      className={isHovering ? "slide" : ""}
    >
      <div className="topLine dottedTrimDown "></div>
      <Link
        title={nextHash === "home" ? "Scroll to Top" : "Scroll Down"}
        to={"/"}
        state={{ hash: nextHash }}
        className={`btn_roundArrow group flex items-center justify-center ${
          nextHash === "home" ? "pointUp" : ""
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onFocus={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onBlur={() => setIsHovering(false)}
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
