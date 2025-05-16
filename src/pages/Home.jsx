import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import musicLogo from "../assets/rwanda.png";
import artistLogo from "../assets/walker.webp";
import usaArt from "../assets/usa.png";
import remaImg from "../assets/rema.png";
import ayraStar from "../assets/ayra.png";
import oloMide from "../assets/olomide.png";
import superOne from "../assets/super-1.png";
import worldOne from "../assets/world.png";

import soundLogo from "../assets/logo.png";
export default function Home() {

  return(
   <div className="main-page min-h-screen overflow-auto min-h-5xl max-h-4xl h-96">

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-3">
    <div className="flex flex-col sm:flex-col md:flex-row gap-4  rounded-xl bg-slate-900 max-w-3xl max-h-xl border 
    border-gray-800 transform hover:scale-105 duration-2000 ">
     <img src={superOne} alt="" srcset="" className="h-56 rounded-tl-xl rounded-bl-xl mask-radial-[100%_100%]
      mask-radial-from-75% mask-radial-at-top sm:mask-radial-[100%_100%]
      mask-radial-from-75% mask-radial-at-top md:mask-radial-[100%_100%]
      mask-radial-from-75% mask-radial-at-left" />
     <div className="p-4 flex flex-col  justify-center items-center">
        <h1 className="text-2xl py-2">Rwanda Top Hits</h1>
        <p className="text-gray-600">HipHop && RNB && Gospel </p>
        <p className="text-gray-500 font-semibold">Most loved artist songs 2025</p>
        <div>
            <button className="p-3 rounded-full bg-gray-800 border-2 cursor-pointer
             border-slate-700 transform hover:scale-115 duration-1000 my-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>       
        </div>
     </div>
    </div>
    <div className="flex flex-col sm:flex-col md:flex-row gap-4  rounded-xl bg-slate-900 max-w-3xl duration-2000
     max-h-xl border border-gray-800 transform hover:scale-105 hover:animate-pulse">
     <img src={worldOne} alt="" srcset="" className="h-56  mask-radial-[100%_100%] 
     mask-radial-from-75% mask-radial-at-top sm:mask-radial-[100%_100%]
      mask-radial-from-75% mask-radial-at-top md:mask-radial-[100%_100%]
      mask-radial-from-75% mask-radial-at-left" />
     <div className="p-4 flex flex-col  justify-center items-center">
        <h1 className="text-2xl py-2">World Top Hits</h1>
        <p className="text-gray-600">Entire world classic artist </p>
        <p className="text-gray-500 font-semibold">Most loved artist songs 2025</p>
        <div>
            <button className="p-3 rounded-full bg-gray-800 border-2 cursor-pointer
             border-slate-700 transform hover:scale-115 duration-1000 my-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>


            </button>
            
        </div>


     </div>

    </div>


</div>
<section>


<h1 className="text-2xl text-gray-200 font-extrabold mx-3 px-2 pt-5 ">Spotify Trends</h1>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 sm:p-3 lg:p-5 ">

    <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer justify-self-center ">
        <img src={musicLogo} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">gospel music</h1>
    <p className="text-slate-400 px-5">Rwanda Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    


    </div>

    
    <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={musicLogo} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize text-center px-3 ">Bruce Melody Hits</h1>
    <p className="text-slate-400 text-center">Rwanda Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    


    </div>

    
    <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={usaArt} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">Top USA </h1>
    <p className="text-slate-400 text-center">American Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    


    </div>

  
        <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={ayraStar} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">Ayra Star</h1>
    <p className="text-slate-400 text-center">Nigerian Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    </div>

      <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={remaImg} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">Rema DND</h1>
    <p className="text-slate-400 text-center ">Nigerian Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    </div>

      <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={oloMide} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">olomide</h1>
    <p className="text-slate-400 text-center ">DRC Trends</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    </div>

    
      <div className="music-box max-w-sm rounded-lg max-h-sm flex flex-col group overflow-hidden relative cursor-pointer">
        <img src={superOne} alt="" className="h-full w-full rounded-xl mask-radial-[100%_100%] 
        mask-radial-from-75% mask-radial-at-top" />

        <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20
         text-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000">
    <h1 className="font-semibold text-gray-300 text-lg capitalize px-5 ">Wizkid</h1>
    <p className="text-slate-400 text-center ">African Hitz</p>

    <button className="p-5 rounded-full border-2 border-pink-600 cursor-pointer 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 inter 
    shadow-lg justify-center my-5 transform hover:scale-105 duration-1000 hover:bg-pink-900 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
</button>
        </div>
    </div>
</div>

</section>
<div className="justify-between px-5 flex absolute bottom-0 w-full  bg-slate/10 backdrop-blur-sm
z-50 gap-5 left-0 border-t-3 border-orange-700 rounded-xl ">
  <>
  <div className="img p-1 flex gap-3 my-2">
  <img src={superOne} alt="" srcset="" className="w-10 my-3 sm:my-3 h-10 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full border-4 border-orange-700"/>
  <div className="p-2 hidden flex-col sm:hidden md:flex my-3">
    <h1 className="text-sm font-semibold capitalize text-gray-300">favourite by:</h1>
    <p className="text-xs text-orange-700">Wizkid</p>
  </div>
  </div>
  </>
  <div className="flex gap-4">
  <button className="p-2 text-white cursor-pointer hover:text-orange-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
</svg>
</button>
  <button className="p-2  text-white cursor-pointer hover:text-orange-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

  </button>
  <button className="p-3  text-white cursor-pointer hover:text-orange-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
</svg>

  </button>
  </div>
  <div className="p-3 my-2">
    <button className="p-1 my-2 sm:p-1 md:p-2 text-xs sm:text-xs md:text-sm  border-2 border-orange-700 text-orange-700 rounded-full cursor-pointer">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
   stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>


    </button>
  </div>

</div>
  </div>
  );
}
