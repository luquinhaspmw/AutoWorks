import React from 'react'

export const CarouselBrands = () => {
  return (
    <div className='mt-60 -mb-10 md:mt-0 md:-mb-16 w-11/12 lg:w-2/3 mx-auto h-40 ' id='teste'>
      <div className="group relative mt-10 flex h-5/6 space-x-16 overflow-hidden bg-transparent p-5 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-14 before:md:w-40 before:bg-gradient-to-r before:from-white before:dark:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-14 after:md:w-40 after:bg-gradient-to-l after:from-white after:dark:from-black after:to-transparent md:mx-5 md:rounded-xl">
        <div className="group-hover:paused flex animate-slide space-x-16">
          <img className="max-w-32 " src="https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/hyundai-logo-2011-640.png" alt="" />
          <img className="max-w-32 " src="https://www.carlogos.org/car-logos/jeep-logo-1993-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/logo/Bugatti-logo-2560x1440.png" alt="" />
        </div>
        <div className="group-hover:paused flex animate-slide space-x-16" aria-hidden="true">
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/hyundai-logo-2011-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/jeep-logo-1993-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/car-logos/jaguar-logo-2021-640.png" alt="" />
          <img className="max-w-32" src="https://www.carlogos.org/logo/Bugatti-logo-2560x1440.png" alt="" />
        </div>
      </div>
    </div>
  )
}
