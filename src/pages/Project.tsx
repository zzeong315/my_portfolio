import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import { WouldULogo } from "../components/icons/WouldULogo";
import GreenPloggingLogo from "../components/icons/GreenPloggingLogo";
import { SharemeLogo } from "../components/icons/SharemeLogo";

interface ProjectListProps {
  title: string;
  team: boolean;
  description: string;
  bgColor: string;
  link: string;
  logo: any;
}

const Project = () => {
  return (
    <div className="w-full bg-bgDark">
      <div className="h-[18vh] text-7xl font-medium flex items-center ml-10">
        Project
      </div>
      <ul>
        <ProjectList
          logo={<SharemeLogo />}
          title="Share Me"
          team={false}
          description={`공유가 중요해진 시대에 서로의 생각을 사람들과 서로 메세지로 공유하는 간단한 SNS 형식의 서비스입니다.`}
          bgColor={"bg-myPink"}
          link="/project/shareme"
          addClassName="ml-4"
        />
        <ProjectList
          logo={<WouldULogo />}
          title="우쥬(Would U)"
          team
          description={`친구와 일기를 서로 교환해 감정을 나누고 일정 관리까지 가능한 서비스입니다. 
          일기를 작성하면 작성한 일기를 바탕으로 ai가 감정을 분석해 달력에 알려주고 감정을 바탕으로 활동을 추천해줍니다.`}
          bgColor={"bg-myPurple"}
          link="/project/wouldU"
        />
        <ProjectList
          logo={<GreenPloggingLogo />}
          title="풀빛마실"
          team
          description={`서울시 산책로 데이터와 쓰레기통 데이터를 통해 건강하고 쾌적한 산책을 즐기면서 깔끔하게 뒤처리를 할 수 있도록 경로를 제공하는 플로깅 서비스입니다.`}
          bgColor={"bg-myGreen"}
          link="/project/greenplogging"
          addClassName="ml-6"
        />
        <ProjectList
          title="포트폴리오 공유 웹사이트"
          team
          description={`복잡한 부분 없이 간편하게 사용자의 학력, 수상 이력, 프로젝트, 자격증을 정리하여 다른 사용자들과 공유할 수 있는 포트폴리오 공유 웹 서비스입니다.`}
          bgColor={"bg-myOrange"}
          link="/project/portfolioshare"
        />
      </ul>
    </div>
  );
};

export default Project;
