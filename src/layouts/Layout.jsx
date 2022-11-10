import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import NavBar from "./NavBar";
import RightBar from "./RightBar";

function Layout() {
  return (
    <>
    <div className="">
      <NavBar />
      <div className="flex bg-white">
        <LeftBar />
        <div className="flex-[6_6_0%]">
          <Outlet />
        </div>
        <RightBar />
      </div>
      </div>
    </>
  );
}

export default Layout;
