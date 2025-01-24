import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='mt-10 px-20 flex justify-evenly border-t-[.5px] border-violet-800 gap-10 flex-wrap pt-3'>
      <div className="">
        <h1 className='mb-5 text-xl'>Eduction</h1>
        <ul className='flex flex-col gap-4'>

        </ul>
      </div>

      <div className="">
        <h1 className='mb-5 text-xl'>socialmedia</h1>
        <ul className='flex flex-col gap-4'>
          <li><a href="www.linkedin.com/in/roobanj">Linked in</a></li>
          <li><a href="">Telegram</a></li>
          <li><a href="">Github</a></li>
        </ul>

      </div>

      <div>
        <h1 className='mb-5 text-xl'>Contact</h1>
        <ul className='flex flex-col gap-4'>
          <li><a href="">jrooban28@gmail.com</a></li>
          <li><a href="">jrooban28@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}
