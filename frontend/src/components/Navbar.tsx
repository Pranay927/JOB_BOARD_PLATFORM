
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-2 px-6">
      <div className="w-full mx-auto flex items-center justify-between gap-3 text-sm">
        {/* Logo*/}

        <div>
        <Link to="/" className="font-bold text-lg">
          JobBoard
        </Link>

        </div>

        {/* Links */}
        <div className='flex gap-2'>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <span className="text-gray-400">/</span>

        <Link to="/createJob" className="hover:text-gray-300">
          Create a Job
        </Link>
        <span className="text-gray-400">/</span>

        <Link to="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>

        <Link to="/signup" className="hover:text-gray-300">
          Signup
        </Link>
        <span className="text-gray-400">/</span>

        <Link to="/signin" className="hover:text-gray-300">
          Signin
        </Link>


        
        </div>
      </div>
    </nav>
  );
}