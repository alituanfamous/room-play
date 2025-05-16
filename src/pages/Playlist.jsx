import React from "react";
import { useNavigate } from "react-router-dom";
import musicLogo from "../assets/music-logo.webp";
import UploadMedia from "../components/UploadMedia";

export default function Playlist() {
    const navigate = useNavigate("");
    const backBtn = () => {
   navigate("/Dashboard");
    }

  return (
    
    <div className="flex-1 bg-gray-950 min-h-screen text-white p-6 w-full max-w-full">
        <div className="flex flex-row gap-2 sm:gap-2 md:gasp-4 p-3 sm:p-3 md:p-4 my-2 sm:my-2 md:my-4">
    <button className="p-2 border-2 border-gray-800 rounded-full text-gray-400 
    cursor-pointer hover:bg-gray-800 duration-1000 transition-colors" onClick={backBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
</button>
      <h1 className="text-2xl font-bold  text-slate-400">My playlist songs</h1>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row p-5 ">
          <div className=" flex flex-col gap-5 h-full min-w-lg bg-gray-900 
          border-2 border-slate-800 rounded-2xl p-5">
            <h1 className="text-center p-3 font-extrabold text-2xl text-slate-400">Create new Playlist </h1>
            <div className="video-section p-5 border border-slate-700 duration-1000 transition-colors
              rounded-xl cursor-pointer hover:bg-slate-700 ">
              <h1 className="p-3 text-lg text-slate-300 font-semibold flex gap-3">Upload Video 
                     <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span></h1>
         

            </div>
              <div className="video-section p-5 border border-slate-700 duration-1000 transition-colors
              rounded-xl cursor-pointer hover:bg-slate-700">
              <h1 className="p-3 text-lg text-slate-300 font-semibold flex gap-3">Upload Audio  
                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span></h1>

            </div>
            <button>start</button>
          </div>
<div className="list-songs p-5 flex flex-col gap-5 items-center max-w-full w-full justify-center">
  <button className="text-red-500 p-5 rounded-full bg-red-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

</button>
               <h1 className="text-slate-400 font-semibold">Playlist is empty. please click to add</h1>
               <UploadMedia />
            </div>
        </div>
           
            </div>
         

  );
}
