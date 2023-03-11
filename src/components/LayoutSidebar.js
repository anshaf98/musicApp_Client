import React, { useEffect, useState } from "react";
import { Sidebar } from "../common/Sidebar";

export const LayoutSidebar = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [siderbarTop, setSiderbarTop] = useState(undefined);

  useEffect(() => {
    const sidebarElement = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSidebarWidth(sidebarElement.width);
    setSiderbarTop(sidebarElement.top);
  }, []);

  useEffect(() => {
    if (!siderbarTop) return;

    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [siderbarTop]);

  const isSticky = (e) => {
    const sidebarElement = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;

    if (scrollTop >= siderbarTop - 10) {
      sidebarElement.classList.add("is-sticky");
    } else {
      sidebarElement.classList.remove("is-sticky");
    }
  };

  return (
    <>
      <main className="md:flex md:justify-between px-5 mt-8 h-[100vh]">
        <div className="content w-full md:w-[73%]">{children}</div>

        <div
          className="md:w-[25%] border-2 border-solid border-gray-100 rounded-xl p-5"
          style={{ width: sidebarWidth }}
        >
          <Sidebar />
        </div>
      </main>
    </>
  );
};
