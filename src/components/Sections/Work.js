import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MainSectionContainer from "../Containers/MainSectionContainer"
import Card from "./../Projects/Cards/Card"

const Work = () => {
  // date(formatString: "MMMM D, YYYY")

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            type
            shortDesc
            coverImg_alt
            coverImg {
              childImageSharp {
                gatsbyImageData
              }
            }
            mainDisplay {
              childImageSharp {
                gatsbyImageData
              }
            }
            mainDisplay_alt
          }
          id
          body
        }
      }
    }
  `)

  const cardStack = data.allMdx.nodes.map(card => {
    return (
      <Card
        id={card.id}
        key={card.id}
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        data={card}
      />
    )
  })

  return (
    <MainSectionContainer id="latestWork" classes={["mb-16"]}>
      <section className="flex flex-col flex-1">
        <h2 className="sectionHead">Select Works</h2>
        <section className="flex flex-wrap mb-[16px] mt-2">{cardStack}</section>
      </section>
    </MainSectionContainer>
  )
}
export default Work
