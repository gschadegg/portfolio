import React from "react"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"

const BoxButton = ({
  children,
  tagType = "a",
  size = "short",
  accentBox = false,
  iconName,
  classes,
  ...args
}) => {
  // size: short, tall
  const typesTags = {
    button: "button",
    a: "a",
  }
  const BoxTag = `${typesTags[tagType]}`

  let additionalAttr =
    tagType === "a" ? 'target="_blank" rel="noreferrer noopener"' : ""
  const baseClasses = accentBox
    ? "bg-brightAccent/80 text-white lg:h-[110%] lg:self-end "
    : "bg-brightAccent/10 text-brightAccent group hover:text-white focus:text-white transition-all"
  const iconClasses = accentBox
    ? "text-white"
    : "text-brightAccent pb-2 transition-all group-hover:text-white group-focus:text-white"

  return (
    <>
      <BoxTag
        className={`m-1 gradientBGHover rounded-xl justify-center text-left p-6 min-w-[204] ${baseClasses} gradientBGHover
            ${size === "tall" && accentBox !== true ? "flex-1" : "font-bold "}
            ${classes?.join(" ")}`}
        {...args}
        {...additionalAttr}
      >
        <Icon className={iconClasses} icon={iconName} width="48" />
        {children}
      </BoxTag>
    </>
  )
}

BoxButton.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
}

export default BoxButton
