import React from "react";
import Github from "../components/icons/Github";
import Notion from "../components/icons/Notion";
import { WouldULogo } from "../components/icons/WouldULogo";
import ProjectDetail from "../components/ProjectDetail";
import { project_WouldU } from "../projectData";

const WouldU = () => {
  return (
    <div className="grid gird-rows-3">
      <ProjectDetail
        logo={<WouldULogo />}
        title={project_WouldU.title}
        githubURL={project_WouldU.githubURL}
        notionURL={project_WouldU.notionURL}
        period={project_WouldU.period}
        team={project_WouldU.team}
        teamMembers={project_WouldU.teamMembers}
        description={project_WouldU.description}
        frontEnd={project_WouldU.techStack.frontEnd}
        backEnd={project_WouldU.techStack.backEnd}
        AI={project_WouldU.techStack.AI}
        color={"bg-myPurple"}
      />
      <div className="bg-myOrange p-8 lg:flex lg:p-10">
        <div className="flex flex-col w-[100%] overflow-x-auto lg:w-[60%] h-[410px] lg:overflow-y-auto border-2 border-amber-400 shadow-lg lg:justify-self-center">
          {project_WouldU.img1?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="shadow-xl"
            />
          ))}
        </div>
        <div className="lg:w-[40%] lg:px-8 mt-8 lg:mt-0">
          <h1 className="font-poppin text-[2.3rem] font-bold mb-4">
            {`Home & Schedule & Diary`}
          </h1>
          <div className="text-base space-y-1 font-notoKR mb-3">
            <p className="font-semibold text-lg">홈</p>
            <p>✓ {`분석된 감정 기록을 캘린더, 차트 등으로 제공 (나 & 상대방)`}</p>
            <p className="font-semibold text-lg">일정관리</p>
            <p>✓ {`일별로 일정 생성, 수정, 삭제, 완료 처리`}</p>
            <p>✓ {`추천받은 활동은 자동으로 투두 리스트에 추가됨`}</p>
            <p className="font-semibold text-lg">교환일기</p>
            <p>✓ {`친구가 있는 경우에만 접근 가능`}</p>
            <p>✓ {`날짜별, 월별 조회가능`}</p>
            <p>✓ {`작성한 교환일기를 통해 감정 분석, 활동추천`}</p>
          </div>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크를 통해
            보실 수 있습니다.
          </p>
        </div>
      </div>
      <div className="bg-bgDark font-notoKR lg:flex lg:justify-around items-center p-8 lg:p-12">
        <div className="lg:mx-10">
          <h1 className="text-3xl font-semibold mb-4">교환일기를 위한 친구연결</h1>
          <div className="text-base space-y-1 font-notoKR mb-3">
            <p>✓ 친구 코드로 친구 요청을 함</p>
            <p>✓ 받은 친구 신청 조회하여 친구 신청 수락하거나 거절할 수 있음</p>
            <p>✓ 친구를 끊는 것도 가능</p>
          </div>
        </div>
        <div className="flex space-x-2 w-[100%] overflow-x-auto lg:w-auto mt-8 lg:mt-0">
          {project_WouldU.img2?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="w-64 rounded-md shadow-xl"
            />
          ))}
        </div>
      </div>
      <div className="bg-myPink font-notoKR lg:flex lg:justify-around p-8 lg:p-12">
        <div className="flex lg:space-x-12 w-[100%] overflow-x-auto space-x-2 lg:w-auto">
          {project_WouldU.img3?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="h-80 rounded-md shadow-xl"
            />
          ))}
        </div>
        <div className="lg:mx-10 self-end">
          <h1 className="text-xl font-semibold mb-4 mt-8">담당부분</h1>
          <ul>
            {project_WouldU.responsiblePart?.map((i, _) => (
              <li key={_} className="text-base pb-2"> ✓ {i}</li>
            ))}
          </ul>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크를 통해
            보실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WouldU;
