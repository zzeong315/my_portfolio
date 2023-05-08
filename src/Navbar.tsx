import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[10vh] px-12 bg-bgLight text-darkText">
      <div>
        <Link to="/">
          <div className="w-8 h-8 rounded-full bg-myPurple hover:bg-myPink"></div>
        </Link>
      </div>
      <ul className="flex space-x-8">
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
