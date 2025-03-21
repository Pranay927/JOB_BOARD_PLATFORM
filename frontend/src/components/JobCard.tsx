import { Link } from 'react-router-dom';

type Job = {
  id: string;
  company: { name: string; logo: string };
  title: string;
  postedAt: string;
  type: string;
  level: string;
  salary: string;
  location: string;
};

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
      {/* Header: Company Logo, Name, Posted At, Save Button */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={job.company.logo}
            alt={`${job.company.name} logo`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{job.company.name}</h3>
            <p className="text-sm text-gray-500">{job.postedAt}</p>
          </div>
        </div>
        
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>

      {/* Tags: Type, Level */}
      <div className="flex gap-2">
        <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
          {job.type}
        </span>
        <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
          {job.level}
        </span>
      </div>

      {/* Salary and Location */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-gray-900">{job.salary}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Apply now
        </Link>
      </div>
    </div>
  );
}