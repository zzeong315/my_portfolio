interface MyDataTypes {
  name: string,
  position: string,
  techStack: string[],
  description: string,
  contact: {
    emailURL: string,
    githubURL: string,
    phone: string,
    notionURL: string,
    resumeURL: string,
    resumePDF: string,
  }
}

export const my_Data : MyDataTypes = {
  name: "임정은",
  position: "Front-end engineer",
  techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git", "Github"],
  description: "",
  contact: {
    emailURL: "mailto:zzeong@gmail.com",
    githubURL: "https://github.com/zzeong315",
    phone: "+82 10-6757-7915",
    notionURL: "https://mint-protocol-b99.notion.site/STUDY-f40af5b616ec4bdb943392d994b76605",
    resumeURL: "https://mint-protocol-b99.notion.site/ec006816fb494cae8ced73f31f7ffd89",
    resumePDF: "https://drive.google.com/file/d/1sTUL-G4yQAgRuiQNxdvpeL4LXQX7RtlB/view?usp=share_link",
  }
}