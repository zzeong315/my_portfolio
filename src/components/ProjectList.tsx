import React from "react";
import { Link } from "react-router-dom";

interface ProjectListProps {
  title: string;
  team: boolean;
  description: string;
  bgColor: string;
  link: string;
  logo?: any;
  addClassName?: string;
}

const ProjectList = ({title, team, description, bgColor, link, logo, addClassName}:ProjectListProps) => {
  return (
    <li>
      <div className={`h-[18vh] grid grid-cols-2 justify-center items-center ${bgColor} hover:opacity-80`}>
        <Link to={link} className="flex ml-10 items-center">
          {logo}
          <div className={`text-5xl font-medium ml-2 ${addClassName}`}>{title}</div>
          {team ? <div className="bg-red-400 rounded-xl text-sm font-semibold p-1 h-full m-3">
            Team
          </div> : <div className="bg-amber-400 rounded-xl text-sm font-semibold p-1 h-full m-3">
            Personal
          </div>}
        </Link>
        <p className="mr-28 font-notoKR whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ProjectList;
