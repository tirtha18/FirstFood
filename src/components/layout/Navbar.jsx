import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Recipe", path: "/recipe" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
      <nav className="w-screen flex flex-row  justify-center md:justify-between  bg-gray-100 bg-opacity-90 border-b border-gray-800 h-24 items-center px-10 md:px-20 lg:px-44 z-10 shadow-lg">
        <h1 className="md:block underline hidden text-red-600 font-semibold text-6xl hover:scale-105 duration-150 font-allura cursor-pointer">
          First Food
        </h1>
        <div>
          <ul className="flex flex-row gap-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-heading font-bold text-gray-800 text-lg p-2 hover:cursor-pointer font-playfair transition duration-300 transform hover:scale-110 hover:underline"
              >
                <Link to={item.path} className="hover:text-red-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

  );
}