import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="w-full bg-bgDark">
      <div className="h-[18vh] text-7xl font-medium flex items-center ml-10">Project</div>
      <ul>
        <li>
          <div className="h-[18vh] bg-myPurple">
          <Link to="/project/wouldU">우쥬</Link>
          </div>
        </li>
        <li>
          <div className="h-[18vh] bg-myGreen">
          <Link to="/project/wouldU">우쥬</Link>
          </div>
        </li>
        <li>
          <div className="h-[18vh] bg-myOrange">
          <Link to="/project/wouldU">우쥬</Link>
          </div>
        </li>
        <li>
          <div className="h-[18vh] bg-myPink">
          <Link to="/project/wouldU">우쥬</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Project;
