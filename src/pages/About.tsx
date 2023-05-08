import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-[90vh] w-full">
      <div className="bg-myOrange">About Me</div>
      <div className="grid grid-rows-2">
        <div className="bg-myBlue row-span-1">Photo</div>
        <div className="bg-myPink row-span-1">Contact</div>
      </div>
    </div>
  );
};

export default About;
