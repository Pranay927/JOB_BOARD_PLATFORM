// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';

// Mock data for testing
const mockJobs = [
  {
    id: "1",
    company: {
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    title: "Senior UI/UX Designer",
    postedAt: "5 days ago",
    type: "Part-time",
    level: "Senior level",
    salary: "$120/hr",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    company: {
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
    },
    title: "Graphic Designer",
    postedAt: "30 days ago",
    type: "Full-time",
    level: "Flexible schedule",
    salary: "$150 - 220k",
    location: "Mountain View, CA",
  },
  {
    id: "3",
    company: {
      name: "Dribbble",
      logo: "https://logo.clearbit.com/dribbble.com",
    },
    title: "Senior Motion Designer",
    postedAt: "18 days ago",
    type: "Contract",
    level: "Remote",
    salary: "$85/hr",
    location: "San Francisco, CA",
  },
];

export default function Home() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    // Comment out the API call and use mockJobs for testing
    // axios
    //   .get('http://localhost:3001/api/v1/jobs/')
    //   .then((res) => setJobs(res.data))
    //   .catch((err) => console.error(err));

    // Use mock data for testing
    setJobs(mockJobs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}