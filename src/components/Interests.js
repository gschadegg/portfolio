import React from "react"
import { Icon } from '@iconify/react';
import InterestBlock from "./InterestBlock";

const Interests = () => {
  return (
    <section className='flex justify-center md:justify-start my-4 flex-wrap'>
        <InterestBlock>
            <Icon className='text-brightAccent flex-1 pb-1.5' icon="akar-icons:plant" width='32'/>
            <span>Plants</span>
        </InterestBlock>
        <InterestBlock>
            <Icon className='text-brightAccent flex-1 pb-1.5' icon="akar-icons:book" width='32'/>
            <span>Reading</span>
        </InterestBlock>
        <InterestBlock>
            <Icon className='text-brightAccent flex-1 pb-1.5' icon="la:hiking" width='40'/>
            <span>Hiking</span>
        </InterestBlock>
        <InterestBlock>
            <Icon className='text-brightAccent flex-1 pb-1.5' icon="fluent:music-note-2-24-regular" width='36'/>
            <span>Music</span>
        </InterestBlock>
        <InterestBlock>
            <Icon className='text-brightAccent flex-1 pb-1.5' icon="icons8:cat-footprint" width='40'/>
            <span>My Pets</span>
        </InterestBlock>
    </section>
  )
}

export default Interests
