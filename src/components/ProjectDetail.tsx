import React from "react";
import CodeSandBox from "./icons/CodeSandBox";
import Github from "./icons/Github";
import Notion from "./icons/Notion";

interface ProjectDetailProps {
  logo?: any;
  title: string;
  githubURL: string;
  notionURL: string;
  codesandURL?: string;
  period: string;
  team: boolean;
  teamMembers?: string;
  description: string;
  frontEnd: string[];
  backEnd: string[];
  AI?: string[];
  color: string;
  addClassName?: string;
}

const ProjectDetail = ({
  logo,
  title,
  githubURL,
  notionURL,
  codesandURL,
  period,
  team,
  teamMembers,
  description,
  frontEnd,
  backEnd,
  AI,
  color,
  addClassName,
}: ProjectDetailProps) => {
  return (
    <div className={`${color} flex flex-col md:grid md:grid-cols-3 md:h-[70vh]`}>
      <div className="col-span-1 self-end justify-self-end p-2">
        <div className="flex justify-center items-center mb-4">
          {logo ? logo : null}
          <h1 className={`text-[2.8rem] md:text-[3.5rem] font-medium font-notoKR ${addClassName}`}>{title}</h1>
        </div>
        <div className=" text-darkText flex flex-col items-end my-2 mr-6 space-y-1">
          <div className="flex space-x-1">
            <span>
              <Github />
            </span>
            <span className="hover:underline">
              <a href={githubURL} target="_blank">
                Github
              </a>
            </span>
          </div>
          <div className="flex space-x-1">
            <span>
              <Notion />
            </span>
            <span className="hover:underline">
              <a href={notionURL} target="_blank">
                더 자세한 내용 보러가기
              </a>
            </span>
          </div>
          {codesandURL ? (
            <div className="flex space-x-1">
              <span><CodeSandBox /></span>
              <span className="hover:underline">
                <a href={notionURL} target="_blank">
                  CodeSandBox
                </a>
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-span-2 bg-bgDark p-8 flex flex-col justify-between">
        <div className="flex flex-col font-notoKR">
          <div className="flex space-x-5">
            <div className="m-0 flex justify-start items-center">
              {team ? (
                <div className="bg-red-400 bg-opacity-80 rounded-xl text-base font-semibold p-1 mb-2 h-12 flex items-center">
                  <p>Team</p>
                </div>
              ) : (
                <div className="bg-amber-400 bg-opacity-80 rounded-xl text-base font-semibold p-1 mb-2 h-full flex items-center">
                  <p>Personal</p>
                </div>
              )}
            </div>
            <div className="text-slate-600 mb-4">
              <div>
                <span>기간 : </span>
                <span>{period}</span>
              </div>
              {teamMembers ? (
                <div>
                  <span>팀원 : </span>
                  <span>{teamMembers}</span>
                </div>
              ) : null}
            </div>
          </div>
          <p className="my-4 text-lg whitespace-pre-line leading-relaxed first-letter:text-2xl first-letter:font-medium">
            {description}
          </p>
        </div>
        <div className={AI ? "grid grid-cols-7" : "grid grid-cols-5"}>
          <div className="flex justify-center items-center text-lg font-bold col-span-1">
            Tech Stack
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-semibold mb-1">Front-end</p>
            <div className="text-xs md:text-sm flex flex-col items-center">
              {frontEnd.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <p className="font-semibold mb-1">Back-end</p>
            <div className="text-xs md:text-sm flex flex-col items-center">
              {backEnd.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          </div>
          {AI ? (
            <div className="flex flex-col items-center col-span-2">
              <p className="font-semibold mb-1">AI</p>
              <div className="text-xs md:text-sm flex flex-col items-center">
                {AI?.map((i) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
