import { useState } from "react";
import iconUser from "../assets/user (1).png";


 const CreateModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdded, setIsAdded] = useState("");
    const [artists, setArtists] = useState([]);
    const [artistName, setArtistName] = useState("");
    const [genre, setGenre] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const ToggleModal =() => setIsOpen(!isOpen);
   const handleSubmit = (e) => {
  e.preventDefault();

  // Trim and validate inputs
  if (artistName.trim().length > 12 || genre.trim().length > 12) {
    setError("Error: Dont use long Name of artist");
    return;
  }

  setError(""); // Clear previous error
  const newArtist = {
    id: Date.now(),
    name: artistName,
    genre: genre,
  };

  setLoading(true);
  setIsAdded("Success Added!");

  setTimeout(() => {
    setIsAdded("");
    setArtists([...artists, newArtist]);
    setIsOpen(false);
    setArtistName("");
    setGenre("");
    setLoading(false);
  }, 2000);
};



return (
    <div className="flex max-w-full flex-col gap-5">
        {isAdded && (
            <div className="p-3 bg-green-900 text-green-500 rounded-xl 
            border border-green-500 shadow-lg rotate-15 absolute bottom-5 right-4 z-100">
                {isAdded}
            </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 mx-2">

<button className="px-5 py-3 sm:px-5 sm:py-3 md:px-10 md:py-5 text-sm sm:text-sm md:text-md my-2 border-2 
border-gray-800 hover:bg-slate-900 duration-1000 transition-colors
      rounded-xl font-semibold capitalize inset-2 cursor-pointer flex gap-2 justify-center  " onClick={ToggleModal}> 
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
    
        </span>
        Create</button>
        <button className="px-5 py-3 sm:px-5 sm:py-3 md:px-10 md:py-5 text-sm sm:text-sm md:text-md my-2 border-2 border-gray-800 hover:bg-slate-900 duration-1000 transition-colors
      rounded-xl font-semibold capitalize inset-2 cursor-pointer flex gap-2 justify-center  "> 
      <span>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>
</span>
        Sort By</button>

         <button className="px-5 py-3 sm:px-5 sm:py-3 md:px-10 md:py-5 text-sm sm:text-sm md:text-md my-2  hover:bg-slate-900 duration-1000 transition-colors
      rounded-xl font-semibold capitalize inset-2 cursor-pointer flex gap-2 justify-center  "> 
      <span>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

</span>
        Clear All</button>
        </div>
      
    
     {isOpen &&(
    <div className="fixed inset-2 z-50 flex flex-col
     backdrop-blur-sm justify-center items-center">
        <button className="p-4 rounded-full absolute top-5 hover:bg-gray-700
         right-5 border border-gray-700 cursor-pointer mx-3"   onClick={ToggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>
        <div className="max-w-md rounded-xl bg-slate-900 p-6 w-full shadow-lg">
            <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col gap-2 p-6">
                <h1 className="text-2xl font-extrabold text-gray-400 text-center p-5 "> Artist details</h1>
                {error && (
                    <p className="text-red-500 text-center font-semibold p-2 rounded-xl bg-red-950 border border-red-500">{error}</p>
                )}
                <label htmlFor="name" className="block text-gray-200 font-semibold">Artist Name</label>
                <input type="text" className="border-2 border-gray-700 rounded-xl
                 px-4 py-2 w-full outline-none"  value={artistName}
             onChange={(e) => setArtistName(e.target.value)} required/>
                    <label htmlFor="genre" className="block text-gray-200 font-semibold">Artist Genre</label>
                   <input type="text" className="border-2 border-gray-700 rounded-xl px-4 py-2 w-full outline-none"  value={genre}
             onChange={(e) => setGenre(e.target.value)} required/>
                <button className="px-4 p-3 my-3 rounded-xl bg-gray-400 cursor-pointer
                text-slate-800 font-semibold capitalize " type="submit" disabled={loading} >{loading ? "Saving.." : "Save"}</button>
            </form>

        </div>

    </div>
   ) }
   { artists.length != 0 ? (
     <div className="max-w-full  p-2 flex rounded-xl shadow-lg bg-gray-900 justify-self-center border border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4  m-4 w-full">
  {artists.map((artist) => (
    <div key={artist.id} className="bg-gray-950 border border-slate-800 text-white p-4 rounded-xl shadow flex gap-3">
        <div>
            <img src={iconUser} alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:h-16 md:w-16" />
        </div>
        <div className="flex flex-col gap-2 ">
  <h2 className="text-sm sm:text-sm md:text-lg font-semibold  text-gray-200 capitalize ">{artist.name}</h2>
      <p className="text-xs sm:text-xs md:text-sm text-slate-400 capitalize">{artist.genre}</p>
        </div>
        <div className=" flex  gap-4 ">
            <button className=" rounded-full p-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
            <button className="p-2 rounded-full  cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</button>
        </div>
    
    </div>
  ))}
</div>

        </div>
   
   ) : (
<h1 className="text-2xl font-semibold text-gray-500 justify-center text-center items-center p-6">No artist added yet.</h1>
   )}
    </div>
  
);
 }
 export default CreateModal;