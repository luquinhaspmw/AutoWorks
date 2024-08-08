import React from "react";
import Logo from "../Header/NavBar/Brand/Index";

export const Divider = () => {
  return (
    <span className="relative flex justify-center my-10">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-75"></div>

      <span className="relative z-10 dark:bg-black bg-white px-6 text-2xl font-bold"><Logo color={"text-black dark:text-white"}/></span>
    </span>
  );
};