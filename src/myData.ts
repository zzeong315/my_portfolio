interface MyDataTypes {
  name: string;
  position: string;
  techStack: string[];
  introduction: string[];
  mainDescription: string[];
  subDescription: string;
  contact: {
    emailURL: string;
    githubURL: string;
    phone: string;
    notionURL: string;
    resumeURL: string;
    resumePDF: string;
  };
}

export const my_Data: MyDataTypes = {
  name: "임정은",
  position: "Front-end engineer",
  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Github",
    "Figma"
  ],
  introduction:["언제나 일신우일신(日新又日新)", "나날이 발전하는 프론트엔드 개발자 ‘임정은’입니다."],
  mainDescription: [
    "목표에 도달하기 위한 협업과 의사소통을 즐깁니다.",
    "개발에 있어 이용의 실효성과 편의성을 담고 싶습니다.",
    "상상하는 것을 기술을 이용해 실제로 시각화하는 것에 큰 관심이 있습니다.",
  ],
  subDescription: `새로운 것을 배우고 도전하는 것을 좋아합니다. 이런 성향이 변화와 배움에 쉽게 적응할 수 있는 능력을 갖추는 데 도움이 되어 프론트엔드로서의 성장에 밑거름이 되었습니다.
  창의성을 발휘하는 일에 흥미를 느끼며 디자인에 관심이 많습니다. 그래서 상상을 시각화하는 일에 즐거움을 느낍니다. 또한, 꼼꼼한 성격으로 실수를 줄이기 위해서 노력합니다.`,
  contact: {
    emailURL: "mailto:zzeong@gmail.com",
    githubURL: "https://github.com/zzeong315",
    phone: "+82 10-6757-7915",
    notionURL:
      "https://mint-protocol-b99.notion.site/STUDY-f40af5b616ec4bdb943392d994b76605",
    resumeURL:
      "https://mint-protocol-b99.notion.site/ec006816fb494cae8ced73f31f7ffd89",
    resumePDF:
      "https://drive.google.com/file/d/1sTUL-G4yQAgRuiQNxdvpeL4LXQX7RtlB/view?usp=share_link",
  },
};
