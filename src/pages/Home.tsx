import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flower from "../components/icons/Flower";

const Home = () => {
  return (
    <div className="bg-lightDark text-darkText flex justify-center xl:grid xl:grid-cols-2 h-[90vh] relative">
      <div className="xl:mr-2 mt-36 justify-self-end flex flex-col whitespace-pre-line leading-relaxed relative">
        <div className="absolute -top-12 right-0 animate-spin-slow">
          <Flower width="60" height="60" />
        </div>
        <div className="absolute -top-4 right-16 animate-spin-slow">
          <Flower width="50" height="50" fillColor="lightblue" />
        </div>
        <div className="w-[300px] sm:w-[400px] h-[180px]">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">Hello</h1>
            <h1 className="text-3xl sm:text-5xl mb-6 font-bold">I'm JeongEun Lim</h1>
            <p className="text-2xl mb-4">Front-End engineer</p>
          </div>
        </div>
        <p className="text-l">#HTML #CSS #JavaScript #TypeScript</p>
        <p className="text-l mb-6">#React #Next.js #Git #Github</p>
        <div className="flex flex-col xl:hidden">
          <Link to="/project">
            <span className="text-slate-700 hover:underline hover:text-slate-500">
              Go to Project &rarr;
            </span>
          </Link>

          <Link to="/about">
            <span className="text-slate-700 hover:underline hover:text-slate-500">Go to About &rarr;</span>
          </Link>
        </div>
      </div>
      <div className="fixed bottom-28 right-80">
        <Link to="/project">
          <div
            className={`hidden w-80 h-80 rounded-full bg-myPink ml-20 mb-[-80px] z-0 xl:flex justify-center items-center group hover:bg-red-400`}
          >
            <div className="invisible group-hover:visible group-hover:animate-bounce text-2xl font-semibold text-center text-red-100">
              Go to Project <br />
              프로젝트 보러가기
            </div>
          </div>
        </Link>

        <Link to="/about">
          <div className="hidden w-64 h-64 rounded-full bg-myOrange z-10 xl:flex justify-center items-center group hover:bg-amber-500">
            <p className="invisible group-hover:visible text-2xl font-semibold text-center text-amber-100 group-hover:animate-bounce">
              Go to About <br /> 소개 보러가기
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
