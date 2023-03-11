import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navBar } from "./dummyData/data";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");

  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-lg bg-white">
        {/* pc */}
        <div className=" hidden md:flex justify-between px-7 p-2">
          <div className=" logo flex">
            <div>
              <img src="" alt="" width="40px" height="40px" />
            </div>

            <h2 className=" text-2xl font-semibold ml-3">Music</h2>
          </div>

          <div className="menu">
            <ul className=" flex">
              {navBar.map((list, i) => (
                <li className={`mx-5 py-2 ${activeNavLink}`} key={i}>
                  <NavLink to={list.path}>{list.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className=" profile flex items-center">
            <BsSearch size={22} />
            <button className=" bg-primary px-6 py-1.5 text-white rounded-full mx-3">
              Upload
            </button>
            <div className="img w-10 h-10 rounded-full">
              <img
                src="https://res.cloudinary.com/dpakxje91/image/upload/v1667974590/Screenshot_2022-11-09_114447_xl7pvt.png"
                alt=""
                className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className=" flex items-center justify-between md:hidden h-full pl-2 pr-8">
          <div className=" logo flex">
            <div>
              <img src="" alt="" width="40px" height="40px" />
            </div>

            <h2 className=" text-2xl font-semibold ml-3">Music</h2>
          </div>

          <div>
            {isMenu && (
              <div className=" bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full">
                <ul className=" flex flex-col">
                  {navBar.map((list, i) => (
                    <li className={`mx-5 py-2 ${activeNavLink}`} key={i}>
                      <NavLink to={list.path}>{list.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <HiOutlineMenuAlt1
              className=" cursor-pointer"
              size={20}
              onClick={() => setIsMenu(!isMenu)}
            />
          </div>
        </div>
      </header>
    </>
  );
};
