import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Icon } from "@iconify/react"

const TextButton = ({
  children,
  classes,
  to,
  internalLink = true,
  hash = null,
  ...args
}) => {
  return (
    <>
      {internalLink ? (
        <Link
          to={to}
          state={{ hash: `${hash ? `${hash}` : null}` }}
          className={`textBtnGradientHover basicButton self-start ${classes?.join(
            " "
          )}`}
          {...args}
        >
          {children}
          <Icon
            className="text-brightAccent pl-2"
            icon="bytesize:arrow-right"
            width="28"
          />
        </Link>
      ) : (
        <a
          href={to}
          rel="noreferrer noopener"
          target="_blank"
          className={`textBtnGradientHover basicButton self-start ${classes?.join(
            " "
          )}`}
          {...args}
        >
          {children}
          <Icon
            className="text-brightAccent pl-2"
            icon="bytesize:arrow-right"
            width="28"
          />
        </a>
      )}
    </>
  )
}

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  hash: PropTypes.string,
}

export default TextButton
