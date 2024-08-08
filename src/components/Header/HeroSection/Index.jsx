import React from 'react'
import CTACard from './CTACard/Index'
import HeroSectionText from './HeroSectionText/Index'
import { PlayerVideoWork } from './PlayerVideoWork/Index'

const HeroSection = () => {
  return (
    <div className="max-w-screen h-4/6 md:mt-20 relative">
        <div className="container px-10 h-5/6 relative flex justify-around">
            <div className="md:basis-3/6 hidden md:block">
                <HeroSectionText firstText={'AutoWorks '} secondText={'- Dirija com confiança'} paragraph={'Nossos técnicos experientes e certificados são dedicados a fornecer-lhe reparos da mais alta qualidade, para que você possa se sentir seguro e protegido na estrada.'}/>
                <PlayerVideoWork text={'Conheça os bastidores'}/>
            </div>
            <div className="md:basis-3/6">
                <CTACard/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection