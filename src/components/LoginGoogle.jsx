import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const LoginWithGoogle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // ✅ Move this here

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User name:", user.displayName);
      console.log("User email:", user.email);

      // Save to state
      setLoggedInUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,

      });

      navigate("/Dashboard");
    } catch (error) {
      console.error('❌ Login failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-slate-900 text-gray-400 px-5 py-2 rounded-md shadow flex gap-6 justify-center
      hover:bg-slate-800 transition-colors duration-2000 border border-gray-800 w-full mx-auto cursor-pointer"
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
      </span>
      {loading ? "Logging in..." : "Login with Google"}
    </button>
  );
};

export default LoginWithGoogle;

