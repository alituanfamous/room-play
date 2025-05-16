import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import musicLogo from "../assets/logo.png";
import CreateModal from "../components/CreateArtist";

export default function Artist() {
    const navigate = useNavigate("");
    const[like, setLike] = useState(false);
    const backBtn = () => {
   navigate("/Dashboard");
    }
    const handleLike = () => {
      

    }

  return (
    
    <div className="flex-1 bg-gray-950 min-h-screen text-white p-6">
        <div className="flex flex-row gap-2 sm:gap-2 md:gap-4 p-3 sm:p-3 md:p-4 my-2 sm:my-2 md:my-4">
    <button className="p-2 border-2 border-gray-800 rounded-full text-gray-400 
    cursor-pointer hover:bg-gray-800 duration-1000 transition-colors" onClick={backBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
</button>
      <h1 className="text-2xl font-semibold  text-slate-300 my-1">Artist</h1>
        </div>
       <CreateModal />
</div>
  );
}
