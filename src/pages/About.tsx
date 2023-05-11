import React from "react";
import Email from "../components/icons/Email";
import Flower from "../components/icons/Flower";
import Github from "../components/icons/Github";
import Message from "../components/icons/Message";
import Notion from "../components/icons/Notion";
import Phone from "../components/icons/Phone";
import { my_Data } from "../myData";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-[90vh] w-full font-notoKR">
      <div className="bg-myOrange p-12">
        <h1 className="text-6xl font-bold text-center mb-10">About Me</h1>
        <div className="text-2xl font-semibold mb-10 text-center">
          <p>언제나 일신우일신(日新又日新)</p>
          <p>나날이 발전하는 프론트엔드 개발자 ‘임정은’입니다.</p>
        </div>
        <div>
          <p className="text-l mb-6 px-5">
            #HTML #CSS #JavaScript #TypeScript #React #Next.js #Git #Github
          </p>
        </div>
        <div className="text-base whitespace-pre-line leading-relaxed px-5">
          <ul>
            <li>청사진을 그리고 목표에 도달하기 위해 항상 노력합니다</li>
            <li>개발에 있어 이용의 실효성과 편의성을 담고 싶습니다</li>
            <li>
              생각하고 상상하는 것을 기술과 도구를 사용해 실제로 시각화하는 것에
              큰 관심이 있습니다
            </li>
          </ul>
          <br />
          <div>
            자기 계발과 능력성취에 적극적이고 도전적인 정신을 가지고 있습니다.
            새로운 것에 도전하는데 망설임이 적고 과감한 판단력과 성실성을 가지고
            있습니다. 이런 성향이 변화와 배움에 쉽게 적응할 수 있는 능력을
            갖추는 것에 큰 도움이 되었습니다. 풀빛마실 프로젝트에서 TypeScript,
            React-query, Recoil, Styled-Components 등 처음 접해보는
            라이브러리들에 익숙해지기 위해 자기 주도적으로 라이브러리의 문서를
            읽고, 어떻게 하면 실전에 효과적으로 접목할 수 있는지 분석했습니다.
            덕분에 다음 프로젝트에서는 향상된 실력으로 팀에 디자인과 CSS 부분을
            전담하고 상태/ 데이터 관리 등 작업의 세부적인 부분에서보다 전반적인
            기여를 하여 성공적인 결과를 만들어 낼 수 있었습니다.
          </div>
        </div>
      </div>
      <div className="grid grid-rows-5">
        <div className="bg-myBlue row-span-3 flex p-10 relative">
          <div className="w-[40%] h-[50%] bg-emerald-400 rounded-xl absolute top-10"></div>
          <div className="w-[40%] h-[50%] bg-amber-400 rounded-full absolute bottom-10 left-48 z-10"></div>
          <div className="absolute bottom-20 left-20 z-10">
            <Flower />
          </div>
          <div className="w-[40%] h-[50%] bg-red-400 rounded-3xl absolute top-20 right-10"></div>
        </div>
        <div className="row-span-2 grid grid-cols-3 w-full">
          <div className="bg-myPink w-full col-span-2 py-6 px-12">
            <div className="flex mb-4 items-center">
              <div>
                <Message />
              </div>
              <h1 className="text-4xl font-bold ml-2">Contact</h1>
            </div>
            <div className="space-y-3 text-lg">
              <div className="flex items-center space-x-2">
                <Github />
                <span className="hover:underline">
                  <a href={my_Data.contact.githubURL} target="_blank">
                    github/zzeong315
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Email />
                <span className="hover:underline">
                  <a href={my_Data.contact.emailURL} target="_blank">
                    zzeong315@gamil.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone />
                <span>{my_Data.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Notion />
                <div className="space-y-1">
                  <p className="hover:underline">
                    <a href={my_Data.contact.notionURL} target="_blank">
                      - Study Notion
                    </a>
                  </p>
                  <p className="hover:underline">
                    <a href={my_Data.contact.resumeURL} target="_blank">
                      - 이력서, 자소서 Notion
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-myGreen col-span-1 p-6 hover:bg-lime-700">
            <a href={my_Data.contact.resumePDF} target="_blank">
              <h1 className="text-5xl font-semibold">Resume</h1>
              <h1 className="text-3xl my-4">
                이력서 <br /> 보러가기
              </h1>
              <h1 className="text-6xl">&rarr;</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
