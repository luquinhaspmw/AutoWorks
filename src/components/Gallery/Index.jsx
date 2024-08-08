import React from 'react'
import Mec2 from '../../assets/images/mec2.jpg'
import Mec3 from '../../assets/images/mec3.jpg'
import Mec4 from '../../assets/images/mec4.jpg'
import Mec5 from '../../assets/images/mec5.jpg'
import Mec6 from '../../assets/images/mec6.jpg'

const       Gallery = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 relative" id='gallery'>
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-red-800 lg:text-3xl dark:text-white">Galeria</h2>

                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    Conheça um pouco mais sobre nosso dia a dia.
                </p>
            </div>

            <a href="#"
                className="flex gap-2 rounded-lg border bg-white dark:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-red-500 dark:text-gray-200 outline-none ring-indigo-300 transition-all duration-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                Ver mais no Instagram 
                <span className='max-w-max inline-block '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </a>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-500 shadow-lg col-span-1 md:row-span-2 md:h-full">
                <img src={Mec3} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Leandro</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={Mec2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Rodrigo</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 col-span-1 row-span-2">
                <img src={Mec5} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Suspensão</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={Mec6} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Reparos de freio</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-3 col-span-2 md:h-80">
                <img src={Mec4} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Diagnóstico</span>
            </a>
        </div>
    </div>
</div>
  )
}

export default Gallery