// src/App.tsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';
import CreateJobPage from './pages/CreateJobPage';
import ApplyJob from './pages/ApplyJob';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/apply/:jobId" element={<ApplyJob />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Landing />} />
      <Route path="/createJob" element={<CreateJobPage/>} />
      {/* <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
    </BrowserRouter>
  );
}