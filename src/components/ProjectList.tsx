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
      <div className={`flex flex-col px-4 h-[18vh] md:grid md:grid-cols-2 justify-center items-start md:items-center ${bgColor} hover:opacity-80`}>
        <Link to={link} className="flex sm:ml-10 items-center">
          {logo}
          <div className={`text-3xl lg:text-5xl font-medium ml-2 ${addClassName}`}>{title}</div>
          {team ? <div className="bg-red-400 rounded-xl text-sm font-semibold p-1 m-3 flex items-center">
            Team
          </div> : <div className="bg-amber-400 rounded-xl text-sm font-semibold p-1 m-3 flex items-center">
            Personal
          </div>}
        </Link>
        <p className="hidden md:block md:mr-28 md:text-sm font-notoKR whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ProjectList;
