import * as React from "react"
import PropTypes from "prop-types"

const MainSectionContainer = ({ children, id, classes }) => {
  return (
    <article
      id={id}
      className={`mainContent min-h-[calc(100vh-200px)] flex flex-col my-32 lg:flex-row lg:w-[calc(100%-170px)] lg:ml-[170px] ${classes?.join(
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
