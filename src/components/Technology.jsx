import React from 'react'
import { FaGithub, FaHtml5, FaJava } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { RiBootstrapLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiSpringboot } from 'react-icons/si'

export const Technology = () => {
  return (
    <div id='technology' className='hidden max-md:block mt-[200px] sm:mt-[250px] mb-14'>
    <h1 className="text-center text-4xl my-10 mb-16 bg-gradient-to-r from-violet-800 to-cyan-600 bg-clip-text text-transparent tracking-wide">Technology</h1>
    <div className='flex flex-row flex-wrap  justify-evenly items-center gap-4 px-10'>
                    <RiReactjsLine className='mobile-img text-cyan-600 animate-bounce'/>
                    <IoLogoJavascript className='mobile-img text-yellow-500 animate-bounce'/>
                    <FaHtml5 className='mobile-img text-red-800 animate-bounce'/>
                    <RiBootstrapLine className='mobile-img text-violet-900 animate-bounce'/>
                    <IoLogoCss3 className='mobile-img text-blue-500 animate-bounce'/>
                    <RiTailwindCssLine className='mobile-img  text-blue-500 animate-bounce'/>
                    <FaJava className='mobile-img text-white animate-bounce'/>
                    <SiSpringboot className='mobile-img  text-green-800 animate-bounce'/>
                    <FaGithub className='mobile-img text-white animate-bounce'/>
                    <GrMysql className='mobile-img text-blue-600 animate-bounce'/>
    </div>
    </div>
  )
}
