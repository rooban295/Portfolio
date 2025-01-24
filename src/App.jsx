import { Navbar } from './components/Navbar'
import {Hero} from './components/Hero/Hero'
import{Skills} from './components/Skills'
import { Contact } from './components/Contact'
import { Technology } from './components/Technology'
import { Project } from './components/Project'
function App() {

  return (
    // <div className='overflow-y-scroll overflow-x-hidden scrollbar-hide h-screen'>
    <>
    <Navbar/>
    <Hero/>
    <Technology/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
    // </div>

  )
}

export default App
