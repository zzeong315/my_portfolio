import React from "react";
import { Link, useMatch } from "react-router-dom";

const Navbar = () => {
  const projectMatch = useMatch('/project/*');
  const AboutMatch = useMatch('about');

  return (
    <nav className="flex justify-between items-center h-[10vh] px-12 bg-bgLight text-darkText">
      <div>
        <Link to="/">
          <div className="w-8 h-8 rounded-full bg-myPurple hover:bg-myPink"></div>
        </Link>
      </div>
      <ul className="flex space-x-8">
        <li className={projectMatch ? "text-myPurple hover:text-myPink" : "hover:text-myPink"}><Link to="/project">Project</Link></li>
        <li className={AboutMatch ? "text-myPurple hover:text-myPink" : "hover:text-myPink"}><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
