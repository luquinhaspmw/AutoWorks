import React from 'react'
import NavBar from './NavBar/Index'
import HeroSection from './HeroSection/Index'

//COMPONENTS

const Index = () => {
  return (
    <div className={`h-80 md:h-[670px] relative`}>
        <div className="md:container md:mx-auto absolute top-0 bottom-0 left-0 right-0">
            <NavBar/>
            <HeroSection/>
        </div>
    </div>
  )
}

export default Index
