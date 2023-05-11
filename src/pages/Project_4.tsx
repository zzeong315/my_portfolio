import React from "react";
import { SharemeLogo } from "../components/icons/SharemeLogo";
import ProjectDetail from "../components/ProjectDetail";
import { project_ShareMe } from "../projectData";

const ShareMe = () => {
  return (
    <div>
      <ProjectDetail
        logo={<SharemeLogo />}
        title={project_ShareMe.title}
        githubURL={project_ShareMe.githubURL}
        notionURL={project_ShareMe.notionURL}
        codesandURL={project_ShareMe.codesandURL}
        period={project_ShareMe.period}
        team={project_ShareMe.team}
        description={project_ShareMe.description}
        frontEnd={project_ShareMe.techStack.frontEnd}
        backEnd={project_ShareMe.techStack.backEnd}
        color={"bg-myPink"}
        addClassName={"mx-4"}
      />
      <div className="bg-myBlue p-16 flex justify-around font-notoKR">
        <div className="flex space-x-12">
          {project_ShareMe.img1?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="w-52 h-80 rounded-2xl"
            />
          ))}
        </div>
        <div className="mx-10 self-end">
          <h1 className="font-poppin text-5xl font-bold mb-4">SNS Service</h1>
          <div className="text-base space-y-1 font-notoKR mb-3">
            <p>✓ 사용자가 메세지를 작성할 수 있음</p>
            <p>✓ 메세지에 댓글을 작성해 소통 할 수 있음</p>
            <p>✓ 모든 사용자가 작성한 메세지를 볼 수 있음</p>
            <p>✓ swr의 mutate를 이용하여 좋아요, 북마크 실시간 시각화함</p>
            <p>✓ 사용자가 작성, 좋아요, 북마크 한 메세지를 모아 볼 수 있음</p>
          </div>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크와
            코드샌드박스를 이용해주세요.
          </p>
        </div>
      </div>
      <div className="bg-bgDark font-notoKR flex justify-around p-16">
        <div className="mx-10 self-end">
          <h1 className="font-poppin text-5xl font-bold mb-4">User</h1>
          <div className="text-base space-y-1 font-notoKR mb-3">
            <p>✓ 회원가입, 로그인 통해 사용자의 정보 생성, 확인 가능</p>
            <p>✓ iron-session을 사용하여 쿠키를 암호화하여 전송시키고 받음</p>
            <p>✓ 사용자 본인 정보 수정 가능</p>
          </div>
          <p className="text-slate-800 text-xs">
            ※ 더 자세한 내용은 위에 '더 자세한 내용 보러가기' 노션 링크와
            코드샌드박스를 이용해주세요.
          </p>
        </div>
        <div className="flex space-x-12">
          {project_ShareMe.img2?.map((i, _) => (
            <img
              key={_}
              src={`${process.env.PUBLIC_URL}${i}`}
              className="w-52 h-80 rounded-2xl shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareMe;
