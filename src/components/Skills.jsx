import React from 'react'

export const Skills = () => {
  return (
    <div id='skills' className=''>
      <h1 className='text-center text-4xl tracking-wide  bg-gradient-to-r from-violet-800 to-cyan-600 bg-clip-text text-transparent'>Skills</h1>

      <div className='flex  gap-5 mt-10 justify-evenly flex-wrap px-10'>

        <div className='skills-Welcome-box border h-[210px] w-full md:w-[200px] p-[20px] border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px] rounded-lg pl-12'>
          <h1 className='text-xl tracking-wide mb-4 text-gradient'>Frontend</h1>
          <ul className='flex flex-col gap-3'>
            <li>HTML</li>
            <li>Tailwind Css</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>

        <div className='skills-Welcome-box border h-[210px] w-full md:w-[200px] p-[20px] border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px] rounded-lg  pl-12'>
          <h1 className='text-xl tracking-wide mb-4 text-gradient'>Backend</h1>
          <ul className='flex flex-col gap-3'>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Hibernate</li>
          </ul>
        </div>

        <div className='skills-Welcome-box border h-[210px] w-full md:w-[200px] p-[20px] border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px] rounded-lg  pl-12'>
          <h1 className='text-xl tracking-wide mb-4 text-gradient'>Database</h1> 
          <ul className='flex flex-col gap-3'>
            <li>MySQL</li>
          </ul>
        </div>

        <div className='skills-Welcome-box border h-[210px] w-full md:w-[200px] p-[20px] border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px] rounded-lg  pl-12'>
          <h1 className='text-xl tracking-wide mb-4 text-gradient'>Tools & Platforms</h1>
          <ul className='flex flex-col gap-3'>
            <li>Git</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className='skills-Welcome-box border h-[210px] w-full md:w-[200px] p-[20px] border-[#7042f88b] opacity-[0.9 text-[#b49bff] text-[15px] rounded-lg  pl-12'>
          <h1 className='text-xl tracking-wide mb-4 text-gradient'>Others</h1>
          <ul className='flex flex-col gap-3'>
            <li>REST APIs</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
