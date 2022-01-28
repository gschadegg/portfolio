import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import MaskedLogo from "./MaskedLogo/MaskedLogo"
import { Icon } from '@iconify/react';

import "./layout.css"

const Layout = ({ children, mainLayout=true }) => {
  // siteTitle={data.site.siteMetadata?.title || `Title`}
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     } 
  //   }
  // `)
  
  return (
    <>
      {mainLayout ? 
        <div className='flex flex-col h-screen'>
          <Header />
          <main className='flex-1 overflow-y-auto'>
            {children}
          </main>
          {/* © {new Date().getFullYear()} */}
        </div> :
        <div className='flex flex-col h-screen lg:flex-row lg:container lg:px-6 lg:mx-auto'>
          <section className='mt-7 mb-7 hidden lg:flex lg:w-[100px] '>
            <Link id={''} className={`flex fixed hover:opacity-80 focus:opacity-80 scale-50 group`} to={'/'} state={{ hash: 'home' }}>
              <Icon className='text-brightAccent transition-all absolute left-[-40px] top-[50%] translate-y-[-57%] group-hover:left-[-48px]' icon="bytesize:arrow-left" width='36'/>
              <MaskedLogo /></Link></section>
          <Header standardHead={false} classes={['lg:hidden']}/>
          <main className='container flex-1 flex flex-col mx-auto md:pr-6 lg:flex-row overflow-y-auto removeOverflowLG'>
            {children}
          </main>
          {/* © {new Date().getFullYear()} */}
        </div>
      }
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainLayout: PropTypes.bool,
  // mainLayout: PropTypes.node.isRequired,
}

export default Layout
