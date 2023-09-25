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
            I'm a <br className="sm:hidden"></br>Front-End Developer,
          </div>
        </h2>
        <p className="basicText">
          with a passion for getting my hands dirty and bringing digital
          experiences to life. With 8 years of experience under my belt, I've
          had the pleasure of building a wide range of projects, from business
          sites to interactive web apps. I'm always on the lookout for
          meaningful opportunities that align with my passions and drive me
          forward.
        </p>
        <p className="basicText">
          When it comes to my tech stack, I have a current preference for MERN
          and Jamstack. However, I'm constantly eager to explore and experiment
          with new technologies that pique my interest.
        </p>
        <p className="basicText">
          <em className="sectionSubhead">Tech Interests:</em> JavaScript, React,
          NextJS, Gatsby, Nx, Redux, NodeJS, Express, MongoDB, RESTful APIs,
          Jest, Playwright, Cypress, TailwindCSS, HTML, SCSS, CSS, Git, Figma
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
            <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:gatsby-fill"
              width="40"
            />

            {/* <Icon
              className="text-brightAccent flex-1 pb-1.5 mx-[16px]"
              icon="akar-icons:javascript-fill"
              width="40"
            /> */}
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
