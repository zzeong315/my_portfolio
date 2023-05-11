import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flower from "../components/icons/Flower";

const Home = () => {
  return (
    //grid로 변경하기
    <div className="bg-lightDark text-darkText grid grid-cols-2 h-[90vh] relative">
      <div className="mr-2 mt-36 justify-self-end flex flex-col whitespace-pre-line leading-relaxed">
        <div className="self-end mb-[-20px] hover:rotate-45">
          <Flower />
        </div>
        <div className="w-[400px] h-[180px]">
          <div>
            <h1 className="text-5xl font-bold mb-3">Hello</h1>
            <h1 className="text-5xl mb-6 font-bold">I'm JeongEun Lim</h1>
            <p className="text-2xl mb-4">Front-End engineer</p>
          </div>
        </div>
        <p className="text-l">#HTML #CSS #JavaScript #TypeScript</p>
        <p className="text-l mb-6">#React #Next.js #Git #Github</p>
        <div className="flex flex-col items-start text-slate-600 md:hidden">
          <Link to="/project">
            <button className=" hover:underline">
              프로젝트 보러가기 &rarr;
            </button>
          </Link>
          <Link to="/about">
            <button className=" hover:underline">소개 보러가기 &rarr;</button>
          </Link>
        </div>
      </div>
      <div className="fixed bottom-28 right-80">
        <Link to="/project">
          <div
            className={`w-80 h-80 rounded-full bg-myPink ml-20 mb-[-80px] z-0 flex justify-center items-center group hover:bg-red-400`}
          >
            <div className="invisible group-hover:visible text-2xl font-semibold text-center text-red-100">
              Go to Project <br/>
              프로젝트 보러가기
            </div>
          </div>
        </Link>

        <Link to="/about">
          <div className="w-64 h-64 rounded-full bg-myOrange z-10 flex justify-center items-center group hover:bg-amber-500">
            <p className="invisible group-hover:visible text-2xl font-semibold text-center text-amber-100">Go to About <br/> 소개 보러가기</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
