import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    logo: "",
    type: "Full-time",
    level: "Entry",
    salary: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/jobs/",
        formData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Job Created:", response.data);
      alert("Job created successfully!");
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Failed to create job.");
    } finally {
      setLoading(false);
      navigate("/Home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121] p-6">
      <div className="w-full max-w-2xl bg-black p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Create a Job Listing</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter job title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Company Logo URL</label>
            <input
              type="url"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter logo URL"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-medium">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Job Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-medium">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. $100K - $150K"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 bg-[#333] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Create Job"}
          </button>
        </form>
      </div>
    </div>
  );
}
