interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  team: boolean;
  teamMembers?: string;
  period: string;
  techStack: {
    frontEnd: string[];
    backEnd: string[];
    AI?: string[];
  };
  img1?: string[];
  img2?: string[];
  img3?: string[];
  responsiblePart?: string[];
  githubURL: string;
  notionURL: string;
  codesandURL?: string;
}

export const project_WouldU: ProjectTypes = {
  id: 1,
  title: "우쥬(Would U)",
  description: `친구와 일기를 서로 교환해 감정을 나누고 일정 관리까지 가능한 서비스입니다.
    일기를 작성하면 작성한 일기를 바탕으로 ai가 감정을 분석해 달력에 알려주고 감정을 바탕으로 활동을 추천해줍니다.`,
  team: true,
  teamMembers: "총 5명 (프론트 3명, 백엔드 1명, AI 1명)",
  period: "2022.11.14 - 2022.12.16",
  techStack: {
    frontEnd: [
      "Next.js",
      "Typescript",
      "Recoil",
      "Tanstack",
      "Axios",
      "React-hook-form",
      "Styled-components",
      "Framer-motion",
    ],
    backEnd: ["Nest.js", "Typescript", "TypeORM", "JWT", "MySQL"],
    AI: ["Python", "Tensorflow 1.15.0", "Docker", "Flask", "ALBERT"],
  },
  img1: ["/image/wouldU/darkmode_home.png","/image/wouldU/todo.png","/image/wouldU/diary.png"],
  img2: ["/image/wouldU/friend1.png","/image/wouldU/friend2.png","/image/wouldU/friend3.png"],
  img3: ["/image/wouldU/calendar_emtion.png", "/image/wouldU/menu.png"],
  responsiblePart: [
    "프론트엔드, 서비스 구상, 발표",
    "라이브러리 사용하지 않고 달력을 제작(용량을 줄임), 달력에 감정 데이터를 보여줌",
    "데이터 처리를 통한 차트 제작",
    "디자인(다크모드, 반응형) 전반, CSS 전반 등",
  ],
  githubURL: "https://github.com/zzeong315/ai_project",
  notionURL:
    "https://mint-protocol-b99.notion.site/Would-U-c8d33d3ee2c843a58cd3505499a2e117",
};

export const project_GreenPlogging: ProjectTypes = {
  id: 2,
  title: "풀빛마실",
  description: `서울시 산책로 데이터와 쓰레기통 데이터를 통해 건강하고 쾌적한 산책을 즐기면서 깔끔하게 뒤처리를 할 수 있도록 경로를 제공하는 플로깅 서비스입니다.`,
  team: true,
  teamMembers: "총 5명 (프론트 3명, 백엔드 2명)",
  period: "2022.10.03 - 2022.10.21",
  techStack: {
    frontEnd: [
      "React",
      "Typescript",
      "Recoil",
      "Tanstack-query",
      "Axios",
      "React-hook-form",
      "Styled-components",
      "Framer-motion",
      "Full-page",
      "React-table",
    ],
    backEnd: ["Express", "MariaDB", "Nodemailer"],
  },
  img1: ["/image/greenPlogging/reservation.png", "/image/greenPlogging/review.png"],
  img2: ["/image/greenPlogging/chart.png", "/image/greenPlogging/sm_menu.png", "/image/greenPlogging/sm_reservation.png"],
  responsiblePart: [
    "프론트엔드, 서비스 구상",
    "검색, 정렬 등이 가능한 산책로 표 구현",
    "차트 제작, 디자인, 반응형 등",
  ],
  githubURL: "https://github.com/zzeong315/data_project",
  notionURL:
    "https://mint-protocol-b99.notion.site/98302d281978428592823c6d68fb0b1b",
};

export const project_PortfolioShare: ProjectTypes = {
  id: 3,
  title: "포트폴리오 공유 웹 서비스",
  description: `복잡한 부분 없이 간편하게 사용자의 학력, 수상 이력, 프로젝트, 자격증을 정리하여 다른 사용자들과 공유할 수 있는 포트폴리오 공유 웹 서비스입니다.`,
  team: true,
  teamMembers: "총 5명 (프론트 3명, 백엔드 2명)",
  period: "2022.08.22 - 2022.09.02",
  techStack: {
    frontEnd: ["React", "Axios", "React-Bootstrap", "styled-components"],
    backEnd: ["Express (nodemon, babel-node)", "Mongodb", "Mongoose"],
  },
  img1: ["/image/portfolioShare/mypage.png","/image/portfolioShare/education.png"],
  img2: ["/image/portfolioShare/network.png"],
  responsiblePart: [
    "프론트엔드, 발표",
    "MVP 중 Education부분을 담당(추가, 수정에 컴포넌트 재사용)",
  ],
  githubURL: "https://github.com/zzeong315/web_project",
  notionURL:
    "https://mint-protocol-b99.notion.site/5d01101fbd60462baeb2b3bdbc128462",
};

export const project_ShareMe: ProjectTypes = {
  id: 4,
  title: "Share Me",
  description: `공유가 중요해진 시대에 서로의 생각을 사람들과 서로 메세지로 공유하는 간단한 SNS 형식의 서비스입니다.`,
  team: false,
  period: "2023.04.10 - 2023.04.15",
  techStack: {
    frontEnd: ["Next.js", "Typescript", "SWR", "React-hook-form", "Tailwind"],
    backEnd: ["Prisma", "iron-session"],
  },
  img1: ["/image/shareMe/shareme_home.png", "/image/shareMe/shareme_detail.png", "/image/shareMe/shareme_profile.png"],
  img2: ["/image/shareMe/shareme_join.png","/image/shareMe/shareme_login.png", "/image/shareMe/shareme_change.png"],
  githubURL: "https://github.com/zzeong315/shareme-app",
  notionURL:
    "https://mint-protocol-b99.notion.site/SHARE-ME-bc9886b569f34438992750e7b22af444",
    codesandURL: "https://codesandbox.io/p/github/zzeong315/shareme-app/main?workspaceId=bad6436e-e857-4290-ba28-698589c2c0ff&file=%2FREADME.md"
};
