import React from 'react'
import blackhole from '../../assets/space/black.mp4'
import { HeroContent } from './HeroContent'
export const Hero = () => {
  return (
    <div id='home' className='relative flex flex-col w-full h-[70%] mt-48 justify-between'>
        <video autoPlay loop muted  className='absolute top-[-550px]  left-0 z-[1] rotate-180 h-[840px] w-full object-cover' >
          <source  src={blackhole} type='video/mp4'/>
          hello
        </video>

        <div className='z-20 relative top-[80px] md:top-[-30px] lg:top-[-95px]'>
        <HeroContent/>
        </div>
    </div>
  )
}
