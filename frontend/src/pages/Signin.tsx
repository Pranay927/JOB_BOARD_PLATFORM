import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useGlobalStore } from "../store/useGlobalStore";


function Signin() {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useGlobalStore();

    const [err, setErr] = useState<string | null>(null);
  
    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const resp = await axios.post("http://localhost:3001/api/v1/user/signin", {
          username,
          password
        });

        const token  = resp.data.Token;
        localStorage.setItem("token",token);
        
        const {name, role} = resp.data;
        setUser(name, role);
        navigate("/Home");
      } catch (error: any) {
        setErr(error.response.data.Error);
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-2xl flex flex-col justify-center items-center gap-6 p-10">
          <div className="text-3xl font-bold text-center">SignIn</div>
          <div className="text-gray-600 mx-auto">
            Enter your information to create an account
          </div>
  
          <form onSubmit={handleSignup} className="flex flex-col gap-4 w-64">
            <div>
              <p className="text-sm text-gray-600">Username</p>
              <input
                className="border-2 rounded-md border-gray-600 w-full p-1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
  
            <div>
              <p className="text-sm text-gray-600">Password</p>
              <input
                className="border-2 rounded-md border-gray-600 w-full p-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            
  
            {err && <p className="text-red-500 text-sm">{err}</p>}
  
            <button
              type="submit"
              className="bg-black text-white py-1 rounded-md px-10 hover:font-semibold"
            >
              Sign in
            </button>
          </form>
  
          <div className="flex items-center justify-center gap-1">
            <div>Already have an account?</div>
            <Link
              className="text-blue-700 text-sm hover:font-medium underline"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signin;