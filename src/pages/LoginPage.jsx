import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const ADMIN_UID = import.meta.env.VITE_ADMIN_UID;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if(!ADMIN_UID){
        setError("Admin UID is missing. Check again!")
        return;
    }

    setLoading(true);

    try{
        const result = await signInWithEmailAndPassword(
            auth,
            email.trim(),
            password
        );

        // only configured admins can access dashboard
        if(result.user.uid !== ADMIN_UID){
            await signOut(auth);
            setError("You are not authorized to access this system.");
            return;
        }

        navigate('/dashboard', {replace:true});

        // App detect successful access automatically.
    }catch(err){
        if(err.code === "auth/invalid-credential"){
            setError("Incorrect Email or Password");
        }else if (err.code === "auth/too-many-requests"){
            setError("Too many attempts. Please try again later.");
        }else{
            setError(err.message);
        }
    }finally{
        setLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl shadow-black/40">
        <h1 className="text-2xl font-semibold text-zinc-50">Welcome back</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Sign in to continue to your account.
        </p>

        {/* display error msg if error occurs */}
        {error && (
          <p
            role="alert"
            className="mt-5 rounded-lg border border-red-900 bg-red-950/50 p-3 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-300"
              >
                Password
              </label>
              <span
               
                className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline"
              >
                Forgot password?
              </span>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            {loading? "Signing in..." : "Sign in"}
          </button>
        </form>


 <p className="mt-6 text-center text-sm text-zinc-400">
          Authorized administrators only
        </p>
      </div>
    </div>
  );
}
