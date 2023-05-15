import React from "react";
import GreenPloggingLogo from "../components/icons/GreenPloggingLogo";
import ProjectDetail from "../components/ProjectDetail";
import { project_GreenPlogging } from "../projectData";

const GreenPlogging = () => {
  return (
    <div>
      <ProjectDetail
        logo={<GreenPloggingLogo />}
        title={project_GreenPlogging.title}
        githubURL={project_GreenPlogging.githubURL}
        notionURL={project_GreenPlogging.notionURL}
        period={project_GreenPlogging.period}
        team={project_GreenPlogging.team}
        teamMembers={project_GreenPlogging.teamMembers}
        description={project_GreenPlogging.description}
        frontEnd={project_GreenPlogging.techStack.frontEnd}
        backEnd={project_GreenPlogging.techStack.backEnd}
        color={"bg-myGreen"}
        addClassName={"mx-4"}
      />
      <div className="bg-myBlue p-8 lg:p-16 lg:flex justify-around font-notoKR">
        <div className="flex w-[100%] overflow-x-auto space-x-2 lg:w-auto lg:space-x-12">
          {project_GreenPlogging.img1?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="h-80 rounded-lg"
            />
          ))}
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-4xl font-semibold mb-4 font-poppin">{`Reservation & Review & Search`}</h1>
          <div className="text-base space-y-1 font-notoKR mb-3">
            <p className="font-semibold text-lg">모임(Reservation)</p>
            <p>
              ✓ 하루 세번 정해진 시간에 모임이 자동 생성되어서 원하는 시간에 참가 신청할 수 있음
            </p>
            <p className="font-semibold text-lg">후기(review)</p>
            <p>✓ 모임에 참가하면 후기 작성이 가능하고 다른 사용자들의 후기 확인 가능</p>
            <p className="font-semibold text-lg">산책로(Search)</p>
            <p>✓ 서울시 산책로를 표와 맵으로 시각화</p>
            <p>✓ 산책로 정보를 표에서 검색, 정렬 등이 가능하고 자세한 정보를 모달로 볼 수 있음</p>
          </div>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크를 통해
            보실 수 있습니다.
          </p>
        </div>
      </div>
      <div className="bg-bgDark p-8 lg:p-16 lg:flex justify-around font-notoKR">
        <div className="self-end mb-8 lg:mb-4">
          <h1 className="text-xl font-semibold mb-4">담당부분</h1>
          <ul>
            {project_GreenPlogging.responsiblePart?.map((i, _) => (
              <li key={_} className="text-base pb-2">
                ✓ {i}
              </li>
            ))}
          </ul>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크를 통해
            보실 수 있습니다.
          </p>
        </div>
        <div className="flex w-[100%] overflow-x-auto space-x-2 lg:w-auto lg:space-x-12">
          {project_GreenPlogging.img2?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="h-80 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenPlogging;
