import * as React from "react"
import PropTypes from "prop-types"

const MainSectionContainer = ({ children, id, classes }) => {
  return (
    <article
      id={id}
      className={`mainContent min-h-[calc(100vh-150px)] flex flex-col lg:flex-row lg:w-[calc(100%-170px)] lg:ml-[170px] ${classes?.join(
        " "
      )}`}
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
