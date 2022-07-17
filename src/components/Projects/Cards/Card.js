import React, { useRef, Suspense } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

import TextButton from "../../Buttons/TextButton"
import Tag from "../Tag"

const ProjectModal = React.lazy(() => import("../Modals/ProjectModal"))

const Card = ({ data, ...args }) => {
  const modalRef = useRef()
  const coverImg = getImage(data.frontmatter.coverImg)

  return (
    <>
      <article
        onClick={() => modalRef.current.openModal()}
        onKeyDown={() => modalRef.current.openModal()}
        role="presentation"
        className="cursor-pointer flex-[1_1_0] min-w-[100%] md:min-w-[340px] max-w-[430px] mx-auto lg:ml-0
        md:mr-[20px] mt-8 text-sm font-medium bg-white/60 rounded-xl
        text-brightAccent flex flex-col m-1
        shadow-[2px_4px_4px_0px_rgba(11,7,49,0.1)] hover:-translate-y-2
        transition"
        {...args}
      >
        <section className="bg-brightAccent/20 w-full rounded-t-xl max-h-[300px] relative">
          <Tag>{data.frontmatter.type}</Tag>
          <GatsbyImage
            image={coverImg}
            alt={data.frontmatter.coverImg_alt}
            placeholder={"blurred"}
            className={`w-full h-full rounded-t-xl`}
            style={{ zIndex: 1 }}
            objectPosition={"50% 20%"}
          />
        </section>
        <section className="px-8 pt-8 pb-6 flex flex-col flex-1">
          <h3 className="text-headerText/60 font-bold text-2xl">
            {data.frontmatter.title}
          </h3>
          <p className="basicText pt-0 pb-4 opacity-80 flex-1">
            {data.frontmatter.shortDesc}
          </p>
          <TextButton
            to="/"
            classes={["sm"]}
            onClick={() => modalRef.current.openModal()}
          >
            Check Out Project
          </TextButton>
        </section>
      </article>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectModal ref={modalRef} data={data} />
      </Suspense>
    </>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card
