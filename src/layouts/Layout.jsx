import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import NavBar from "./NavBar";
import RightBar from "./RightBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </>
  );
}

export default Layout;
