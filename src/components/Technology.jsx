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
                    <RiReactjsLine className='mobile-img text-cyan-600 '/>
                    <IoLogoJavascript className='mobile-img text-yellow-500 '/>
                    <FaHtml5 className='mobile-img text-red-800 '/>
                    <RiBootstrapLine className='mobile-img text-violet-900 '/>
                    <IoLogoCss3 className='mobile-img text-blue-500 '/>
                    <RiTailwindCssLine className='mobile-img  text-blue-500 '/>
                    <FaJava className='mobile-img text-white '/>
                    <SiSpringboot className='mobile-img  text-green-800'/>
                    <FaGithub className='mobile-img text-white '/>
                    <GrMysql className='mobile-img text-blue-600 '/>
    </div>
    </div>
  )
}
