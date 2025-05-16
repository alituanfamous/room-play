import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginWithGoogle from "../components/LoginGoogle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form reload
        setLoading(true);
        setSuccess("");
     
    try {
      await signInWithEmailAndPassword(auth, email, password);
       setSuccess("account created successfully! 🙂");
             navigate("/Dashboard");
    
    } catch (err) {
      setError(err.message);
          setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setLoading(false); // stop loading
        

    }

  };

  return (
    <main className="bg-zinc-950 h-screen overflow-hidden">
      {success && <div className="p-3 absolute inset border-b-3 border-l-2 top-2 right-2 font-semibold rounded-bl-md 
        border-green-500 bg-green-900 text-green-500">{success}</div>}
      <section className="flex justify-center items-center h-full p-2">
        <div className="container p-10 rounded-xl max-w-md bg-slate-800 shadow-lg">
          <h1 className="p-5 text-3xl text-slate-500 font-extrabold text-center">Sign In</h1>
          {error && <p className="text-red-500 p-3 rounded-xl bg-red-950 border border-red-600">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-3 py-7">
            <label htmlFor="email" className="block text-gray-300 font-semibold text-left">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border-2 border-slate-700 rounded-xl outline-none bg-slate-900
              text-gray-300 font-semibold focus:border-blue-900"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password" className="block text-gray-300 font-semibold text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 border-2 border-slate-700 rounded-xl
               outline-none text-gray-200 font-semibold bg-slate-900 focus:border-blue-900"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            

            <button
              type="submit"
              className="px-4 py-3 bg-slate-600 hover:bg-transparent text-gray-900 
              font-semibold rounded-xl transition-colors duration-1000 border-2
               hover:text-gray-300 border-slate-700 cursor-pointer my-2" disabled={loading}
            >
               {loading ? "Logging in..." : "Log In"}
            </button>
         
          </form>
             <LoginWithGoogle />

          <Link to="/signup" className="block mt-4 font-semibold text-slate-600 text-center hover:text-gray-300">
            Don't have an account? Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}
