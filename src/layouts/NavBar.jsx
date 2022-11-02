import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";
import rohit from "assets/rohit.jpeg";

function NavBar() {
  return (
    // navbar
    <div className="sticky top-0 flex h-[50px] justify-between border-b-2 bg-white py-[10px] px-5">
      {/* left  */}
      <div className="flex items-center gap-3">
        <Link to={ROUTE_PATH.Home}>
          <span className="text-xl font-bold text-blue-700">rohitSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        {/* search  */}
        <div className="flex items-center gap-[10px] border-2">
          <SearchOutlinedIcon />
          <input type="search" placeholder="Search..." className="" />
        </div>
      </div>
      {/* right  */}
      <div className="flex items-center gap-5">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        {/* user  */}
        <div className="flex items-center gap-2 font-medium">
          <img
            className="h-7 w-7 rounded-full object-cover "
            loading="lazy"
            src={rohit}
            alt="Rohit Kumar"
            title="Rohit Kumar"
          />
          <span>Rohit Kumar</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
