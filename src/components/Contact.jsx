import React from 'react'

export const Contact = () => {
  return (
    <footer id='contact' className='mt-10 flex justify-evenly border-t-[.5px] border-violet-800 gap-10 flex-wrap pt-3'>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">About Me</h2>
              <p className="text-sm text-violet-300">
                I'm a Java Full-Stack Developer passionate about creating 
                innovative and scalable web applications.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Quick Links</h2>
              <ul className='text-violet-300'>
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-semibold text-violet-600 mb-2">Contact</h2>
              <div className='text-violet-300'>
              <p>Email: <a href="mailto:your-email@example.com" className="hover:text-blue-400">thisonrooban.j@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/roobanj/" target="_blank" className="hover:text-blue-400">LinkedIn Profile</a></p>
              <p>GitHub: <a href="https://github.com/rooban295?tab=repositories" target="_blank" className="hover:text-blue-400">GitHub Profile</a></p>
              </div>
            </div>
  
          </div>
  
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Thison Rooban | All Rights Reserved.
          </div>
        </div>
      </footer>
  )
}
