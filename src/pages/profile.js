import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useScreenSize } from "./../hooks/hooks"
import Layout from "../components/layout"
import MainNav from "../components/Header/MainNav"
import Interests from "../components/Interests/Interests"
import Seo from "../components/seo"
import TextButton from "../components/Buttons/TextButton"
import BoxButton from "../components/Buttons/BoxButton"
import Modal from "../components/Containers/Modal/Modal"
import ProjectModal from "../components/Projects/Modals/ProjectModal"
import TravelMap from "../components/TravelMap/TravelMap"

const ProfilePage = () => {
  const isDesktop = useScreenSize()
  const modalRef = useRef()
  const travelMap = useRef()

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
      ) {
        nodes {
          frontmatter {
            title
            type
            focus
            mainDisplay {
              childImageSharp {
                gatsbyImageData
              }
            }
            mainDisplayVideoMP4 {
              publicURL
            }
            mainDisplayVideoWEBM {
              publicURL
            }
            mainDisplay_alt
          }
          id
          body
        }
      }
    }
  `)
  const latestProject = data.allMdx.nodes[0]

  return (
    <>
      <Layout mainLayout={false}>
        <Seo title="Profile" />

        {/* Profile Image */}
        <section
          className={`transition-width flex flex-1 flex-col 
    justify-end bg-brightAccent/20 sm:rounded-xl w-full min-h-[400px] sm:w-full lg:flex-row lg:rounded-none lg:min-h-screen
    lg:fixed lg:w-full lg:max-w-[400px] xl:max-w-[550px] 2xl:max-w-[600px] largePortrait
    `}
        >
          <h1
            data-sal="fade"
            data-sal-duration="400"
            data-sal-easing="ease-out"
            className="bg-overlay/70 text-slate-50 text-6xl leading=[5rem] mb-6 ml-6 self-start lg:hidden lg:invisible"
          >
            <span className="font-bold leading=[5rem]">Hey I'm</span>
            <br />
            Gretchen,
          </h1>
        </section>

        {/* Spacer */}
        <section
          className="flex-1 flex-col 
    sm:rounded-xl w-full min-h-[400px] sm:w-full lg:min-w-[400px] lg:flex-row lg:rounded-none lg:min-h-screen
     lg:w-full lg:max-w-[400px] xl:max-w-[600px] hidden lg:flex"
        ></section>

        {/* Content */}
        <section className={`flex flex-1 flex-col antialiased relative`}>
          <div className="hidden min-h-[110px] lg:pb-[20px] lg:flex justify-end lg:sticky lg:top-0 lg:right-0 bg-[#f3f6f7]">
            <MainNav />
          </div>
          <div
            data-sal={isDesktop ? "slide-right" : null}
            data-sal-duration="400"
            data-sal-easing="ease-out"
            className={`flex flex-1 mx-auto pt-8 px-8 flex-col lg:max-w-[526px] lg:p-0 lg:pl-8 lg:mt-[80px]`}
          >
            <h1 className="invisible hidden text-brightAccent text-5xl leading=[5rem] mb-8 lg:block lg:visible">
              <span className="font-bold">Hey I'm </span>Gretchen,
            </h1>
            <p className="basicText">
              I've spent the last few years as a nomadic developer, travelling
              the United States with my family exploring the outdoors. My focus
              during this time has been on creating a heathier work / life
              balance and developing better tactics on how I spend my time. Life
              is short, so do what you love!
            </p>
            <h2 className="font-semibold text-center md:text-left text-darkText text-2xl mt-8">
              Outside of Coding I’m into
            </h2>
            <Interests />
            <p className="basicText">
              I'm always open to connecting, discussing exciting projects, or
              simply geeking out over our favorite hikes
            </p>
            <TextButton
              to="mailto:Strifellc.MD@gmail.com"
              internalLink={false}
              classes={["mb-9", "mt-4"]}
            >
              Drop me a message
            </TextButton>
            <section
              className="flex justify-stretch text-left mt-4 mb-9
            relative flex-col lg:flex-row lg:w-[calc(100%+277px)] lg:left-[-286px] transition-width"
            >
              <BoxButton
                tagType="button"
                iconName={"fluent:box-20-regular"}
                accentBox={true}
                onClick={() => modalRef.current.openModal()}
              >
                <div className="text-sm justify-start text-white/80 pb-6 pt-3">
                  <span className="font-bold text-xl text-white">
                    Latest Project
                  </span>
                  <br /> {latestProject.frontmatter.title}
                  <br />[ {latestProject.frontmatter.focus} ]
                </div>
                <p className="text-base">
                  Check out the project I've been working on!
                </p>
              </BoxButton>
              <div className="flex flex-col lg:flex-row lg:w-full">
                <BoxButton
                  tagType="button"
                  iconName={"bx:bx-map-pin"}
                  size={"tall"}
                  onClick={() => travelMap.current.openModal()}
                >
                  <span className="pb-4 text-lg font-bold">Travel Map</span>
                  <p className="text-base text-darkText transition-all group-hover:text-white group-focus:text-white">
                    I’m nomadic, checkout my route from the past few years!
                  </p>
                </BoxButton>
                <div className="flex flex-col flex-1">
                  <BoxButton
                    tagType="a"
                    href="https://open.spotify.com/playlist/6Hs6Zk88p8WzbrB80mbwXz?si=0e9144b2893c4a1e"
                    iconName={"tabler:playlist"}
                  >
                    <span className="text-lg">My Jams List</span>
                  </BoxButton>
                  <BoxButton
                    tagType="a"
                    href="https://www.goodreads.com/review/list/59988573-gretchen-schadegg?shelf=favorite"
                    iconName={"ph:books"}
                  >
                    <span className="text-lg">My Bookshelf</span>
                  </BoxButton>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Layout>
      <Modal ref={travelMap}>
        <TravelMap />
      </Modal>
      <ProjectModal ref={modalRef} data={latestProject} />
    </>
  )
}

export default ProfilePage
