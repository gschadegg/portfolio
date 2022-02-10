import React from "react"
import PropTypes from "prop-types"

const Tag = ({ children, theme = "light" }) => {
  let classes =
    "border-[#59598A] bg-headerText absolute z-[2] top-[20px] right-[20px] py-2"
  if (theme === "dark") {
    classes = "border-[#ffffff]/30 bg-white/20 self-start text-sm pt-1 pb-0.5"
  }
  return (
    <div
      className={`rounded-full border-2 text-slate-50 font-light px-4  ${classes}`}
    >
      {children}
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tag
