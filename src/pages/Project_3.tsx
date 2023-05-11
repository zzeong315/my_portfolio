import React from "react";
import ProjectDetail from "../components/ProjectDetail";
import { project_PortfolioShare } from "../projectData";

const PortfolioShare = () => {
  return (
    <div>
      <ProjectDetail
        title={project_PortfolioShare.title}
        githubURL={project_PortfolioShare.githubURL}
        notionURL={project_PortfolioShare.notionURL}
        period={project_PortfolioShare.period}
        team={project_PortfolioShare.team}
        teamMembers={project_PortfolioShare.teamMembers}
        description={project_PortfolioShare.description}
        frontEnd={project_PortfolioShare.techStack.frontEnd}
        backEnd={project_PortfolioShare.techStack.backEnd}
        color={"bg-myOrange"}
        addClassName={"mx-4"}
      />
      <div className="bg-myGreen font-notoKR p-12 flex justify-around items-center">
        <div>
          <h1 className="font-poppin text-5xl font-bold mb-2">Portfolio Share</h1>
          <p className="text-sm">회원가입, 로그인, 나의 페이지, 나의 정보 수정, 네트워크 등</p>
          <p className="text-slate-800 text-xs">※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크를 통해 보실 수 있습니다.</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">담당부분</h1>
          <ul>
            {project_PortfolioShare.responsiblePart?.map((i, _) => (
              <li key={_} className="text-base pb-2">
                ✓ {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-bgDark flex p-12 justify-around">
        <div className="flex flex-col space-y-4">
          <h1 className="font-medium text-xl">{`► 나의 페이지 & Education`}</h1>
          <div className="flex space-x-12">
            {project_PortfolioShare.img1?.map((i, _) => (
              <img
                key={_}
                src={`${process.env.PUBLIC_URL}${i}`}
                className="w-80 rounded-md shadow-xl"
              />
            ))}
          </div>
          <div>
            ✓ 나의 페이지에서 포트폴리오 정보를 작성, 수정, 삭제 할 수 있음
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-medium text-xl">► 네트워크</h1>
          <div>
            {project_PortfolioShare.img2?.map((i, _) => (
              <img
                key={_}
                src={`${process.env.PUBLIC_URL}${i}`}
                className="w-52 h-50 rounded-md shadow-xl"
              />
            ))}
          </div>
          <div>✓ 네트워크에서는 다른 유저들의 정보를 확인 할 수 있음</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShare;
