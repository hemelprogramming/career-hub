import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../utility/LocalStorage/LocalStorage';

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoreJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(
      //   job => job.id === storedJobIds.includes(jobs.id)
      // );

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      // console.log(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h1>Applied job :{appliedJob.length}</h1>
    </div>
  );
};

export default AppliedJob;
