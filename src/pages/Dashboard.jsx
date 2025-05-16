import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Playlist from "../pages/Playlist";
import Artist from "../pages/Artist";
import Home from "../pages/Home";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // No user = redirect to login
        navigate("/");
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) return null; // prevent rendering before user is available

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Top Nav */}
      <header className="flex justify-between items-center mb-8 p-3 shadow-lg bg-gray-900 top-0 z-50">
        <div className="flex gap-3">
          <h1 className="logo text-2xl font-bold">
            Room<span className="text-orange-800">Play</span>
          </h1>
        </div>

        <div className="flex gap-2 rounded-full bg-slate-800 px-1 cursor-pointer">
          <button className="my-1 rounded-full justify-center hover:bg-gray-700 flex p-2 sm:bg-transparent md:bg-slate-700  "  onClick={handleLogout}>
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full"
            />
          </button>
          <p
            className="py-3 pr-4 text-gray-500 hover:text-white cursor-pointer text-md hidden sm:hidden md:flex"
           
          >
            {user.email}
          </p>
        </div>
        <button className="flex sm:flex md:hidden p-3 rounded-full border border-gray-800 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>

        </button>
      </header>

      <section className="flex flex-row ">
 <aside className="max-w-sm max-h-screen  h-ful  hidden sm:hidden md:block ">
      <div className="px-5 justify-cenetr mx-auto ">
           <input type="text" className="px-4 py-2 border-2 border-slate-800 
      rounded-xl  outline-none text-slate-500 font-semibold" placeholder="Search Songs, Artist" />
      </div>
   
      <nav className="p-5 flex flex-col gap-2 w-full max-h-full m-2 text-center w-48">

        <Link to="/" className="flex gap-1 text-slate-300 capitalize bg-slate-800 px-4 py-2 font-semibold rounded">
          <span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

          </span>
          Home
        </Link>

        <Link to="/artist" className="flex gap-2 px-4 py-2 hover:bg-slate-800 text-gray-300 font-semibold capitalize rounded">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
</span> Artists
        </Link>

        <Link to="/playlist" className="flex gap-2 px-4 py-2 hover:bg-slate-800 text-gray-300 font-semibold capitalize rounded">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
</span> Playlist
        </Link>

        <Link to="/news" className="flex gap-2 px-4 py-2 hover:bg-slate-800 text-gray-300 font-semibold capitalize rounded">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
</span> News
        </Link>

        
        <Link to="/podcast" className="flex gap-2 px-4 py-2 hover:bg-slate-800 text-gray-300 font-semibold capitalize rounded">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
</svg>

</span> Podcasts
        </Link>

      </nav>
    </aside>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Playlist" element={<Playlist />} />
            <Route path="/Artist" element={<Artist />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}
