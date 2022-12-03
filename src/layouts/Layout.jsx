import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import NavBar from "./NavBar";
import RightBar from "./RightBar";

function Layout() {
  return (
    <>
      <div>
        <NavBar />
        <div className="flex bg-slate-100">
          <LeftBar />
          <div className="flex-[6_6_0%] ">
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default Layout;
