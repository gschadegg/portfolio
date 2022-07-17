import React from "react"

// Move Typography.js styles to the top of the head section so they're loaded first.
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  headComponents.sort((x, y) => {
    if (x.key === "gatsby-plugin-manifest-icon-link-svg") {
      return -1
    } else if (y.key === "gatsby-plugin-manifest-icon-link-svg") {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="modal" id="modal"></div>])
}
