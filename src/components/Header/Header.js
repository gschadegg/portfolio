import React, { useEffect, useState, useCallback } from "react"
import { Link } from "gatsby"

import NamePlate from "./NamePlate/NamePlate";
import MainNav from './MainNav'
import MobileNav from "./MobileNav";
import MaskedLogo from "../MaskedLogo/MaskedLogo";
import { Icon } from '@iconify/react';


const Header = ({standardHead=true, classes}) => {
    const [showMobileNav, setShowMobileNav] = useState(false)

    const mobileNavClickHandler = useCallback(() => {
        setShowMobileNav(prevState => !prevState)
    },[])

    const closeMobileNav = useCallback(() => {
        setShowMobileNav(false)
    },[])

    const inViewPort = useCallback((elem) => {
        let distance = elem.getBoundingClientRect();
            return (
              distance.bottom >= 0 &&
              distance.left >= 0 &&
              distance.top <= (window.innerHeight - 200 || document.documentElement.clientHeight) &&
              distance.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
    },[])

    const findMainSections = useCallback(() => {
        let foundSections = document.querySelectorAll('.mainContent');
        let currentSection
        foundSections?.forEach(element => {
            let valReturned = inViewPort(element)
            if (valReturned) {
              document.querySelectorAll('.activeNav')?.forEach((el) => el.classList.remove('activeNav'))
              element.classList.add("activeNav");
              document.querySelectorAll(`[data-navlocation=${element.id}]`)?.forEach((el) => el.classList.add('activeNav'))
              currentSection = element.id
            }
        });
        if(currentSection === 'home'){
            document.getElementById('leftHeader')?.classList.remove('show')
          }else{
            document.getElementById('leftHeader')?.classList.add('show')
          }
    },[inViewPort])

    // If using standard header,track scrolling to mark nav
    useEffect(() => {
        if(standardHead){
            findMainSections()
            document.querySelector('main').addEventListener('scroll', findMainSections)
        }
        
        return () => {
            if(standardHead){
                document.querySelector('main').removeEventListener('scroll', findMainSections)
            }
        }
    }, [findMainSections, standardHead])
console.log('standardHead', standardHead)
   return (  
        <header className={`container mx-auto px-6 mt-7 mb-7 flex items-center justify-between ${classes ? classes.join(' ') : ''}`} >
            <section id='leftHeader' className={`flex items-center justify-start`}>
                <Link id={ standardHead ? 'standardHeadLogo' : 'altHeadLogo'} className={`flex hover:opacity-80 group ${!standardHead && 'scale-50'}`} to={'/'} state={{ hash: 'home' }}>
                    { !standardHead ? 
                        <Icon className='backArrow text-brightAccent transition-all absolute left-[-40px] top-[50%] translate-y-[-57%] group-hover:left-[-48px]' icon="bytesize:arrow-left" width='36'/>
                        : null}
                    <MaskedLogo /></Link>
                { standardHead ?
                    <div id='logoDivider' className='font-normal text-2xl text-brightAccent/60'>/</div> : null }
                {standardHead ?
                    <NamePlate className='namePlate flex items-center justify-start'/> : null }                
            </section>
            <MainNav mobileNavClickHandler={mobileNavClickHandler} />
            <MobileNav showMobileNav={showMobileNav} mobileNavClickHandler={mobileNavClickHandler} closeMobileNav={closeMobileNav} />
        </header>
    )
}

export default Header
