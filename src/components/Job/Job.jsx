import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 border-2 p-5">
      <figure className="">
        <img src={logo} alt="company_logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-extrabold text-[#474747]">
          {job_title}
        </h2>
        <p className="text-2xl text-[#757575]">{company_name}</p>
        <div className="flex gap-3 font-bold text-[#7E90FE]">
          <button className="border border-blue-600 px-4 py-1 rounded-md">
            {remote_or_onsite}
          </button>
          <button className="border border-blue-600 px-4 py-1 rounded-lg">
            {job_type}
          </button>
        </div>
        <div className="flex gap-4 mt-4 mb-6 text-[#757575] text-5 font-bold">
          <h2 className="flex items-center gap-2">
            <MdLocationOn className="text-xl"></MdLocationOn> {location}
          </h2>
          <h3 className="flex items-center">
            <AiOutlineDollarCircle></AiOutlineDollarCircle> {salary}
          </h3>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-[#7E90FE] py-3 px-5 font-bold text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
