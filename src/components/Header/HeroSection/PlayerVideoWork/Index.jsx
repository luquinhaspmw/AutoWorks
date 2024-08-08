import React from 'react'

export const PlayerVideoWork = ({text}) => {
  return (
    <div className="flex items-center absolute -bottom-10 sm:bottom-0 lg:bottom-3 z-10">
      <a href="#gallery" >
        <div className="cursor-pointer transition duration-700 ease-in-out border-2 border-red-800 text-red-800 hover:border-red-600 hover:text-red-600 w-10 h-10 rounded-full flex justify-center items-center">
            <svg className="ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
            </svg>
        </div>
      </a>
      <p className='ml-2 text-black dark:text-white font-semibold'>{text}</p>
    </div>
  )
}
