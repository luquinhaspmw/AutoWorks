import React from 'react'
import Brand from './Brand/Index'

const NavBar = () => {
  return (
    <>
    <nav class="border-gray-200">
      <div class="max-w-screen flex flex-wrap items-center justify-center mx-auto p-4">
      <Brand color={'text-black dark:text-white'}/>
      {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-red-800 focus:text-red-700 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button> */}
      {/* <div class="relative hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="z-20 absolute md:static w-full  mt-4 flex flex-col rounded-lg bg-gray-950/80 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:p-0 rtl:space-x-reverse">
          <li>
            <a href="#" class="md:font-semibold block rounded bg-red-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-red-600" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#about" class="md:font-semibold block rounded px-3 py-2 text-white hover:bg-red-700/25 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-800">About</a>
          </li>
          <li>
            <a href="#" class="md:font-semibold block rounded px-3 py-2 text-white hover:bg-red-700/25 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-800">Services</a>
          </li>
          <li>
            <a href="#" class="md:font-semibold block rounded px-3 py-2 text-white hover:bg-red-700/25 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-800">Pricing</a>
          </li>
          <li>
            <a href="#" class="md:font-semibold block rounded px-3 py-2 text-white hover:bg-red-700/25 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-800">Contact</a>
          </li>
        </ul>
      </div> */}
      </div>
    </nav>
    </>
  )
}

export default NavBar