// REACT HOOKS
import { useContext, useEffect, useState } from 'react'

// STYLES
import './App.css'

// COMPONENTS
import Header from './components/Header/Index'
import { CarouselBrands } from './components/CarouselBrands/Index'
import Services from './components/Services/Index'
import FloatingButton from './components/FloatingButton'
import Gallery from './components/Gallery/Index'
import Testimonial from './components/Testimonial/Index'
import { Divider } from './components/Divider/Index'
import { Footer } from './components/Footer/Index'

// SCRIPT FLOWBITE
import {initFlowbite} from 'flowbite'

// CONTEXTS
import { ThemeContext } from './context/ThemeContext'



function App() {
  // initFlowbite
  useEffect(()=>{
    initFlowbite()
  },[])

  // theme tailwind Context
  const {theme,toggleTheme} = useContext(ThemeContext)
  
  return (
    
    // FOR CONTEXT
    <div className={`${(theme)}`}>
        {/* CONTAINER */}
        <div className={`dark:bg-black w-screen`}>
          <FloatingButton/>
          <Header/>
          <CarouselBrands/>
          <Services/>
          <Gallery/>
          <Testimonial/>
          <Divider/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
