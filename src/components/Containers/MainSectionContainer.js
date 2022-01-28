import * as React from "react"
import PropTypes from "prop-types"

const MainSectionContainer = ({ children, id }) => {
  return (
    <article
      id={id}
      className={`mainContent min-h-[calc(100vh-150px)] flex lg:w-[calc(100%-112px)] lg:ml-[112px]`}
    >
      {children}
    </article>
  )
}

MainSectionContainer.propType = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default MainSectionContainer
