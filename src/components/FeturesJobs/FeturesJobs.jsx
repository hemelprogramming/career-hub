import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeturesJobs = () => {
  const [jobs, setJobs] = useState([]);
  // use not a best way
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch('./jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {jobs.slice(0, dataLength).map(job => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        <div className="text-center mt-10 mb-32">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="font-bold text-white py-4 px-7 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeturesJobs;
