import React, { useEffect, useState } from 'react'
import maining from '../../assets/mainIconsdark.png'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import cv from '../../assets/2024_BSC(CS)_FULLSTACK_THISONROOBAN J.pdf'

export const HeroContent = () => {
  const emoj=['✌️','🖐️','🤟'];

  let randomNum;
  useEffect(()=>{
    const interval =setInterval(()=>{
      randomNum=Math.floor(Math.random() * emoj.length-1) + 1;
      setHi(emoj[randomNum])
    },1000)
    return ()=>{
      clearInterval(interval)
    };
  },[])


  const[hi,setHi]=useState(emoj[randomNum])

  return (
    <div className='px-3 sm:px-10 flex flex-row justify-between items-center z-[20] w-full gap-2'>

        <div className='flex flex-col justify-center gap-6 w-full h-full text-start  p-4 '>
            <h2 className='leading-10 tracking-wide text-[1.8rem] md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text'><span>Hi <span className='text-yellow-500'>{hi}</span>, I'm</span> <br/><span className="mt-4 block">Thison Rooban J</span></h2>
            <span className='text-md ml-2 text-violet-500'> Aspiring Java Full Stack Software Developer</span>
            <a href={cv} target='_blank' rel='noopener noreferrer' className='Welcome-box px-4 py-2 border border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px]'>Download Resume</a>
        </div>

        <div className='hidden w-full md:flex justify-center relative'>
            <img className='opacity-[0.3]' height={650} width={650} src={maining} alt="" />
            <RiReactjsLine className='main-img  text-cyan-600 top-[35px] left-[55px] lg:h-[45px] lg:w-[45px] lg:top-10 lg:left-[60px] xl:top-16 xl:left-[110px] xl:h-[80px] xl:w-[80px]'/> 
            <IoLogoJavascript className='main-img  text-yellow-500 top-[45px] left-[200px] lg:h-[45px] lg:w-[45px] lg:top-[60px] lg:left-[210px]  xl:top-[90px] xl:left-[330px] xl:h-[80px] xl:w-[80px]'/>
            <FaHtml5 className='main-img  text-red-800 top-[100px] left-[125px] lg:h-[45px] lg:w-[45px] lg:top-[120px] lg:left-[135px] xl:top-[180px]  xl:left-[220px] xl:h-[80px] xl:w-[80px]'/>
            <RiBootstrapLine className='main-img text-violet-900 top-[130px] left-[230px] lg:h-[45px] lg:w-[45px] lg:top-[160px] lg:left-[250px] xl:top-[260px] xl:left-[410px] xl:h-[80px] xl:w-[80px]'/>
            <IoLogoCss3 className='main-img text-blue-500 top-[150px] left-[65px] lg:h-[45px] lg:w-[45px] lg:top-[200px] lg:left-[50px] xl:top-[300px] xl:left-[90px] xl:h-[80px] xl:w-[80px]'/>
            <RiTailwindCssLine className='main-img  text-blue-500 top-[185px] left-[145px] lg:h-[45px] lg:w-[45px] lg:top-[230px] lg:left-[150px] xl:top-[360px] xl:left-[275px] xl:h-[80px] xl:w-[80px]'/>
            <FaJava className='main-img  text-white top-[210px] left-[240px] lg:h-[45px] lg:w-[45px] lg:top-[250px] lg:left-[260px] xl:top-[400px] xl:left-[450px] xl:h-[80px] xl:w-[80px]'/>
            <SiSpringboot className='main-img  text-green-800 top-[235px] left-[82px] lg:h-[45px] lg:w-[45px] lg:top-[305px] lg:left-[62px] xl:top-[470px] xl:left-[125px] xl:h-[80px] xl:w-[80px]'/>
            <FaGithub className='main-img  text-white top-[260px] left-[170px] lg:h-[45px] lg:w-[45px] lg:top-[330px] lg:left-[170px] xl:top-[535px] xl:left-[305px] xl:h-[80px] xl:w-[80px]'/>
            <GrMysql className='main-img  text-blue-600 top-[60px] left-[300px] lg:h-[45px] lg:w-[45px] lg:top-[90px] lg:left-[330px] xl:top-[140px] xl:left-[545px] xl:h-[80px] xl:w-[80px]'/>
        </div>
    </div>
  )
}
