import React from "react";
import Butterfly from "../components/icons/Butterfly";
import Email from "../components/icons/Email";
import Flower from "../components/icons/Flower";
import Github from "../components/icons/Github";
import Lightning from "../components/icons/Lightning";
import Message from "../components/icons/Message";
import Notion from "../components/icons/Notion";
import Phone from "../components/icons/Phone";
import Star from "../components/icons/Star";
import { my_Data } from "../myData";

const About = () => {
  return (
    <div className="flex flex-col h-auto md:grid md:grid-cols-2 md:h-[90vh] w-full font-notoKR">
      <div className="bg-myOrange px-6 py-8 md:px-12 md:py-16 flex flex-col items-center relative">
        <h1 className="text-6xl font-bold text-center mb-10">About Me</h1>
        <div className="text-xl sm:text-2xl font-semibold mb-8 text-center">
          {my_Data.introduction.map((i, _) => (
            <p key={_}>{i}</p>
          ))}
        </div>
        <div className="text-base whitespace-pre-line leading-relaxed px-3 sm:px-5 mb-6">
          <ul>
            {my_Data.mainDescription.map((i, _) => (
              <li key={_} className="flex items-center font-semibold">
                <Star fillColor="yellow"/>
                {i}
              </li>
            ))}
          </ul>
          <br />
          <div className="">{my_Data.subDescription}</div>
        </div>
        <div className="flex flex-col px-6 py-4 bg-amber-300 bg-opacity-20 rounded-3xl">
          <div className="text-xl font-semibold mb-2 flex"><Lightning width="30px" height="30px" fillColor="yellow" className="mr-1" />Tech Stacks</div>
          <div className="flex flex-wrap text-lg w-[80%]">
            {my_Data.techStack.map((i) => (
              <span
                key={i}
                className="m-1 text-slate-700 font-poppin font-medium"
              >
                #{i}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-rows-5">
        <div className="bg-myBlue sm:row-span-3 flex justify-center p-10 relative group">
          <div className="hidden sm:block w-[40%] h-[50%] bg-emerald-400 rounded-xl absolute top-10 left-10 bg-profile1 bg-cover bg-center">
            <div className="border-dashed border-4 border-emerald-400 w-[100%] h-[100%] rounded-xl"></div>
          </div>
          <div className="w-[80%] h-[30vh] place-self-center sm:w-[40%] sm:h-[50%] bg-amber-100 rounded-full sm:absolute sm:bottom-10 sm:left-48 z-10 bg-profile3 bg-cover bg-center">
            <div className="border-dashed border-4 border-amber-400 w-[100%] h-[100%] rounded-full"></div>
          </div>
          <div className="hidden sm:block w-[40%] h-[50%] bg-red-400 rounded-3xl absolute top-20 right-10 bg-profile2 bg-cover bg-center">
            <div className="border-dashed border-4 border-pink-400 w-[100%] h-[100%] rounded-3xl"></div>
          </div>
          <div className="absolute bottom-20 left-20 z-10 group-hover:animate-spin-slow">
            <Flower />
          </div>
          <div className="absolute top-8 right-10 z-10 rotate-12 group-hover:animate-wiggle">
            <Butterfly strokeColor="yellow" />
          </div>
        </div>
        <div className="sm:row-span-2 md:grid md:grid-cols-3 w-full">
          <div className="bg-myPink w-full col-span-1 md:col-span-2 py-6 px-6 md:px-12 group">
            <div className="flex mb-4 items-center">
              <div className="group-hover:animate-wiggle">
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
          <div className="bg-myGreen col-span-1 p-6 hover:bg-lime-700 relative group">
            <a href={my_Data.contact.resumePDF} target="_blank">
              <h1 className="text-5xl font-semibold">Resume</h1>
              <h1 className="text-3xl my-4">
                이력서 <br /> 보러가기
              </h1>
              <h1 className="text-6xl">&rarr;</h1>
              <div className="group-hover:animate-spin-slow absolute bottom-12 right-12"><Flower fillColor="#FBB04C" width="70" height="70"/></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
