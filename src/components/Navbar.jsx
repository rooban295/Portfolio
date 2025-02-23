import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export const Navbar = () => {


  const [navScroll, setNavScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(window.scrollY <= 50);
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className={`w-full h-[65px] flex items-center justify-center py-2 fixed top-0 bg-[#03001417] z-50 px-15 ${navScroll?`nav-scroll`:""}`}>  
      <nav className="bg-transparent">
        <ul className=" flex items-center gap-7 sm:gap-14 md:gap-14 border border-slate-600 p-3 rounded-full backdrop-blur-md ">
          <li><Link to="home" smooth={true} duration={100} offset={-200}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={100} offset={-100}>Skills</Link></li>
          <li><Link to="project" smooth={true} duration={100} offset={-200}>Project</Link></li>
          <li><Link to="contact" smooth={true} duration={100} offset={-200}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
