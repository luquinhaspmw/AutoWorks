import React from 'react'

const HeroSectionText = ({firstText,secondText,paragraph}) => {
  return (
    <div className='md:w-full'>
        <h1 className='inline-block text-2xl md:text-5xl font-semibold text-black dark:text-white leading-tight'>
        <span className='text-2xl md:text-5xl font-semibold text-red-500'>{firstText}</span>
        {secondText}
        </h1>            
        <p className='text-gray-600 dark:text-gray-200 text-sm md:text-lg dark:font-semibold mt-1 md:mt-6'>{paragraph}</p>
    </div>
  )
}

export default HeroSectionText