import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Signup() {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Seeker"); // Default to Seeker
    const [err, setErr] = useState<string | null>(null);
  
    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3001/api/v1/user/signup", {
          username,
          password,
          role, 
        });
        
        navigate("/signin");
      } catch (error: any) {
        setErr(error.response?.data?.Error || "Signup failed");
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-2xl flex flex-col justify-center items-center gap-6 p-10">
          <div className="text-3xl font-bold text-center">Sign Up</div>
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
  
            <div>
              <p className="text-sm text-gray-600">Role</p>
              <select
                className="border-2 rounded-md border-gray-600 w-full p-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Seeker">Seeker</option>
                <option value="Company">Company</option>
              </select>
            </div>
  
            {err && <p className="text-red-500 text-sm">{err}</p>}
  
            <button
              type="submit"
              className="bg-black text-white py-1 rounded-md px-10 hover:font-semibold"
            >
              Signup
            </button>
          </form>
  
          <div className="flex items-center justify-center gap-1">
            <div>Already have an account?</div>
            <Link
              className="text-blue-700 text-sm hover:font-medium underline"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;