import React, { forwardRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Modal from "../../Containers/Modal/Modal"
import Tag from "../Tag"

const ProjectModal = forwardRef(({ data, ...args }, ref) => {
  const mainDisplayImg = getImage(data.frontmatter.mainDisplay)

  return (
    <Modal ref={ref} {...args}>
      <article className="flex flex-col lg:flex-row justify-between items-start">
        <section className="flex flex-col flex-1 lg:max-w-[440px] lg:mr-[80px]">
          <Tag theme="dark">{data.frontmatter.type}</Tag>
          <h3 className="font-bold text-4xl text-white/80 mt-6 mb-8">
            {data.frontmatter.title}
          </h3>
          <MDXRenderer>{data.body}</MDXRenderer>
        </section>
        <section
          className="mb-10 flex-1 rounded-xl lg:max-w-[60%] lg:mb-0 relative z-0 border-[#E8E9F1]/10 border-4
        after:content-[''] after:absolute after:bg-white/[.05] after:h-full after:w-full after:rounded-xl after:left-[10px] after:top-[10px] md:after:left-[40px] md:after:top-[40px] after:z-[-1] "
        >
          <div className="h-full max-h-[600px] lg:max-h-[calc(100vh-400px)] overflow-x-auto rounded-[6px] my-[4px] ml-[4px] mr-[6px] pr-[6px]">
            <div className="">
              <GatsbyImage
                image={mainDisplayImg}
                alt={data.frontmatter.mainDisplay_alt}
                placeholder={"blurred"}
                className={`w-full h-full`}
                style={{ zIndex: 1 }}
                objectPosition={"50% 20%"}
              />
            </div>
          </div>
        </section>
      </article>
    </Modal>
  )
})

ProjectModal.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectModal
