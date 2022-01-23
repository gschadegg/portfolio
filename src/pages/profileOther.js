import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextButton from "../components/Buttons/TextButton";
import { Icon } from '@iconify/react';


const ProfilePage = () => (
  <Layout mainLayout={false}>
    <Seo title="Profile" />
    <section className='hidden lg:flex' style={{width:`100px`}}></section>
    <section className={`flex flex-1 flex-col lg:flex-row antialiased`}>
        <div className={`flex flex-1 relative z-0 min-h-[400px] overflow-hidden removeOverflowLG before:absolute 
          before:transition-width
          before:inset-0 sm:before:inset-0 lg:before:inset-0 lg:before:top-[-156px] 
          before:bg-brightAccent/20 before:z-[-1] 
          sm:before:rounded-xl lg:before:rounded-none	
          before:w-full before:min-h-[400px] sm:before:w-full lg:before:w-auto lg:before:min-h-screen lg:max-w-[400px] xl:max-w-[600px] largePortrait
          lg:fixed lg:w-full`}>
            <h1
              className='bg-overlay/70 text-slate-50 text-6xl leading=[5rem] mb-6 ml-6 self-end lg:hidden lg:invisible'>
                <span className='font-bold leading=[5rem]'>Hey I'm</span>
                <br/>Gretchen,
            </h1>
        </div>
        <div className={`hidden lg:flex flex-1 relative z-0 min-h-[400px] overflow-hidden removeOverflowLG before:absolute 
          before:transition-width
          before:inset-0 sm:before:inset-0 lg:before:inset-0 lg:before:top-[-156px] 
          sm:before:rounded-xl lg:before:rounded-none	
          before:w-full before:min-h-[400px] sm:before:w-full lg:before:w-auto lg:before:min-h-screen lg:max-w-[600px]`}></div>
        <div className={`flex flex-1 mx-auto pt-8 px-8 flex-col lg:max-w-[526px] lg:p-0 lg:pl-8`}>
          <h1
            className='invisible hidden text-brightAccent text-5xl leading=[5rem] mb-8 lg:block lg:visible'>
                <span className='font-bold'>Hey I'm </span>Gretchen,
          </h1>
          <p className='basicText'>I’ve spent the last few years as a nomadic developer, travelling the United States with my family exploring the outdoors. My focus during this time has been on creating a heathier work / life balance and developing better tactics on how I spend my time. Life is short, so do what you love!</p>
          <h2 className='font-semibold text-center md:text-left text-darkText text-2xl mt-8'>Outside of Coding I’m into</h2>
          <section className='flex justify-center md:justify-start my-4 flex-wrap'>
            <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
              <Icon className='text-brightAccent flex-1 pb-1.5' icon="akar-icons:plant" width='32'/>
              <span>Plants</span>
            </div>
            <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
              <Icon className='text-brightAccent flex-1 pb-1.5' icon="akar-icons:book" width='32'/>
              <span>Reading</span>
            </div>
            <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
              <Icon className='text-brightAccent flex-1 pb-1.5' icon="la:hiking" width='40'/>
              <span>Hiking</span>
            </div>
            <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
              <Icon className='text-brightAccent flex-1 pb-1.5' icon="fluent:music-note-2-24-regular" width='36'/>
              <span>Music</span>
            </div>
            <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
              <Icon className='text-brightAccent flex-1 pb-1.5' icon="icons8:cat-footprint" width='40'/>
              <span>My Pets</span>
            </div>
          </section>
          <p className='basicText'>I’m always open to connecting, discussing a project, or geeking out over your favorite hikes.</p>
          <TextButton to='/' hash='contact' classes={['mb-6']}>
            Drop me a message
          </TextButton>
          <section className='flex justify-stretch text-left mt-4 mb-9
          relative flex-col lg:flex-row lg:w-[calc(100%+277px)] lg:left-[-280px] transition-width'>
              <button className='m-1 bg-brightAccent/80 rounded-xl flex flex-col text-white justify-center text-left p-6 min-w-[204] lg:h-[110%] lg:self-end'>
                <Icon className='text-white' icon="fluent:box-20-regular" width='48'/>
                <div className='text-sm justify-start text-white/80 pb-6 pt-3'>
                  <span className='font-bold text-xl text-white'>Current Project</span><br/>
                  Invoice Generator <br/> 
                  [ GraphQL &amp; React ]
                </div>
                <p className='text-normal'>Check out the project I’ve been working on!</p>
              </button>
            <div className='flex flex-col lg:flex-row lg:w-full'>
              <button className='m-1 flex-1 bg-brightAccent/10 rounded-xl flex flex-col text-brightAccent justify-center text-left p-6 min-w-[204]'>
                <Icon className='text-brightAccent pb-2' icon="bx:bx-map-pin" width='48'/>
                <span className='pb-4 text-lg font-bold'>Travel Map</span>
                <p className='text-normal text-darkText'>I’m nomadic, checkout my route from the past few years!</p>
              </button>
              <div className='flex flex-col flex-1'>
                <button className='m-1 bg-brightAccent/10 rounded-xl flex flex-col font-bold text-brightAccent justify-center text-left p-6 min-w-[204]'>
                  <Icon className='text-brightAccent pb-2' icon="tabler:playlist" width='48'/>
                  <span className='text-lg'>My Jam List</span>
                </button>
                <a target="_blank" rel="noreferrer noopener" href='https://www.goodreads.com/review/list/59988573-gretchen-schadegg?shelf=favorite' className='m-1 bg-brightAccent/10 rounded-xl flex flex-col font-bold text-brightAccent justify-center text-left p-6 min-w-[204]'>
                  <Icon className='text-brightAccent pb-2' icon="ph:books" width='48'/>
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
