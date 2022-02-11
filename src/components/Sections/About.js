import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Icon } from "@iconify/react"

import MainSectionContainer from "../Containers/MainSectionContainer"
import TextButton from "../Buttons/TextButton"

const About = () => {
  return (
    <MainSectionContainer id="about" classes={["mt-20"]}>
      <section
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        className="flex flex-col flex-1 lg:max-w-[500px]"
      >
        <h2 className="sectionHead">
          About Me
          <div className="sectionHead_tag">I'm a Full Stack Developer,</div>
        </h2>
        <p className="basicText">
          with 8 years of experience and I love getting my hands dirty. I enjoy
          building anything from business sites to interactive web apps while
          focused on seeking opportunities that are meaningful and aligned with
          my passions. My stack preferences are MERN(G) and Jamstack but I’m
          always interested in trying out new technologies that I come across.
        </p>
        <p className="basicText">
          <em className="sectionSubhead">Tech Interests:</em> JavaScript, React,
          NodeJS, Express, Gatsby, MongoDB, Apollo, GraphQL, RESTful APIs,
          TailwindCSS, HTML, SCSS, Styled Components, CSS, Git, Figma
        </p>
        <p className="basicText">
          <em className="sectionSubhead">Passions:</em> the Outdoors, Mental
          Health, Empowering Women, &amp; Charitably Giving Back
        </p>
        <TextButton to="/profile" classes={["mb-8", "mt-6"]}>
          Me, On a More Personal Note
        </TextButton>
        <section className="flex flex-col items-center">
          <div className="flex flex-wrap mb-[16px] mt-4">
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:node-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:react-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="cib:mongodb"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="cib:graphql"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="simple-icons:apollographql"
              width="40"
            />
          </div>
          <div className="flex flex-wrap mb-[16px]">
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:gatsby-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:javascript-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="file-icons:tailwind"
              width="40"
            />
            {/* <Icon
              className="text-brightAccent flex-1 pb-1.5"
              icon="akar-icons:html-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5"
              icon="akar-icons:css-fill"
              width="40"
            /> */}
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:figma-fill"
              width="40"
            />
          </div>
        </section>
      </section>
      <section className="flex-1 flex justify-center">
        <div
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-easing="ease-out"
          className="w-[calc(100%-36px)] lg:w-[80%] h-[64%] max-w-[600px] max-h-[600px] mt-16 rounded-xl relative z-0
        after:content-[''] after:absolute after:bg-darkAccent/10 after:h-full after:w-full after:rounded-xl after:left-[40px] after:top-[40px] after:z-[-1]"
        >
          <StaticImage
            src="./../../images/aboutImg.webp"
            height={474}
            quality={71}
            placeholder={"blurred"}
            formats={["auto", "webp", "avif"]}
            alt="personal image of me with my kid"
            style={{ zIndex: 1 }}
            className={`aboutImage h-full w-full rounded-xl border-[#E8E9F1] border-4`}
          />
        </div>
      </section>
    </MainSectionContainer>
  )
}

export default About
