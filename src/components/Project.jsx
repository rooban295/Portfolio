import React from 'react'
import ecom from '../assets/Screenshot (112).png'
import weather from '../assets/Screenshot (113).png'
import emp from '../assets/Screenshot (114).png'
export const Project = () => {
  return (
    <section id='project' className='mt-24 px-3'>

    <h1 className='text-center text-4xl tracking-wider text-gradient my-10'>Project</h1>

    <div className='flex flex-col md:flex-row gap-5'>

        <div className='flex flex-col items-center px-5 gap-5 rounded-lg p-5 skills-Welcome-box'>

            <div className='w-full'>
              <a href="https://ecommerce-rho-khaki.vercel.app/" target="_blank"><img src={ecom} alt="" className='rounded-lg '/></a>
            </div>

            <div className='flex-col gap-2 text-slate-200 '>
            <h1 className='text-xl font-bold'>Project Name: E-commerce website <span className='text-sm'>(FULLSTACK)</span></h1>
             <p className='text-justify'>Technologies: Java, Spring Boot,Spring security with jwt ReactJS, MySQL </p>
             <p className='text-justify'>Features: User authentication, Product search, shopping cart, and order tracking.</p>
            </div> 
        </div>


        <div className='flex flex-col px-5 gap-5  rounded-lg p-5 skills-Welcome-box text-slate-200'>
            <div className=''>
              <a href="https://employee-management-system-beta-dun.vercel.app/" target="_blank"><img src={weather} alt="" className='rounded-lg  w-full' /></a>
            </div>
            <div className=' flex-col gap-2'>
            <h1 className='text-xl font-bold'>Project Name: Employee Management System <span className='text-sm'>(CRUD)</span></h1>
            <p className='text-justify'>Technologies: ReactJS,Tailwind Css,Mock API </p>
            <p className='text-justify'>Features: View, add, update, and delete employee details </p>
            </div>
            
        </div>


        <div className='flex flex-col px-5 gap-5 rounded-lg p-5 skills-Welcome-box text-slate-200'>
            <div className=''>
              <a href="https://weather-app-iota-six-14.vercel.app/" target="_blank"><img src={emp} alt="" className='rounded-lg w-full' /></a>
            </div>

            <div className='flex-col gap-2'>
            <h1 className='text-xl font-bold'>Project Name: Weather-App <span className='text-sm'>(MOCK API)</span></h1>
            <p>Technologies:ReactJS,Tailwind Css,Mock API </p>
            <p>Features: Find the realtime weather</p>
            </div>  
        </div>
    </div>
    </section>
  )
}
