import { Link } from "react-router-dom";
import { useGlobalStore } from "../store/useGlobalStore";

type Job = {
  _id: string;
  title: string;
  logo: string;
  company: string;
  type: string;
  level: string;
  salary: string;
  location: string;
};

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  const { isDarkMode } = useGlobalStore(); // Get isDarkMode from Zustand store

  return (
    <div
      className={`rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Header: Company Logo, Name */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={job.logo}
            alt={`${job.title} logo`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className={`text-lg font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
              {job.company}
            </h3>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h2 className={`text-xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
        {job.title}
      </h2>

      {/* Tags: Type, Level */}
      <div className="flex gap-2">
        <span
          className={`text-sm px-3 py-1 rounded-full ${
            isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
          }`}
        >
          {job.type}
        </span>
        <span
          className={`text-sm px-3 py-1 rounded-full ${
            isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
          }`}
        >
          {job.level}
        </span>
      </div>

      {/* Salary and Location */}
      <div className="flex justify-between items-center">
        <div>
          <p className={`text-lg font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            {job.salary}
          </p>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {job.location}
          </p>
        </div>
        <Link
          to={`/apply/${job._id}`}
          className={`px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "bg-white text-black hover:bg-gray-300" : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Apply now
        </Link>
      </div>
    </div>
  );
}
