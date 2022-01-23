import React from "react"
import Layout from "../components/layout"
import MainNav from "../components/Header/MainNav";
import Interests from "../components/Interests";
import Seo from "../components/seo"
import TextButton from "../components/Buttons/TextButton";
import { Icon } from '@iconify/react';



const ProfilePage = () => (
  <Layout mainLayout={false}>
    <Seo title="Profile" />

    {/* Profile Image */}
    <section className={`transition-width flex flex-1 flex-col 
    justify-end
    bg-brightAccent/20 sm:rounded-xl w-full min-h-[400px] sm:w-full lg:flex-row lg:rounded-none lg:min-h-screen
    lg:fixed lg:w-full lg:max-w-[400px] xl:max-w-[550px] 2xl:max-w-[600px] largePortrait
    `}>
      <h1
        className='bg-overlay/70 text-slate-50 text-6xl leading=[5rem] mb-6 ml-6 self-start lg:hidden lg:invisible'>
          <span className='font-bold leading=[5rem]'>Hey I'm</span>
          <br/>Gretchen,
      </h1>
    </section>

    {/* Spacer */}
    <section className='flex-1 flex-col 
    sm:rounded-xl w-full min-h-[400px] sm:w-full lg:flex-row lg:rounded-none lg:min-h-screen
     lg:w-full lg:max-w-[400px] xl:max-w-[600px] hidden lg:flex'></section>

    {/* Content */}
    <section className={`flex flex-1 flex-col antialiased relative`}>
        <div className='hidden min-h-[110px] lg:pb-[20px] lg:flex justify-end lg:sticky lg:top-0 lg:right-0 bg-[#f3f6f7]'>
          <MainNav />
        </div>
        <div className={`flex flex-1 mx-auto pt-8 px-8 flex-col lg:max-w-[526px] lg:p-0 lg:pl-8 lg:mt-[80px]`}>
          <h1
            className='invisible hidden text-brightAccent text-5xl leading=[5rem] mb-8 lg:block lg:visible'>
                <span className='font-bold'>Hey I'm </span>Gretchen,
          </h1>
          <p className='basicText'>I’ve spent the last few years as a nomadic developer, travelling the United States with my family exploring the outdoors. My focus during this time has been on creating a heathier work / life balance and developing better tactics on how I spend my time. Life is short, so do what you love!</p>
          <h2 className='font-semibold text-center md:text-left text-darkText text-2xl mt-8'>Outside of Coding I’m into</h2>
          <Interests />
          <p className='basicText'>I’m always open to connecting, discussing a project, or geeking out over your favorite hikes.</p>
          <TextButton to='/' hash='contact' classes={['mb-8','mt-3']}>
            Drop me a message
          </TextButton>
          {/* hover:bg-brightAccent focus:bg-brightAccount */}
          <section className='flex justify-stretch text-left mt-4 mb-9
            relative flex-col lg:flex-row lg:w-[calc(100%+277px)] lg:left-[-286px] transition-width'>
              <a target="_blank" rel="noreferrer noopener" href='https://www.google.com' 
                className='m-1 bg-brightAccent/80 rounded-xl flex flex-col text-white justify-center text-left p-6 min-w-[204] lg:h-[110%] lg:self-end gradientBGHover'>
                <Icon className='text-white' icon="fluent:box-20-regular" width='48'/>
                <div className='text-sm justify-start text-white/80 pb-6 pt-3'>
                  <span className='font-bold text-xl text-white'>Current Project</span><br/>
                  Invoice Generator <br/> 
                  [ GraphQL &amp; React ]
                </div>
                <p className='text-base'>Check out the project I’ve been working on!</p>
              </a>
            <div className='flex flex-col lg:flex-row lg:w-full'>
              <button className='m-1 flex-1 bg-brightAccent/10 rounded-xl flex flex-col text-brightAccent justify-center text-left p-6 min-w-[204
               hover:text-white focus:text-white transition-all group gradientBGHover'>
                <Icon className='text-brightAccent pb-2 transition-all group-hover:text-white group-focus:text-white' icon="bx:bx-map-pin" width='48'/>
                <span className='pb-4 text-lg font-bold'>Travel Map</span>
                <p className='text-base text-darkText transition-all group-hover:text-white group-focus:text-white'>I’m nomadic, checkout my route from the past few years!</p>
              </button>
              <div className='flex flex-col flex-1'>
                <a target="_blank" rel="noreferrer noopener" href='https://www.google.com' 
                className='m-1 bg-brightAccent/10 rounded-xl flex flex-col font-bold text-brightAccent justify-center text-left p-6 min-w-[204]
                group hover:text-white focus:text-white transition-all gradientBGHover'>
                  <Icon className='text-brightAccent pb-2 transition-all group-hover:text-white group-focus:text-white' icon="tabler:playlist" width='48'/>
                  <span className='text-lg'>My Jams List</span>
                </a>
                <a target="_blank" rel="noreferrer noopener" href='https://www.goodreads.com/review/list/59988573-gretchen-schadegg?shelf=favorite' 
                  className='m-1 bg-brightAccent/10 rounded-xl flex flex-col font-bold text-brightAccent justify-center text-left p-6 min-w-[204]
                  group hover:text-white focus:text-white transition-all gradientBGHover'>
                  <Icon className='text-brightAccent pb-2 transition-all group-hover:text-white group-focus:text-white' icon="ph:books" width='48'/>
                  <span className='text-lg'>My Bookshelf</span>
                </a>
              </div>
            </div>
          </section>
        </div>
    </section>
  </Layout>
)

export default ProfilePage
