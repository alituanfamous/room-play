import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("account created successfully! 🙂");
      setTimeout(() => {
        navigate("/Dashboard");
        setSuccess("");
      }, 1000);
      
    } catch (err) {
      
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    finally{
        setLoading(false);
    }
  };

  return (
    <>
    <main className="bg-zinc-950 h-screen overflow-hidden  ">
        {success && <div className="p-3 absolute inset border-b-3 border-l-2 top-2 right-2 font-semibold rounded-bl-md 
        border-green-500 bg-green-900 text-green-500">{success}</div>}
        
        <section className="flex justify-center items-center h-full p-2">

 <div className="container p-8 sm:p-8 md:p-5 rounded-xl max-w-md bg-slate-800 shadow-lg sm">
      
      <form onSubmit={handleSignup} className="flex flex-col gap-3 p-3 sm:p-3 lg:p-6 ">
        <h2 className="text-3xl font-extrabold p-5 text-slate-500 text-center">Sign Up</h2>
          {error && <p className="text-red-600 p-3 rounded-xl bg-red-950 border border-red-600">{error}</p>}

        <label htmlFor="email" className="block text-slate-200 font-semibold">Email address</label>
        <input
          className="border-2 border-slate-700 rounded-xl bg-slate-900 focus:border-blue-900
           outline-none text-gray-200  font-semibold py-2 px-4 "
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="text-slate-200 block font-semibold">Password</label>
        <input
          className="border-2 border-slate-700 rounded-xl outline-none bg-slate-900 focus:border-blue-900
           text-gray-200  font-semibold py-2 px-4"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
        <button type="submit" className="bg-slate-600 text-slate-900 p-2 rounded-xl 
        px-4 py-3 font-semibold border-2 border-slate-700 
        transition-colors duration-1000 hover:bg-transparent cursor-pointer my-3 hover:text-white" disabled={loading}>
         {loading ? "Sign Up please wait..." : "Sign Up"}
        </button>
   
      <Link to="/" className="block mt-4 font-semibold text-slate-600 text-center">
             have an account? Sign In
          </Link>
      </form>
    </div>
            </section>
    </main>
    </>
  );
}

export default Signup;
