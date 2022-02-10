import React from "react"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"

const IconButton = ({ children, classes, to, ...args }) => {
  return (
    <a
      href={to}
      className={`iconBtnGradientHover basicButton self-start ${classes?.join(
        " "
      )}`}
      rel="noreferrer noopener"
      target="_blank"
      {...args}
    >
      {children}
      <Icon
        className="text-brightAccent pl-2"
        icon="bytesize:arrow-right"
        width="28"
      />
    </a>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}

export default IconButton
