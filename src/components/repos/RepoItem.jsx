import React from "react";
import prototype from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-900 transition-colors duration-300">
      <div className="card-body">
        <h3 className="text-xl text-white mb-2 font-semibold">
          {name}
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline ml-2" />
            {name}
          </a>
        </h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-outline badge-lg">
            <FaEye className="inline mr-1" /> {watchers_count}
          </div>
           <div className="mr-2 badge badge-success badge-outline badge-lg">
            <FaStar className="inline mr-1" /> {stargazers_count}
          </div>
           <div className="mr-2 badge badge-info badge-error badge-lg">
            <FaInfo className="inline mr-1" /> {open_issues}
          </div>
           <div className="mr-2 badge badge-info badge-outline badge-lg">
            <FaUtensils className="inline mr-1" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}
RepoItem.prototype = {
  repo: prototype.object.isRequired,
};
export default RepoItem;
