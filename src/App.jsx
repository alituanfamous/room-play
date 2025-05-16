import { Routes, Route } from 'react-router-dom';
import LoginForm from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Playlist from './pages/Playlist';
import Artist from './pages/Artist';
import musicLogo from "./assets/music-logo.webp";
import imgLogo from "./assets/logo.png";
import Signup from "./pages/Signup"; 
import ProtectedRoute from './components/ProtectedRoute';
import UploadMedia from "./components/UploadMedia";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // wait for Firebase to check auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return<div className="flex items-center justify-center h-screen">
  <div className='text-xl font-semibold'>Loading...</div>
</div>
;

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path="UploadMedia" element={<UploadMedia />} />
      
<Route
  path="/Dashboard"
  element={
    <ProtectedRoute user={user}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
         <Route path="/Playlist/*" element={<ProtectedRoute user={user}> <Playlist /> </ProtectedRoute>}/>
             <Route path="/Artist/*" element={<Artist/>} />
             <Route path="/Signup/*" element={<Signup/>} />
         
    </Routes>
  );
}

export default App;
