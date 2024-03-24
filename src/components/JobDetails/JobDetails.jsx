import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/LocalStorage/LocalStorage';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast('You have applied successfully');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center m-28">
        Job Details of:{id}
      </h2>
      <div className="grid gap-4 md:grid-cols-4 mb-28">
        <div className="border md:col-span-3 space-y-6 p-5 rounded-md">
          <div>
            <p className="text-2xl font-bold">
              Job Description:
              <span className="text-base font-normal">
                {job.job_description}
              </span>
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              Job Responsibility:
              <span className="text-base font-normal">
                {job.job_responsibility}
              </span>
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              Educational_Requirements:
              <span className="text-base font-normal">
                {job.educational_requirements}
              </span>
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              Experiences:
              <span className="text-base font-normal">{job.experiences}</span>
            </p>
          </div>
        </div>
        <div className="border p-5 rounded-md">
          <div className="space-y-5">
            <h1 className="text-xl font-bold">Job Details</h1>
            <hr />
            <div>
              <h2 className="text-md font-bold">
                Salary:
                <span className="text-base font-normal">{job.salary}</span>
              </h2>
            </div>
            <div>
              <h3 className="text-md font-bold">
                Job Title :{' '}
                <span className="text-base font-normal">{job.job_title}</span>
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact Information</h3>
            </div>
            <hr />
            <div>
              <h4 className="text-md font-bold">
                phone :{' '}
                <span className="text-base font-normal">
                  {job.contact_information.phone}
                </span>
              </h4>
            </div>
            <div>
              <h5 className="text-md font-bold">
                Email :
                <span className="text-base font-normal">
                  {job.contact_information.email}
                </span>
              </h5>
            </div>
            <div>
              <h6 className="text-md font-bold">
                Address :{' '}
                <span className="text-base font-normal">
                  {job.contact_information.address}
                </span>
              </h6>
            </div>
            <div>
              <button
                onClick={handleApplyJob}
                className="bg-[#7E90FE] w-full py-4 rounded-lg text-white font-bold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
