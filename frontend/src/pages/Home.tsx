// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';


export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/jobs/");
        setJobs(response.data.Message); // Assuming jobs are in `Message`
      } catch (err) {
        setError("Failed to fetch jobs");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
  
      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
  
      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}
  
      {/* Job Listings */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {jobs.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">No jobs available.</p>
          ) : (
            jobs.map((job, index) => <JobCard key={index} job={job} />)
          )}
        </div>
      )}
    </div>
  );
}