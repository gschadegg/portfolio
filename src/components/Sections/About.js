import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Icon } from "@iconify/react"

import MainSectionContainer from "../Containers/MainSectionContainer"
import TextButton from "../Buttons/TextButton"

const About = () => {
  return (
    <MainSectionContainer id="about" classes={["mt-8"]}>
      <section
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        className="flex flex-col flex-1 lg:max-w-[500px]"
      >
        <h2 className="sectionHead">
          About Me
          <div className="sectionHead_tag">
            I'm a <br className="sm:hidden"></br>Software Engineer,
          </div>
        </h2>
        <p className="basicText">
        with a passion for getting my hands dirty and bringing digital experiences to life. 
        With over 10 years of experience, I've had the pleasure of building a diverse range of projects, 
        focusing on SaaS cloud applications. I'm constantly eager to explore and experiment with 
        new technologies that capture my interest, which is one of the many reasons I love this ever-evolving field.
        </p>
        <p className="basicText">
        I'm always seeking meaningful opportunities that align with my passions and propel me forward. 
        I believe in the power of innovation and collaboration to create impactful solutions, 
        and I'm keen to contribute my expertise to projects that make a difference.
        </p>
        <p className="basicText">
          <em className="sectionSubhead">Tech Interests:</em> JavaScript, React, NextJS, TypeScript, Python, 
          Flask, C#, Nx, NodeJS, Express, Gatsby, Docker, SQL, MongoDB, RESTful APIs, GraphQL, Jest, 
          Playwright, Cypress, TailwindCSS, MUI, HTML, SCSS, CSS, Git, Figma
        </p>
        <p className="basicText">
          <em className="sectionSubhead">Passions:</em> the Outdoors, Mental
          Health, Water Colors, Empowering Women, &amp; Charitably Giving Back
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
              icon="cib:python"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="cib:mongodb"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:redux-fill"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="file-icons:nextjs"
              width="40"
            />
          </div>
          <div className="flex flex-wrap mb-[16px]">
            {/* <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:gatsby-fill"
              width="40"
            /> */}

            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="cib:graphql"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="file-icons:nx"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="file-icons:tailwind"
              width="40"
            />
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="simple-icons:docker"
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
        after:content-[''] after:absolute after:bg-darkAccent/10 after:h-full after:w-full after:rounded-xl after:left-[10px] after:top-[10px] md:after:left-[40px] md:after:top-[40px] after:z-[-1]"
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
